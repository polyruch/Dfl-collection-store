import axiosClient from "./axiosClient";

export async function getProducts() {
  try {
    const response = await axiosClient.get("/products?populate=*");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProduct(id) {
  try {
    const response = await axiosClient.get(`/products/${id}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

export async function getBanner() {
  try {
    const response = await axiosClient.get("/banner?populate=*");
    return response.data;
  } catch (error) {
    console.error("Error fetching banner:", error);
    throw error;
  }
}
