export interface IProductDetails {
  id: number;
  slug?: string;
  imgSrc: string;
  priceRegular: number;
  priceDiscounted: number;
  title: string;
  description: string;
}
