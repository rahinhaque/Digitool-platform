import "./App.css";
import Navbar from "./Components/Ui/Navbar/Navbar";
import Banner from "./Components/Ui/Banner/Banner";
import BannerStats from "./Components/Ui/BannerStats/BannerStats";
import PremiumTools from "./Components/Ui/PremiumTools/PremiumTools";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const removeAll = () => {
    setCartItems([]);
  };

  return <>

      <Navbar cartItems={cartItems}/>
      <Banner/>
      <BannerStats/>
      <PremiumTools 
        cartItems={cartItems} 
        handleAddToCart={handleAddToCart} 
        handleRemoveFromCart={handleRemoveFromCart} 
        removeAll={removeAll} 
      />

  </>;
}

export default App;
