import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "./post.service.js";

export const getPostsController = async (req, reply) => {
  reply.send(await getAllPosts());
};

export const getPostController = async (req, reply) => {
  const { id } = req.params;
  const post = await getPostById(Number(id));

  if (!post) return reply.code(404).send({ message: "Post not found" });

  reply.send(post);
};



export const createPostController = async (req, reply) => {
  const newPost = await createPost(req.body);
  reply.code(201).send(newPost);
};

export const updatePostController = async (req, reply) => {
  const { id } = req.params;
  const updated = await updatePost(Number(id), req.body);

  if (!updated) return reply.code(404).send({ message: "Post not found" });

  reply.send(updated);
};

export const deletePostController = async (req, reply) => {
  const { id } = req.params;
  const deleted = await deletePost(Number(id));

  if (!deleted) return reply.code(404).send({ message: "Post not found" });

  reply.send({ message: "Post deleted successfully" });
};
