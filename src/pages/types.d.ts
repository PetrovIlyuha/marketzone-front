export interface IProductDetails {
  id: number;
  slug?: string;
  image: string;
  price: number;
  priceDiscounted: number;
  title: string;
  description: string;
}

export interface IResponse {
  status: "ok" | "error";
  data?: { [k: string]: any };
  errorMessage?: string;
}
