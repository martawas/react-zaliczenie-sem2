import { useContext } from "react";
import "../commonStyles.css";
import { ProducsContext } from "../../../context/productsContext";

const ProductsFilters = () => {
  const productsContext = useContext(ProducsContext);

  const getProducts = async () => {
    productsContext.setLoading(true);
    const result = await fetch("http://localhost:4000/api/productsList");
    const products = await result.json();
    if (products) {
      productsContext.setProductsList(products);
    } else {
      productsContext.setProductsList([]);
    }
    productsContext.setLoading(false);
  };

  return (
    <div className="Wrapper">
      Products Filters
      <button onClick={() => getProducts()} style={{ marginLeft: "10px" }}>
        Załaduj
      </button>
    </div>
  );
};
export default ProductsFilters;
