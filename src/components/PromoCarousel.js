import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class PromoCarousel extends Component {
    render() {
        return (
            <div class="flex flex-col items-center justify-center flex-8">
              <h2 class="text-3xl font-bold md:text-5xl leading-solid text-sea-700">Parcerias Fechadas</h2>
              <Carousel>
                  <div class="flex flex-col items-center justify-center flex-8">
                      <img src="images/barzinho_show2.webp" alt=""/>
                  </div>
                  <div class="flex flex-col items-center justify-center flex-8">
                      <img src="images/barzinho_show2.webp" alt=""/>
                  </div>
                  <div class="flex flex-col items-center justify-center flex-8">
                      <img src="images/barzinho_show2.webp" alt=""/>
                  </div>
              </Carousel>
            </div>
        );
    }
};

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// export default class PromoCarousel extends Component {
//     render(){
//         const responsive = {
//             desktop: {
//               breakpoint: { max: 3000, min: 1024 },
//               items: 3,
//               slidesToSlide: 3 // optional, default to 1.
//             },
//             tablet: {
//               breakpoint: { max: 1024, min: 464 },
//               items: 2,
//               slidesToSlide: 2 // optional, default to 1.
//             },
//             mobile: {
//               breakpoint: { max: 464, min: 0 },
//               items: 1,
//               slidesToSlide: 1 // optional, default to 1.
//             }
//           };
//           return (
//             <Carousel
//                 swipeable={false}
//                 draggable={false}
//                 showDots={true}
//                 responsive={responsive}
//                 ssr={true} // means to render carousel on server-side.
//                 infinite={true}
//                 autoPlay={this.props.deviceType !== "mobile" ? true : false}
//                 autoPlaySpeed={1000}
//                 keyBoardControl={true}
//                 customTransition="all .5"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//                 deviceType={this.props.deviceType}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//                 >
//                 <div><img src="images/barzinho_show2.webp" alt=""/></div>
//                 <div><img src="images/barzinho_show2.webp" alt=""/></div>
//                 <div><img src="images/barzinho_show2.webp" alt=""/></div>
//                 <div><img src="images/barzinho_show2.webp" alt=""/></div>
//                 <div><img src="images/barzinho_show2.webp" alt=""/></div>
//                 <div><img src="images/barzinho_show2.webp" alt=""/></div>
//                 </Carousel>
//           )
//     }
// }