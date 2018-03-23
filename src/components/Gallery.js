import React, { Component } from 'react';
class Gallery extends Component {

	constructor() {
		super();
	}

  render() {
    let images = this.props.images;
    let imagesPerRow = this.props.maxImagePerColumn;
    let imageSubarray = [];
    let alt = this.props.alt;

    while (images.length > 0) {
      imageSubarray.push(images.splice(0, imagesPerRow));
    }

    return (
      <div className="imageRow">
        {imageSubarray.map(
          (imageColumn) => {
            return (
                <div className="imageColumn">
                {imageColumn.map((imagesrc, index) => {
                  return(
                    
                      <img key={index} src={imagesrc} alt={alt}/>
                    
                  );
                })}
              </div>
            )
          }
        )}
      </div>
    );
  }
}

export default Gallery;
