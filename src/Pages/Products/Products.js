import React from 'react';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.scss';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../reducx/action';
import * as apis from '../../apis';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null); // Thêm state để theo dõi nút đang được chọn
    const [showAllProducts, setShowAllProducts] = useState(true);

    // const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);

    // const isHomePage = location.pathname === '/';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await apis.getApiProducts();
                setProducts(productsData);
                setFilteredProducts(productsData); // Mặc định hiển thị tất cả sản phẩm
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const handleCategoryClick = (category) => {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
        setActiveCategory(category);
        setShowAllProducts(false);
    };
    const handleShowAllClick = () => {
        setFilteredProducts(products);
        setActiveCategory(null);
        setShowAllProducts(true);
    };

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };
    return (
        <div className="Home container h-auto ">
            {loading ? (
                <div className="loading  ">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <span>Loading</span>
                </div>
            ) : (
                <div>
                    <div className="menu-top  d-none d-md-flex ">
                        <motion.div whileTap={{ scale: 0.8 }} onClick={handleShowAllClick}>
                            <div className={`menu-top-item ${showAllProducts ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-utensils"></i>
                                </div>
                                <p>All</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('chicken')}>
                            <div className={`menu-top-item ${activeCategory === 'chicken' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-drumstick-bite"></i>
                                </div>
                                <p>Gà</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('rice')}>
                            <div className={`menu-top-item ${activeCategory === 'rice' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i className="fa-solid fa-bowl-food"></i>
                                </div>
                                <p>Cơm</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('seafood')}>
                            <div className={`menu-top-item ${activeCategory === 'seafood' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-fish-fins"></i>
                                </div>
                                <p>cá</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('salad')}>
                            <div className={`menu-top-item ${activeCategory === 'salad' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-cloud-meatball"></i>
                                </div>
                                <p>Salad</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('sup')}>
                            <div className={`menu-top-item ${activeCategory === 'sup' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-plate-wheat"></i>
                                </div>
                                <p>Súp & cà ri</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('drinks')}>
                            <div className={`menu-top-item ${activeCategory === 'drinks' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-martini-glass-citrus"></i>
                                </div>
                                <p>Đồ uống</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('fruit')}>
                            <div className={`menu-top-item ${activeCategory === 'fruit' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-apple-whole"></i>
                                </div>
                                <p>Hoa quả</p>
                            </div>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleCategoryClick('desserts')}>
                            <div className={`menu-top-item ${activeCategory === 'desserts' ? 'active' : ''}`}>
                                <div className="menu-icon">
                                    <i class="fa-solid fa-cheese"></i>
                                </div>
                                <p>Kem</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="grid container px-5 h-auto  ">
                        <h1 className="title">{showAllProducts ? 'Tất cả sản phẩm' : 'Danh sách sản phẩm'}</h1>
                        <div className="underlined"></div>
                        <div className="row products   ">
                            {filteredProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className=" products-list col-lg-3 col-md-6 col-sm-12 mb-3 mt-3    "
                                >
                                    <div className="products-item">
                                        <div className="item-top">
                                            <Link to={`${product.id}`}>
                                                <img src={product.image} />
                                            </Link>
                                            <div className="item-cart" onClick={() => addProduct(product)}>
                                                <i class="fa-solid fa-cart-plus"></i>
                                            </div>
                                        </div>
                                        <div className="item-info w-100 ">
                                            <button className="buy-item"> Mua ngay </button>
                                            <Link to={`${product.id}`}>
                                                {' '}
                                                <i class="fa-solid fa-eye"></i>
                                            </Link>
                                            <div>
                                                <h3>{product.name}</h3>
                                                <br />
                                                <p>
                                                    {' '}
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
                                                </p>
                                                <br />
                                                <span>
                                                    {product.price}.000 <span style={{ marginLeft: 3 }}>VND</span>{' '}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
