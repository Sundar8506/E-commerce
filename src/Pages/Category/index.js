import Products from "../../Components/Products";

function Category(props) {
  return (
    <div>
      <Products addToCart={props.addToCart} />
    </div>
  );
}
export default Category;
