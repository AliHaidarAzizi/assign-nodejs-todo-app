const express = require("express")
const homeController =require("./controllers/homeController")
const app = express()
const port = 3000


app.use(express.static("public"));

app.get("/", homeController);

app.listen(port, () => {
    console.log(`Server is listening onn ${port}`);
})
