import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IMG1 from "../images/SlideShow/SLIDEIMAGE4.jpg"
import IMG2 from "../images/SlideShow/Image 2.jpg"
import IMG3 from "../images/SlideShow/SLIDEBEST1.jpg"
import IMG4 from "../images/SlideShow/SLIDEIMAGE1.jpg"
import IMG5 from "../images/SlideShow/BESTSLIDE2.png"
import IMG6 from "../images/SlideShow/BESTSLIDE4.png"
import IMG7 from "../images/SlideShow/SLIDEIMAGE2.jpg"
import IMG8 from "../images/SlideShow/SLIDEIMAGE3.jpg"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,
    fade:true,
    // slide:true 
        // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
  };

  return (
    <Slider className='h-screen  w-full mt-24 z-0 ' {...settings}>
       
      <div>
        <img className=' w-full h-screen'src={IMG1} alt="Slide 1" />
      </div>
      <div>
        <img className=' w-full h-screen' src={IMG2} alt="Slide 2" />
      </div>
      <div>
        <img className=' w-full h-screen' src={IMG3} alt="Slide 3" />
      </div>
      <div>
        <img className=' w-full h-screen' src={IMG4} alt="Slide 3" />
      </div>

      <div>
        <img className=' w-full h-screen'src={IMG5} alt="Slide 1" />
      </div>
      <div>
        <img className=' w-full h-screen' src={IMG6} alt="Slide 2" />
      </div>
      <div>
        <img className=' w-full h-screen' src={IMG7} alt="Slide 3" />
      </div>
      <div>
        <img className=' w-full h-screen' src={IMG8} alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
