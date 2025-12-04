import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getPostsByCategoryId,
  getCategoriesWithPosts
} from "./category.service.js";

export const getCategoriesController = async (req, reply) => {
  reply.send(await getAllCategories());
};

export const getCategoryController = async (req, reply) => {
  const { id } = req.params;
  const category = await getCategoryById(Number(id));

  if (!category) return reply.code(404).send({ message: "Category not found" });

  reply.send(category);
};

export const getCategoryPostsController = async (req, reply) => {
  const { id } = req.params;
  const category = await getCategoryById(Number(id));
  if (!category) return reply.code(404).send({ message: "Category not found" });

  // Assuming you have a function to get posts by category ID
  const posts = await getPostsByCategoryId(Number(id));
  reply.send(posts);
}

export const getCategoriesWithPostsController = async (request, reply) => {
  const data = await getCategoriesWithPosts();
  reply.send(data);
};

export const createCategoryController = async (req, reply) => {
  const newCategory = await createCategory(req.body);
  reply.code(201).send(newCategory);
};

export const updateCategoryController = async (req, reply) => {
  const { id } = req.params;
  const updated = await updateCategory(Number(id), req.body);

  if (!updated) return reply.code(404).send({ message: "Category not found" });

  reply.send(updated);
};

export const deleteCategoryController = async (req, reply) => {
  const { id } = req.params;
  const deleted = await deleteCategory(Number(id));

  if (!deleted) return reply.code(404).send({ message: "Category not found" });

  reply.send({ message: "Category deleted successfully" });
};
