import { axiosInstance } from "./axiosInstance";

console.log(axiosInstance);

export async function fetchData() {
  try {
    const resData = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2025-02-15&sortBy=publishedAt&apiKey=83bc96fb37864af7bfc5f371af83280b"
    );

    if (!resData.ok) {
      throw new Error("Couldn't fetch data");
    }
    const jsonData = await resData.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}
