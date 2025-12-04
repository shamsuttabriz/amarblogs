import { writeJSON, readJSON } from "../../utils/file.js";
const POST_TABLE = "posts.json";
const CATEGORY_TABLE = "categories.json";

async function runSeeder() {
  try {
    const categories = await readJSON(CATEGORY_TABLE);

    if (!categories.length) {
      throw new Error("No categories found! Please seed categories first.");
    }

    const seePosts = [];
    let postId = 1;

    // Create 10 sample posts, each linked to a category
    const seedPosts = [];
    for (let i = 1; i <= 10; i++) {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      seedPosts.push({
        id: i,
        title: `Sample Post ${i}`,
        description: `This is a detailed description for Sample Post ${i}.`,
        categoryId: randomCategory.id, // link to category
        createdAt: new Date().toISOString(),
      });
    }


    await writeJSON(POST_TABLE, seedPosts);
    console.log("✔ Posts seeded successfully with categories!");
  } catch (error) {
    console.error("❌ Post seeder failed:", error.message);
  }
}

runSeeder();
