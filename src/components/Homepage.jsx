import React from "react";

import Product from "./Product";
import { useFetchProducts } from "../hooks/api/useFetchProducts";

function Products() {
  const { data, isPending, isError } = useFetchProducts();
  if (isPending) {
    return (
      <section className="section-center">
        <h2>Loading ... </h2>
      </section>
    );
  }

  if (isError) {
    return <h3>An error occured</h3>;
  }

  // console.log(data);

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
