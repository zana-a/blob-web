import { CategoryModel } from "@/models";

export interface PostModel {
  id: number;
  title: string;
  description: string;
  content: string;
  categories: CategoryModel[];
  createdAt: Date;
  updatedAt: Date;
}
