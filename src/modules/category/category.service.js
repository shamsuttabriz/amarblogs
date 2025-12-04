import { readJSON, writeJSON } from "../../utils/file.js";

const DB_PATH = "categories.json";
const POST_TABLE = "posts.json";

export const getAllCategories = async () => {
  const categories  = await readJSON(DB_PATH);
  const posts = await readJSON(POST_TABLE);
  const categoriesWithPosts = categories.map(category => {
    const postsForCategory = posts.filter(post => post.categoryId === category.id);
    return { ...category, amarPosts: postsForCategory };
  });
  return categoriesWithPosts;
  // return await readJSON(DB_PATH);
};

export const getCategoryById = async (id) => {
  const categories = await readJSON(DB_PATH);
  return categories.find((c) => c.id === id);
};

export const getPostsByCategoryId = async (categoryId) => {
  const posts = await readJSON("posts.json");
  return posts.filter((p) => p.categoryId === categoryId);
};

export const getCategoriesWithPosts = async () => {
  const categories = await readJSON("categories.json");
  const posts = await readJSON("posts.json");

  const categoriesWithPosts = categories.map((category) => {
    const postsForCategory = posts
      .filter((post) => post.categoryId === category.id)
      .map(({ id, title, description, createdAt }) => ({
        id,
        title,
        description,
        createdAt,
      }));

    return { ...category, posts: postsForCategory };
  });

  return categoriesWithPosts;
};

export const createCategory = async (data) => {
  const categories = await readJSON(DB_PATH);

  const newCategory = {
    id: categories.length ? categories[categories.length - 1].id + 1 : 1,
    ...data,
  };

  categories.push(newCategory);
  await writeJSON(DB_PATH, categories);

  return newCategory;
};

export const updateCategory = async (id, data) => {
  const categories = await readJSON(DB_PATH);

  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return null;

  categories[index] = { ...categories[index], ...data };
  await writeJSON(DB_PATH, categories);

  return categories[index];
};

export const deleteCategory = async (id) => {
  const categories = await readJSON(DB_PATH);
  const filtered = categories.filter((c) => c.id !== id);

  if (filtered.length === categories.length) return false;

  await writeJSON(DB_PATH, filtered);
  return true;
};
