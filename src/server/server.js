const express = require('express')
const app = express();
const cors = require("cors");

const pool = require("./db");
const bcrypt = require('bcryptjs');

const port = process.env.APP_PORT ? process.env.APP_PORT : 5000;

//middleware
app.use(cors());
app.use(express.json());



app.post('/user', async (req,res) => {
    try {
         const {username, pass, name} = req.body;
         
         const hash = await bcrypt.hash(pass, 10);        
 
         const newUser = await pool.query("INSERT INTO members (username, password, name_surname) VALUES ($1, $2, $3) RETURNING *", [username, hash, name]);

         res.status(200).send({status_text: "Ok", message: "blabla", status: "0x00"})
 res.json(newUser.rows[0])
    }catch(err){
        console.error(err.message);

        res.status(500).send({status_text: "Error", message: "blabla error", status: "0x01"})
    }
 })
 

//login

app.post('/login', async (req,res) => {
    try {
        
        const {username,pass} = req.body;
        
        const User = await pool.query("SELECT * FROM members WHERE username  = $1 ", [username]);
       
        if(User.rows[0]){
           // console.log(User.rows[0].password)
           const id = User.rows[0].user_id
           const user_name = User.rows[0].username
            const validPass = await bcrypt.compare(pass, User.rows[0].password);
           
                if(validPass){
                 console.log('works')
                 return res.json({message:true, user:id, username:user_name});
                 
                
                 
              
              
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


app.listen(port, () =>{
    console.log(`server has started on port ${port}`);
})

