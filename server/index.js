const express= require("express")
const app= express()
const cors= require("cors")
const { connection } = require("./config/db")
const { authRoute } = require("./Routes/auth.route")
const { ProductRoute } = require("./Routes/product.route")
const PORT=process.env.PORT || 8080


app.use(cors());
app.use(express.json())


app.use("/auth",authRoute)
app.use("/",ProductRoute)


app.listen(PORT,async()=>{
    await connection
    console.log("connected to db");
  console.log("server started at port 8080");
})
