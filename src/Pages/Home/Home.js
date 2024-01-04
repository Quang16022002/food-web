import React from 'react';
import './Home.scss';
import Slider from '../../Components/Slider/Slider';
import Bg from '../../assets/img/heroBg.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <div className="container-fluid main px-5 py-2">
                <div className="row">
                    <div className="slide col-md-7 ">
                        <Slider />
                    </div>
                    <div className="introduction   col-md-5 ">
                        <div className="row d-flex justify-content-end">
                            <div className="col-md-10  introduction-bg d-flex justify-content-end">
                                <img src={Bg} alt="bg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="introduction-product">
                    <div className="d-flex justify-content-between">
                        <div className="introduction-product-item">
                            <Link className="custom-link" to="/products">
                                <img src="https://imgur.com/C8459pk.png" />
                                <div className="introduction-item-conten">
                                    <h3>Kem socola</h3>
                                    <p>Vị socola kết hợp dâu tây</p>
                                    <span>
                                        45.000 <span style={{ color: 'rgb(227, 8, 28)' }}>VND</span>
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="introduction-product-item1">
                            <Link className="custom-link" to="/products">
                                <img src="https://imgur.com/k34i9LI.png"></img>
                                <div className="introduction-item-conten">
                                    <h3>Dâu tây</h3>
                                    <p>Dâu tây thơm ngon</p>
                                    <span>
                                        120.000 <span style={{ color: 'rgb(227, 8, 28)' }}>VND</span>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="introduction-product-item">
                            <Link className="custom-link" to="/products">
                                <img src="https://imgur.com/T0zTpUU.png"></img>
                                <div className="introduction-item-conten">
                                    <h3>Gà 4 món</h3>
                                    <p>Đầy dủ hương vị đặc biệt</p>
                                    <span>
                                        149.000 <span style={{ color: 'rgb(227, 8, 28)' }}>VND</span>
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className="introduction-product-item1">
                            <Link className="custom-link" to="/products">
                                <img src="https://imgur.com/ngnQjyc.png"></img>
                                <div className="introduction-item-conten">
                                    <h3>Hải sản</h3>
                                    <p>Hương vị của biển</p>
                                    <span>
                                        199.000 <span style={{ color: 'rgb(227, 8, 28)' }}>VND</span>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>saas</div>
            </div>
        </div>
    );
};

export default Home;
