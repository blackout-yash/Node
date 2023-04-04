import { app } from "./app.js";

app.get("/", (req, res) => {
    res.send("Working fine");
});

app.route("/users").get((req, res, next) => {
    res.status(200).json({
        users: [],
        success: false
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
});