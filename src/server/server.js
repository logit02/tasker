const express = require('express')
const app = express();
const cors = require("cors");

const pool = require("./db");
const bcrypt = require('bcryptjs');

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create todo


app.post('/users', async (req,res) => {
    try {
         const {username, pass} = req.body;
         
         const hash = await bcrypt.hash(pass, 10);        
 
         const newUser = await pool.query("INSERT INTO members (username, password) VALUES ($1, $2) RETURNING *", [username, hash]);
 res.json(newUser.rows[0])
    }catch(err){
        console.error(err.message);
    }
 })



//login

app.post('/login', async (req,res) => {
    try {
        
        const {username,pass} = req.body;
        
        const User = await pool.query("SELECT * FROM members WHERE username  = $1 ", [username]);
       
        if(User.rows[0]){
           // console.log(User.rows[0].password)
          // console.log(User.rows[0])
            const validPass = await bcrypt.compare(pass, User.rows[0].password);
           
                if(validPass){
                 console.log('works')
                 return res.json({message:true});
                
                 
              
              
           }else {
               console.log('wrong pass')
           }
        }else{
           console.log('chka')
        }
       
    }catch(err){
        console.error(err.message);
    }
 })


app.listen(5000, () =>{
    console.log('server has started on port 5000');
})

