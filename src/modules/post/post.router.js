import {
  getPostsController,
  getPostController,
  createPostController,
  updatePostController,
  deletePostController,
} from "./post.controller.js";

export default async function postRoutes(fastify, options) {
  fastify.get("/", getPostsController);
  fastify.get("/:id", getPostController);
  fastify.post("/", createPostController);
  fastify.put("/:id", updatePostController);
  fastify.delete("/:id", deletePostController);
}
