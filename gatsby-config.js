module.exports = {
  siteMetadata: {
    title: 'Cynthia Lee | Web Developer',
  },
    plugins: [
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-prismjs`,
                options: {
                  // Class prefix for <pre> tags containing syntax highlighting;
                  // defaults to 'language-' (eg <pre class="language-js">).
                  // If your site loads Prism into the browser at runtime,
                  // (eg for use with libraries like react-live),
                  // you may use this to prevent Prism from re-processing syntax.
                  // This is an uncommon use-case though;
                  // If you're unsure, it's best to use the default value.
                  classPrefix: "language-",
                  // This is used to allow setting a language for inline code
                  // (i.e. single backticks) by creating a separator.
                  // This separator is a string and will do no white-space
                  // stripping.
                  // A suggested value for English speakers is the non-ascii
                  // character '›'.
                  inlineCodeMarker: null,
                },
              },
            ],
          },
        },
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-116230232-1",
            // Puts tracking script in the head instead of the body
            head: true,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
          },
        },
    ],
};
