import {
  getCategoriesController,
  getCategoryController,
  getCategoryPostsController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "./category.controller.js";

export default async function categoryRoutes(fastify, options) {
  fastify.get("/", getCategoriesController);
  fastify.get("/:id", getCategoryController);
  fastify.get("/:id/posts", getCategoryPostsController);
  fastify.post("/", createCategoryController);
  fastify.put("/:id", updateCategoryController);
  fastify.delete("/:id", deleteCategoryController);
}
