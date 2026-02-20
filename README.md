🚀 User Management API
A RESTful API built with Node.js, Express, and MongoDB (Mongoose) to manage users and posts using a clean layered backend architecture.

---

✨ Features

✅ User CRUD Operations
✅ Create & Fetch Posts
✅ MongoDB Integration
✅ Service Layer Pattern
✅ Zod Validation
✅ Modular Folder Structure
✅ ES Modules Configuration

---

🏗️ Project Structure
<pre>
User-Management-API/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── user.controller.js
│
├── data/
│   └── users.js
│
├── dtos/
│   ├── user.dto.js
│   └── user.zod.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── user.js
│   └── post.js
│
├── routes/
│   └── users.routes.js
│
├── services/
│   └── user.service.js
│
├── app.js
├── server.js
├── package.json
└── .env
</pre>

---

🛠️ Tech Stack

Node.js
Express.js
MongoDB
Mongoose
Zod (Validation)
JavaScript ES Modules

---

⚙️ Installation: npm install

---

🔐 Environment Variables

Create a .env file:
MONGO_URI=your_mongodb_connection_string

---

▶️ Run the Server: node server.js
Server runs at: http://localhost:5000
