import { createContext, useState } from "react";
export const ProducsContext = createContext();

export const ProducsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ProducsContext.Provider
      value={{ productsList, setProductsList, loading, setLoading }}
    >
      {children}
    </ProducsContext.Provider>
  );
};
