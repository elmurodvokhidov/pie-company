import Slider from "react-slick";
import slider1 from './img/slide-1.jpg'
import slider2 from './img/slide-1.jpg'
import slider3 from './img/slide-1.jpg'
import style from './Slider.module.css'

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        //   autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div>
            <div className={style.slider}>
                <Slider {...settings}>
                    <div>
                        <h3 className={style.slayd}>
                            {" "}
                            <img src={slider1} alt="..." />
                        </h3>
                    </div>
                    <div>
                        <h3 className={style.slayd}>
                            {" "}
                            <img src={slider2} alt="..." />
                        </h3>
                    </div>
                    <div>
                        <h3 className={style.slayd}>
                            {" "}
                            <img src={slider3} alt="..." />
                        </h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SimpleSlider