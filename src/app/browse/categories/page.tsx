import { Anchor, H1 } from "@/components";
import { CategoryModel } from "@/models";

async function getCategories() {
  const response = await fetch("http://localhost:8080/api/v1/categories");
  return (await response.json()) as CategoryModel[];
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <H1>Categories</H1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Anchor href={`/browse/categories/${category.id}`}>
              {category.name}
            </Anchor>
          </li>
        ))}
      </ul>
    </div>
  );
}
