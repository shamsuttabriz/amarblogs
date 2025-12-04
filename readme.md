# Amar Blog - Fastify JSON Blog Project

A simple blog system built with **Fastify** using **JSON files as a database**.  
Supports **posts, categories**, category-based queries, and nested posts in categories.



## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Utilities](#utilities)
- [Seeding Data](#seeding-data)
- [Modules](#modules)
  - [Post Module](#post-module)
  - [Category Module](#category-module)
- [Server Setup](#server-setup)
- [API Endpoints](#api-endpoints)
- [Example Responses](#example-responses)


# Project Structure

amar-blog/\
│── package.json\
│── posts.json\
│── categories.json\
│── authors.json\
│── src/\
│   │── server.js\
│   │── utils/\
│   │   └── file.js\
│   │── modules/\
│       ├── post/\
│       │   ├── post.controller.js\
│       │   ├── post.router.js\
│       │   ├── post.service.js\
│       │   └── post.seeder.js\
│       ├── category/\
│       │   ├── category.controller.js\
│       │   ├── category.router.js\
│       │   ├── category.service.js\
│       │   └── category.seeder.js\
│       └── author/\
│           ├── author.controller.js\
│           ├── author.router.js\
│           ├── author.service.js\
│           └── author.seeder.js\




## Installation

```bash
# Clone repository
git clone https://github.com/shamsuttabriz/amarblogs.git
cd amar-blog

# Install dependencies
npm install
