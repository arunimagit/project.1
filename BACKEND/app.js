const express = require('express');

const UserData = ('./src/model/Userdata');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());

app.use(express.json());



function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//insering user data in to db
app.post('/userinsert',function(req,res){

    var useremail=req.body.user.email;
    console.log(req.body);
    UserData.findOne({"email":useremail})
    .then(function(user){
    if(useremail==user?.email){ console.log('user already exist'); res.status(401).send('Invalid Password') }
    else{
  
      var user = {       
        fullname:req.body.user.fullname,
        email:req.body.user.email,
        password:req.body.user.password,
      }     
    var user = new UserData(user);
    user.save();  
    }
  });
  
  });
  app.listen(4000,function(){
    console.log("app listening at port 4000")
});