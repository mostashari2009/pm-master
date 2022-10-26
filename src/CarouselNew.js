import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import car1 from '../src/photo/car1.jpg'
import car2 from '../src/photo/car2.jpg'
import car3 from '../src/photo/car3.jpg'


class MyCarousel extends React.Component {
  render() {
    const images = [
      {
        original: car1,
      },
      {
        original: car2,
      },
      {
        original: car3,
      }
    ];

    const someComponent = props => {
      // console.log(props.someProps.objectKey)
      return <div>{/* {props.someProps.objectKey} */}</div>;
    };

    return (
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={false}
        showThumbnails={false}
        lazyLoad={true}
        showPlayButton={false}
        renderCustomControls={someComponent}
        showNav={false}
        showFullscreenButton={false}
        autoPlay={true}
      />
    );
  }
}

export default MyCarousel;