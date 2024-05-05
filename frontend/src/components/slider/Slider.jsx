import './slider.scss'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from 'react';



const Slider = ({ images }) => {

    const [sliderIsOpen, setSliderIsOpen] = useState(false);


    return (
        <div className='slider'>



            {sliderIsOpen && <Swiper navigation={true} modules={[Navigation]}  loop={true} className="mySwiper">
                {images.map((img, i) => {
                    return <SwiperSlide key={i}>
                        <img src={img} alt="slider" />
                        <div className="close" onClick={() => setSliderIsOpen(false)}>X</div>
                    </SwiperSlide>
                })}
            </Swiper>}






            <div className="bigImage" onClick={() => setSliderIsOpen(true)}>
                <img src={images[0]} alt="item" />
            </div>

            <div className="smallImages" onClick={() => setSliderIsOpen(true)}>
                {images.slice(1).map((img, i) => {
                    return <img src={img} alt="item" key={i} />
                })}
            </div>
        </div>
    )
}

export default Slider