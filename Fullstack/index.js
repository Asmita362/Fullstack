const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const name=req.body.name;
const email=req.body.email;
const phone=req.body.phone;

app.get('/', (req, res) => {
  res.send('Hello ')
});


app.get('/users', (req, res) => {
  res.send('Hello users!')
});

app.get('/students', (req, res) => {
    res.sendStatus(502);
  });

  app.get('/error', (req, res) => {
    res.send('Hello students!')
  });

  
  app.get('/download', (req, res) => {
    res.download('index.js')
  });
   
  app.get('/json', (req, res) => {
    res.json({
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
})
  });
app.post("/signup",(req,res)=>{
  res.send("Data Received")
});

app.post("/signin",(req,res)=>{
  const email=req.body.email;
  res.send(`Thanks for registrating:${email}`)

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});