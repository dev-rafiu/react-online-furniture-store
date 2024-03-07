import React, { useContext } from "react";

import Product from "./Product";
import { AppContext } from "../App";
import { useFetchProducts } from "../hooks/api/useFetchProducts";

function Products() {
  // const { isLoading } = useContext(AppContext);
  const { data, isPending, isError } = useFetchProducts();
  if (isPending) {
    return <h3>Loading ... </h3>;
  }

  if (isError) {
    return <h3>An error occured</h3>;
  }

  return (
    <main>
      <div className="section-center">
        {data?.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Products;
