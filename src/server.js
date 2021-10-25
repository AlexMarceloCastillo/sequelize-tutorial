const app = require("./app");
const db = require("./database/db");


app.listen(app.get("port"), () => {
    console.log(`\n [ Server ]:http://localhost:${app.get("port")} \n`);
    db.connection.sync({ force: false });
});