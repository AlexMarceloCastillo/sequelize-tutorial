require("dotenv").config();
const Express = require("express");
const Cors = require("cors");


const app = Express();
const port = Number(process.env.PORT) || 8080;


// Middlewares
app.use(Express.json());
app.use( Express.urlencoded({extended: false}));
app.set("port", port);
app.use(Cors());


//Routes
app.get("/", (req,res) => {
    res.sendStatus(200);
});
app.use("/api/v1", require("./routes/video.routes"));
app.use("/api/v1", require("./routes/comentario.routes"));
app.use("/api/v1", require("./routes/persona.routes"));
app.use("/api/v1", require("./routes/comercio.routes"));



module.exports = app;