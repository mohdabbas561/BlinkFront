import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import AboutUs from '../components/common/AboutUs';
import ContactUs from '../components/common/ContactUs';
import PhoneLogin from '../PhoneLogin';
import Welcome from '../Welcome';
import CheckoutPage from '../components/common/CheckoutPage';
import ThankYouPage from '../components/common/ThankYoupage';
import Header1 from '../components/common/Header1';
import Compliance from '../components/common/Compliance';
import Copyright from "../components/common/Copyright";
import PrivacyPolicy from "../components/common/PrivacyPolicy";
import Refundpolicy from "../components/common/Refundpolicy";
import Return from '../components/common/Return';
import Shipping from '../components/common/Shipping';
import TermsOfUse from '../components/common/TermsOfUse';


const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Header1" element={<Header1 />} />
                <Route path="/ThankYouPage" element={<ThankYouPage />} />
                <Route path="/Welcome" element={<Welcome />} />
                <Route path="/Compliance" element={<Compliance />} />
                <Route path="/Copyright" element={<Copyright />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/Refundpolicy" element={<Refundpolicy />} />
                <Route path="/Return" element={<Return />} />
                <Route path="/Shipping" element={<Shipping />} />
                <Route path="/TermsofUse" element={<TermsOfUse />} />
                <Route path="/CheckoutPage" element={<CheckoutPage />} />
                <Route path="/PhoneLogin" element={<PhoneLogin />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;
