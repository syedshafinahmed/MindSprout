export type Product = {
  title: string;
  bangla: string;
  image: string;
  youtube?: string;
  price: number;
  discount?: number;
  sizes: string[];
  color: string[];
  description: string;
  qna: { question: string; answer: string }[];
  reviews: number;
  sold: number;
  ratings: number;
  info: string[];
};