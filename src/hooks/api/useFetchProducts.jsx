import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const response = await fetch(
    "https://course-api.com/javascript-store-products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export function useFetchProducts() {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
}
