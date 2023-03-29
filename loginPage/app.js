const express = require("express"); 
const app = express(); 
const path = require("path"); 
const router = express.Router(); 
const bodyParser = require("body-parser"); // add body-parser module 
 
app.set("view engine", "pug"); 
app.set("views", path.join(__dirname, "views")); 
 
app.use(bodyParser.urlencoded({ extended: true })); 
 
 
router.get("/", (req, res) => { 
  res.render("click"); 
});   
 
 
 
router.get("/login", (req, res) => { 
  res.render("login"); 
}); 
   
app.post("/click",(req,res)=>{ 
  res.render("login") 
}) 
 
 
 
 
 
 
app.post("/login", (req, res) => { 
  const { name, password } = req.body; 
 
  if (name === "Sujit" && password === "12013505") { 
    res.render("success", { 
      username: name, 
    }); 
  } else { 
    res.render("failure"); 
  } 
}); 
 
router.get("/about", (req, res) => { 
  res.render("about", { title: "Hey", message: "The file is getting rendered" }); 
}); 
 
app.use("/", router); 
app.listen(process.env.PORT || 3000, () => {  
  console.log("Running at Port 3000"); 
});