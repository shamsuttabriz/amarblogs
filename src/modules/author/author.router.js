import {
  getAuthorsController,
  getAuthorController,
  getAuthorPostsController,
  createAuthorController,
  updateAuthorController,
  deleteAuthorController,
} from "./author.controller.js";

export default async function AuthorRoutes(fastify, options) {
  fastify.get("/", getAuthorsController);
  fastify.get("/:id", getAuthorController);
  fastify.get("/:id/posts", getAuthorPostsController);
  fastify.post("/", createAuthorController);
  fastify.put("/:id", updateAuthorController);
  fastify.delete("/:id", deleteAuthorController);
}
