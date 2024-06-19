import "../commonStyles.css";
import { ProducsContext } from "../../../context/productsContext";
import { useContext } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ProductsList = () => {
  const productsContext = useContext(ProducsContext);

  return (
    <div className="App">
      <header className="AppHeader">
        <p>Products list</p>
        {productsContext.loading ? (
          <LinearProgress style={{ width: "40%" }} />
        ) : (
          <ul>
            {productsContext.productsList &&
              productsContext.productsList.map((element) => (
                <li key={element.id}>{element.name}</li>
              ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default ProductsList;
