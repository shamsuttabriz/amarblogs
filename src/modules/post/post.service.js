import { readJSON, writeJSON } from "../../utils/file.js";
const DB_PATH = "posts.json";
const CATEGORY_TABLE = "categories.json";
const AUTHORS = "authors.json";
const AUTHOR_POST_TABLE = "author_posts.json";

export const getAllPosts = async () => {
  const posts = await readJSON(DB_PATH);
  const categories = await readJSON(CATEGORY_TABLE);
  const authors = await readJSON(AUTHORS);
  const author_posts = await readJSON(AUTHOR_POST_TABLE);
  // Merge category object into each post
   const postsWithCategoryAndAuthors = posts.map(post => {
    const category = categories.find(cat => cat.id === post.categoryId);
    const authorIds = author_posts
      .filter(ap => ap.postId === post.id)
      .map(ap => ap.authorId);
    const post_authors = authors.filter(author => authorIds.includes(author.id));
    return { ...post, category, post_authors }; // add full category object and author IDs
  }
  );

  return postsWithCategoryAndAuthors;
};

export const getPostById = async (id) => {
  const posts = await readJSON(DB_PATH);
  return posts.find((p) => p.id === id);
};



export const createPost = async (postData) => {
  const posts = await readJSON(DB_PATH);
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    ...postData,
  };
  posts.push(newPost);
  await writeJSON(DB_PATH, posts);
  return newPost;
};

export const updatePost = async (id, updatedData) => {
  const posts = await readJSON(DB_PATH);

  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;

  posts[index] = { ...posts[index], ...updatedData };
  await writeJSON(DB_PATH, posts);

  return posts[index];
};

export const deletePost = async (id) => {
  const posts = await readJSON(DB_PATH);
  const filtered = posts.filter((p) => p.id !== id);

  if (filtered.length === posts.length) return false;

  await writeJSON(DB_PATH, filtered);
  return true;
};
