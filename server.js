import app from "./app.js";
const PORT = process.env.PORT || 3000;


app.listen(8080, (err,data) => {
    console.log("Server running");
});