import './Slider.scss';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as apis from '../../apis';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Sliders = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevClick = () => {
        const lists = document.querySelectorAll('.item');
        const slide = document.getElementById('slide');
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            slide.prepend(lists[currentSlide - 1]);
        } else {
            setCurrentSlide(lists.length - 1);
            slide.prepend(lists[lists.length - 1]);
        }
    };

    //getApi
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const location = useLocation();

    // const isHomePage = location.pathname === '/';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await apis.getApiProductsSlide();

                setProducts(productsData);

                // setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                // setLoading(false);
            }
        };

        fetchData();
    }, []);

    //getApibanner
    const [banners, setBanner] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const location = useLocation();

    // const isHomePage = location.pathname === '/';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await apis.getApiBanner();

                setBanner(productsData);

                // setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                // setLoading(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // Set up a timer to advance to the next slide every 5 seconds
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        }, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [banners]);

    return (
        <div>
            <div className="Slide-top">
                <Slider {...sliderSettings}>
                    {banners.map((item, index) => (
                        <div className="Home-banner" key={index}>
                            <img className="img" src={item.image} alt={`Banner ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="container">
                <div id="slide">
                    {' '}
                    {products.map((product, index) => (
                        <div key={index} className="item">
                            <div className="image">
                                <Link to={isHomePage ? `products/${product.id}` : `${product.id}`}>
                                    {' '}
                                    <img src={product.image} />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <h1>An toàn & chất lượng</h1>
                                    <div className="des">
                                        Tinh hoa ẩm thực
                                        <br /> Á - Âu
                                    </div>
                                    <Link to="/products">
                                        <button>
                                            Nhiều hơn
                                            <i className="fa-solid fa-angle-right"></i>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </button>
                                    </Link>
                                </div>
                                <div className="right">
                                    <h1>Mô tả</h1>
                                    <ul>
                                        <li>
                                            <p>{product.name}</p>
                                        </li>
                                        <li>
                                            <p>{product.price}.00 VND</p>
                                        </li>
                                        <li>
                                            <p>
                                                {Array.from({ length: product.rate }, (_, index) => (
                                                    <i
                                                        key={index}
                                                        id="shiningStar"
                                                        style={{ color: 'rgb(250,171,139)' }}
                                                        className="fa-solid fa-star"
                                                    ></i>
                                                ))}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="directional">
                        <button id="prev" onClick={handlePrevClick}>
                            <i className="fa-solid fa-utensils"></i>
                        </button>
                        <p>
                            Click <i className="fa-regular fa-hand-point-up"></i> nếu bạn không biết nên chọn món gì
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sliders;
