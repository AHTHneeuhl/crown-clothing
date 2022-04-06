import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import ShopPage from "./pages/shop/shop";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
