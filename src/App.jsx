import "./App.css";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Banner from "./Components/Ui/Banner/Banner";
import BannerStats from "./Components/Ui/BannerStats/BannerStats";
import PremiumTools from "./Components/Ui/PremiumTools/PremiumTools";
import Steps from "./Components/Ui/Steps/Steps";
import Pricing from "./Components/Ui/Pricing/Pricing";
import Workflow from "./Components/Ui/Workflow/Workflow";
import Footer from "./Components/Ui/Footer/Footer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.warning(`${product.name} is already in the cart!`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId);
    setCartItems(cartItems.filter((item) => item.id !== productId));
    if (itemToRemove) toast.info(`${itemToRemove.name} removed from cart.`);
  };

  const removeAll = () => {
    setCartItems([]);
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Navbar cartItems={cartItems} />
      <Banner />
      <BannerStats />
      <PremiumTools
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        removeAll={removeAll}
      />
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
