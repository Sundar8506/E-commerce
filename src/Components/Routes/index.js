import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Category addToCart={props.addToCart} />} />
      <Route path="/:categoryId" element={<Category addToCart={props.addToCart} />} />
    </Routes>
  );
}
export default AppRoutes;
