import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../../apis';
import { Link } from 'react-router-dom';
import './Productsdetail.scss';
import Logo from '../../assets/img/logo.png';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addCart } from '../../reducx/action';
const Productsdetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await apis.getProduct(id);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    let displayedCategory;

    if (product && product.category) {
        if (product.category === 'fruit') {
            displayedCategory = 'Hoa quả';
        } else if (product.category === 'chicken') {
            displayedCategory = 'Gà';
        } else if (product.category === 'rice') {
            displayedCategory = 'Cơm';
        } else if (product.category === 'salad') {
            displayedCategory = 'Salad';
        } else if (product.category === 'sup') {
            displayedCategory = 'Súp,Cà ri';
        } else if (product.category === 'desserts') {
            displayedCategory = 'Kem';
        } else if (product.category === 'seafood') {
            displayedCategory = 'Cá';
        } else if (product.category === 'drinks') {
            displayedCategory = 'Đồ uống';
        } else {
            displayedCategory = product.category;
        }
    } else {
        displayedCategory = 'Không xác định';
    }

    const [selectedStore, setSelectedStore] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const storeOptions = [
        'City - Nguyễn Trãi',
        'City - Thanh Xuân',
        'City - Quận 9',
        'City - Cầu Giấy',
        'City - Hà Đông',
        'City - Bình Thạnh',
        'City - Thủ Dầu Một',
    ];
    const filteredOptions = storeOptions.filter((store) => store.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleDataClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (store) => {
        setSelectedStore(store);
        setShowOptions(false);
    };
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };
    return (
        <div className="container h-auto">
            {loading ? (
                <div>Loading</div>
            ) : (
                // <div className="row py-3 productdetail">
                //     <div className="col-md-5 bg-secondary">
                //         <img src={product.image} />
                //     </div>
                //     <div className="col-md-7 bg-success">2</div>
                // </div>
                <div className="container d-flex justify-content-center h-auto ">
                    <Link style={{ color: 'black' }} to="/products">
                        <p className="back">
                            <i class="fa-solid fa-arrow-left"></i>Quay lại
                        </p>
                    </Link>

                    <div className="row productDetail w-100 mt-5  ">
                        <div className="col-md-6 col-sm-12 productDetail-left  ">
                            <img src={product.image} />
                            <h5>Thông tin sản phẩm</h5>
                            <p>{product.description}</p>
                        </div>
                        <div className="col-md-6 col-sm-12  productDetail-right">
                            <div className="productDetail-right-top">
                                <Link to="/">
                                    <motion.img whileTap={{ scale: 0.6 }} style={{ width: 35 }} src={Logo} alt="Logo" />
                                </Link>
                                <h3>{displayedCategory}</h3>
                            </div>

                            <h1>{product.name}</h1>
                            <p className="start">
                                {Array.from({ length: product.rate }, (_, index) => (
                                    <i
                                        key={index}
                                        id="shiningStar"
                                        style={{ color: 'rgb(250,171,139)' }}
                                        className="fa-solid fa-star"
                                    ></i>
                                ))}
                            </p>
                            <p>
                                {product.price}.000 <span>VND</span>
                            </p>
                            <div className="select">
                                <h1>
                                    Chọn cửa hàng gần bạn
                                    <span style={{ marginLeft: 3, color: 'rgb(176,86,87)' }}>*</span>
                                </h1>
                                <div className="data" onClick={handleDataClick}>
                                    {selectedStore ? ` ${selectedStore}` : 'Chọn cửa hàng'}
                                    <i class="fa-solid fa-angle-down"></i>
                                </div>
                                {showOptions && (
                                    <div className="options">
                                        <div className="search">
                                            <i class="fa-solid  fa-magnifying-glass"></i>
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={handleInputChange}
                                                placeholder="Tìm kiếm cửa hàng"
                                            />
                                        </div>
                                        <div className="option-choose">
                                            {filteredOptions.map((store, index) => (
                                                <div
                                                    className="option-item"
                                                    key={index}
                                                    onClick={() => handleOptionClick(store)}
                                                >
                                                    <img
                                                        style={{ width: 26, height: 26, marginRight: 5 }}
                                                        src={Logo}
                                                        alt="Logo"
                                                    ></img>
                                                    <span>{store}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {selectedStore && (
                                <button className="addTocart" onClick={() => addProduct(product)}>
                                    Thêm vào giỏ hàng
                                </button>
                            )}
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <div className="see-more">
                                    {' '}
                                    <span> Xem thêm món</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Productsdetail;
