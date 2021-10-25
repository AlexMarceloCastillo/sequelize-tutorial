require("dotenv").config();
const Express = require("express");
// const Cors = require("cors")


const app = Express();
const port = Number(process.env.PORT) || 8080;


// Middlewares
app.use(Express.json());
app.use( Express.urlencoded({extended: false}));
app.set("port", port);
// app.use(cors());

//Routes
app.get("/", (req,res) => {
    res.status(200).json({ msg: "Hello Word"});
});
app.use("/api/v1", require("./routes/tutorial.routes"));
app.use("/api/v1", require("./routes/comment.routes"));



module.exports = app;