const app = require("./app");
const { sequelize } = require("./database/models/index");


app.listen(app.get("port"), () => {
    console.log(`\n [ Server ]:http://localhost:${app.get("port")} \n`);
    sequelize.sync({ force: false });
});