const path = require("path");
const s3 = require('s3');
const fs = require('fs');
const secrets = require('./secrets.json');

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

    return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`
    )
        .then(result => {
            if (result.errors) {
                return Promise.reject(result.errors);
            }

            result.data.allMarkdownRemark.edges
                .forEach(({node}) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: blogPostTemplate,
                        context: {} // additional data can be passed via context
                    });
                });
        });
};

exports.onPostBuild = (args, pluginOptions) =>
    new Promise(resolve => {
        if (secrets && secrets.s3) {

            // Init S3 client
            const client = s3.createClient({
                s3RetryCount: 6,
                s3RetryDelay: 30,
                s3Options: {
                    accessKeyId: secrets.s3.id,
                    secretAccessKey: secrets.s3.secret,
                    signatureVersion: 'v4',
                    region: secrets.s3.region
                },
            });

            // Sync dir
            const params = {
                localDir: "public",
                deleteRemoved: true,
                s3Params: {
                    Bucket: secrets.s3.bucket,
                    Prefix: secrets.s3.remoteDir,
                },
            };
            const uploader = client.uploadDir(params);

            uploader.on('error', function (err) {
                console.error("unable to sync:", err.stack);
                resolve();
            });
            uploader.on('progress', function () {
                console.log("progress", uploader.progressAmount, uploader.progressTotal);
            });
            uploader.on('end', function () {
                console.log("done uploading");
                resolve();
            });
        }
    });