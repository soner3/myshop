import { ReactNode } from "react";

export interface MenuItemType {
  id: string;
  href: string;
  text: string;
  icon: ReactNode;
}

export interface IconListItemType {
  id: string;
  href: string;
  icon: ReactNode;
}

export interface ToggleState {
  isSidebarOpen: boolean;
  isCartSidebarOpen: boolean;
  isImageFocus: boolean;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export interface ProductData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export interface Cart {
  cartItemList: CartItem[];
}

export interface SearchState {
  search: string;
}
