import { writeJSON } from "../../utils/file.js";

const AUTHOR_TABLE = "authors.json";
const AUTHOR_POST_TABLE = "author_posts.json";

const seedAuthors = [
  {
    id: 1,
    name: "Humayun Ahmed",
    description: "Bangladeshi novelist, screenwriter, and filmmaker.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Taslima Nasrin",
    description: "Bangladeshi-Swedish writer and feminist.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Kazi Nazrul Islam",
    description: "National poet of Bangladesh, writer, musician.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Mark Twain",
    description: "American novelist and humorist, author of classic literature.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Ernest Hemingway",
    description: "American novelist and Nobel Prize–winning writer.",
    createdAt: new Date().toISOString(),
  },
];

const seedAuthorPosts = [
  {
    id: 1,
    authorId: 1,
    postId: 1,
  },
  {
    id: 2,
    authorId: 2,
    postId: 1,  
  },
  {
    id: 3,
    authorId: 2,
    postId: 2,
  },
  {
    id: 4,
    authorId: 2,
    postId: 3,  
  }
]

async function runAuthorSeeder() {
  try {
    await writeJSON(AUTHOR_TABLE, seedAuthors);
    await writeJSON(AUTHOR_POST_TABLE, seedAuthorPosts);
    console.log("✔ Authors seeded successfully!");
  } catch (error) {
    console.error("❌ Author seeder failed:", error.message);
  }
}

runAuthorSeeder();
