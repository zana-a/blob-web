"use client";

import { CategorySaveModel } from "@/models";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SaveCategoryPage() {
  const [categoryState, setCategoryState] = useState<CategorySaveModel>({
    name: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCategoryState((_prevState) => ({
      // ...prevState,
      name: e.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetch("http://localhost:8080/api/v1/categories", {
      method: "POST",
      body: JSON.stringify(categoryState),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.json());
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Category Name"
          onChange={handleChange}
          value={categoryState.name}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
