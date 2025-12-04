import Fastify from "fastify";
import cors from "@fastify/cors";
import postRoutes from "./modules/post/post.router.js";
import authorRoutes from "./modules/author/author.router.js";
import categoryRoutes from "./modules/category/category.router.js";

const app = Fastify({ logger: true });

// register cors
await app.register(cors, {
  origin: "*",
});

// register routes
app.register(categoryRoutes, { prefix: "/api/categories" });
app.register(authorRoutes, { prefix: "/api/authors" });
app.register(postRoutes, { prefix: "/api/posts" });


const start = async () => {
  try {
    await app.listen({ port: 5000 });
  
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
