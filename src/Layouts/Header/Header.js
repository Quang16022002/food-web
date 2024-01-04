import React from 'react';
import './Header.scss';
import Avatar from '../../assets/img/avatar.png';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
const Header = () => {
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">
                        <Link to="/">
                            <motion.img whileTap={{ scale: 0.6 }} style={{ width: 35 }} src={Logo} alt="Logo" />
                        </Link>
                    </a>
                    <div className="Name-logo">
                        <h1>
                            <Link style={{ textDecoration: 'none', color: 'rgb(28, 27, 27)' }} className="" to="/">
                                City{' '}
                            </Link>
                        </h1>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link " aria-current="page" href="#">
                                    Trang chủ
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to="/products" className="nav-link ">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link " aria-current="page" href="#">
                                    Tin tức
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link " aria-current="page" href="#">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex search">
                            <input className=" me-2" type="text" placeholder="Tìm thứ bạn muốn..." />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                        <div>
                            <div className="row h-100 align-items-center align-items-center my-auto justify-content-between">
                                <div className=" cart col-md-7 col-2 col-xs-2 d-flex justify-content-start  ">
                                    <motion.i whileTap={{ scale: 0.6 }}>
                                        <Link to="/cart">
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </Link>
                                    </motion.i>
                                    <div className="qty">{state.length}</div>
                                </div>
                                <div className=" profile col-md-5 col-xs-10 col-10 d-flex justify-content-end">
                                    <motion.img
                                        whileTap={{ scale: 0.6 }}
                                        style={{ width: 40, height: 40, cursor: 'pointer' }}
                                        src={Avatar}
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
