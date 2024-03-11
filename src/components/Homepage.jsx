import React from "react";

import Product from "./Product";
import { useFetchProducts } from "../hooks/api/useFetchProducts";

function Products() {
  const { data, isPending, isError } = useFetchProducts();
  if (isPending) {
    return (
      <div className="section-center">
        <h2>Loading ... </h2>
      </div>
    );
  }

  if (isError) {
    return <h3>An error occured</h3>;
  }

  return (
    <main>
      <div className="section-center">
        {data?.map((item) => {
          item.quantity = 1;
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
}

export default Products;
