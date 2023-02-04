import React, { useContext } from "react";

import Product from "./Product";
import { AppContext } from "../App";

function Products({ data }) {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      {isLoading ? (
        <h1 className="loading-text">Loading...</h1>
      ) : (
        <main>
          <div className="section-center">
            {data.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Products;
