import { execSync } from "child_process";

const moduleName = process.argv[2];     // example: post, category, author
const fileName = `${moduleName}.seeder.js`;

try {
  const command = `node src/modules/${moduleName}/${fileName}`;
  console.log(`▶ Running seeder: ${command}`);

  execSync(command, { stdio: "inherit" });

  console.log("✔ Seeder completed!");
} catch (err) {
  console.error("❌ Seeder failed:", err.message);
}
