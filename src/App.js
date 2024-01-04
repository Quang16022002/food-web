import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Layouts';
import { Home, Products, Blogs, Contact, Cart } from './Pages';
import Productsdetail from './Components/Productsdetail/Productsdetail';
import { Provider } from 'react-redux';
import store from './reducx/store';
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Productsdetail />} />

                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
