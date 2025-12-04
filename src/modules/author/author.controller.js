import {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getPostsByAuthorId,
} from "./author.service.js";

export const getAuthorsController = async (req, reply) => {
  reply.send(await getAllAuthors());
};

export const getAuthorController = async (req, reply) => {
  const { id } = req.params;
  const Author = await getAuthorById(Number(id));

  if (!Author) return reply.code(404).send({ message: "Author not found" });

  reply.send(Author);
};

export const getAuthorPostsController = async (req, reply) => {
  const { id } = req.params;
  const Author = await getAuthorById(Number(id));
  if (!Author) return reply.code(404).send({ message: "Author not found" });

  // Assuming you have a function to get posts by Author ID
  const posts = await getPostsByAuthorId(Number(id));
  reply.send(posts);
}

export const getAuthorsWithPostsController = async (request, reply) => {
  const data = await getAuthorsWithPosts();
  reply.send(data);
};

export const createAuthorController = async (req, reply) => {
  const newAuthor = await createAuthor(req.body);
  reply.code(201).send(newAuthor);
};

export const updateAuthorController = async (req, reply) => {
  const { id } = req.params;
  const updated = await updateAuthor(Number(id), req.body);

  if (!updated) return reply.code(404).send({ message: "Author not found" });

  reply.send(updated);
};

export const deleteAuthorController = async (req, reply) => {
  const { id } = req.params;
  const deleted = await deleteAuthor(Number(id));

  if (!deleted) return reply.code(404).send({ message: "Author not found" });

  reply.send({ message: "Author deleted successfully" });
};
