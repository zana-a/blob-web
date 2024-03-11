import { Anchor, Jumbotron } from "@/components";
import { CategoryModel } from "@/models";

async function getCategories() {
  const response = await fetch("http://localhost:8080/api/v1/categories");
  return (await response.json()) as CategoryModel[];
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <Jumbotron>
          <Jumbotron.Title>Categories</Jumbotron.Title>
      </Jumbotron>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Anchor href={`/categories/${category.id}`}>
              {category.name}
            </Anchor>
          </li>
        ))}
      </ul>
    </div>
  );
}
