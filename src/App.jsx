import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CollectionPage from "./pages/CollectionPage";
import ScentFinderPage from "./pages/ScentFinderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:slug" element={<ProductDetailPage />} />

      <Route path="/collections" element={<Navigate to="/collections/men" replace />} />
      <Route path="/collections/:category" element={<CollectionPage />} />

      <Route path="/scent-finder" element={<ScentFinderPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}