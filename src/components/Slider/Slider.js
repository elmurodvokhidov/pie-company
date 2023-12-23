import Slider from "react-slick";
import slider1 from './img/slide-1.jpg'
import slider2 from './img/slide-1.jpg'
import slider3 from './img/slide-1.jpg'

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000
    };
    return (
        <Slider {...settings}>
            <div>
                <img style={{ width: '100%' }} src={slider1} alt="..." />
            </div>
            <div>
                <img style={{ width: '100%' }} src={slider2} alt="..." />
            </div>
            <div>
                <img style={{ width: '100%' }} src={slider3} alt="..." />
            </div>
        </Slider>
    )
}

export default SimpleSlider