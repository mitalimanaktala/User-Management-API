import express from "express";
import userRouter from "./routes/users.routes.js";
import chalk from "chalk";

const app = express();

// BODY PARSER (JSON)
// app level middleware

// Controller should NOT do everything.
// Repeated logic goes into middlewares.

app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
    res.send("User Management API is running");
});

console.log(chalk.green("Success message"));
console.log(chalk.blue("Latest Information message"));

// USER ROUTES
app.use("/api/users", userRouter);

export default app;