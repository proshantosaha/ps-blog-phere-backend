const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

require ('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// middle waare

app.use(express.json())
app.use(cors())

const blogRoutes = require("./src/routes/blog.routes")

app.use('/blogs', blogRoutes)


async function main(){
  await mongoose.connect(process.env.BD_URL);
      app.get('/', (req, res) => {
        res.send('Hello mongodb!')
      })
}


main().then(()=>console.log("mongodb connected successfully")).catch(err => console.log(err));








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
