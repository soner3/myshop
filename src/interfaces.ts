import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { TshippingAddressSchema } from "./lib/schemas/shippingAddressSchema";
import { TshippingSchema } from "./lib/schemas/shippingSchema";

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

export interface InputComponentType {
  labelValue: string;
  inputType: string;
  inputPlaceholder: string;
  inputId: string;
  error: FieldError | undefined | string;
  errorMessage: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  registerSchema: string;
}

export interface CheckoutState {
  information: TshippingAddressSchema | null;
  shipping: TshippingSchema | null;
}
