const express = require('express')
const app = express();
const cors = require("cors");

const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create todo

app.post('/users', async (req,res) => {
   try {
        const {username, pass} = req.body;
        

        const newUser = await pool.query("INSERT INTO members (username, password) VALUES ($1, $2) RETURNING *", [username, pass]);
res.json(newUser.rows[0])
   }catch(err){
       console.error(err.message);
   }
})






app.listen(5000, () =>{
    console.log('server has started on port 5000');
})