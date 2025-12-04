import { readJSON, writeJSON } from "../../utils/file.js";

const AUTHOR_TABLE = "authors.json";
const POST_TABLE = "posts.json";

export const getAllAuthors = async () => {
  const authors  = await readJSON(AUTHOR_TABLE);
  return authors;
  // return await readJSON(DB_PATH);
};

export const getAuthorById = async (id) => {
  const author = await readJSON(DB_PATH);
  return author.find((c) => c.id === id);
};

export const getPostsByAuthorId = async (AuthorId) => {
  const posts = await readJSON("posts.json");
  return posts.filter((p) => p.AuthorId === AuthorId);
};

export const getAuthorsWithPosts = async () => {
  const Authors = await readJSON("Authors.json");
  const posts = await readJSON("posts.json");

  const AuthorsWithPosts = Authors.map((Author) => {
    const postsForAuthor = posts
      .filter((post) => post.AuthorId === Author.id)
      .map(({ id, title, description, createdAt }) => ({
        id,
        title,
        description,
        createdAt,
      }));

    return { ...Author, posts: postsForAuthor };
  });

  return AuthorsWithPosts;
};

export const createAuthor = async (data) => {
  const Authors = await readJSON(DB_PATH);

  const newAuthor = {
    id: Authors.length ? Authors[Authors.length - 1].id + 1 : 1,
    ...data,
  };

  Authors.push(newAuthor);
  await writeJSON(DB_PATH, Authors);

  return newAuthor;
};

export const updateAuthor = async (id, data) => {
  const Authors = await readJSON(DB_PATH);

  const index = Authors.findIndex((c) => c.id === id);
  if (index === -1) return null;

  Authors[index] = { ...Authors[index], ...data };
  await writeJSON(DB_PATH, Authors);

  return Authors[index];
};

export const deleteAuthor = async (id) => {
  const Authors = await readJSON(DB_PATH);
  const filtered = Authors.filter((c) => c.id !== id);

  if (filtered.length === Authors.length) return false;

  await writeJSON(DB_PATH, filtered);
  return true;
};
