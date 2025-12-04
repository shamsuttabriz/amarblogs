import { writeJSON } from "../../utils/file.js";
const CATEGORY_TABLE = "categories.json";

const seedCategories = [
  {
    id: 1,
    name: "General",
    description: "General articles and updates.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Programming",
    description: "Tips, tutorials and guides about programming.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Backend",
    description: "Server-side development, APIs, databases.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Frontend",
    description: "UI, CSS, JavaScript frameworks and libraries.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    name: "DevOps",
    description: "Deployment, CI/CD, and server management.",
    createdAt: new Date().toISOString(),
  },
];

async function runCategorySeeder() {
  try {
    await writeJSON(CATEGORY_TABLE, seedCategories);
    console.log("✔ Categories seeded successfully!");
  } catch (error) {
    console.error("❌ Category seeder failed:", error.message);
  }
}

runCategorySeeder();
