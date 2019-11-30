const express= require('express');
const exphbs = require('express-handlebars');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const methodOverride = require('method-override');
const socketio= require('socket.io');
const path = require('path');


const app = express();
const server = http.createServer(app);
const io = socketio(server);



// function
function delet(obj) {
            for (var prop in obj) {
                if (obj[prop] === '0' || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
          };

mongoose.Promise = global.Promise;

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/commandes')
  // .then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



// Load Idea Model
require('./models/Menu');
const Menu = mongoose.model('menus');
require('./models/Valide');
const Valide = mongoose.model('valides');



// util Middleware
app.use(express.static(path.join(__dirname,'public')));



// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Method Overide Middleware
app.use(methodOverride('_method'));





// Index route
app.get('/', (req,res)=>{
  res.render('index');
});

// Shift get
app.get(('/shift'),(req,res)=>{

  Menu.find({})
    .sort({datein:'desc'})
    .then(menus => {





      res.render('shift',{
        menus:menus
      });



    });
})




//Commande
app.get('/commande/:id', (req,res) =>{
  Menu.findOne({
    _id: req.params.id
  })
  .then(menu =>{
    res.render('commande',{
      id:req.params.id
    })
  })
});

// Commande post
app.put('/commande/:id', (req,res) =>{
  Menu.findOne({
    _id: req.params.id
  })
  .then(menu => {
    menu.mco = req.body.mco;
    menu.mcs =req.body.mcs;
    menu.mcm = req.body.mcm;
    menu.rm = req.body.rm;
    menu.ro=req.body.ro;
    menu.rs=req.body.rs;
    menu.fanta=req.body.fanta;
    menu.fantaEx=req.body.fantaEx;
    menu.fantaFK=req.body.fantaFK;
    menu.coca=req.body.coca;
    menu.cocaZe=req.body.cocaZe;
    menu.hawai=req.body.hawai;
    menu.maazaTr=req.body.maazaTr;
    menu.sUpMo=req.body.sUpMo;
    menu.cristaline=req.body.cristaline;
    menu.ginger=req.body.ginger;
    menu.oasisTr=req.body.oasisTr;
    menu.oasisFr=req.body.oasisFr;
    menu.tropico=req.body.tropico;
    menu.liptonPe=req.body.liptonPe;
    menu.liptonOr=req.body.liptonOr;

    menu.save()
      .then(menu =>{
        res.redirect('/shift')
      })

    // console.log(req.params.id);
  });

});

//Menu get
app.get('/menu', (req,res)=>{
  res.render('menu');
});


//Menu post
app.post('/menu', (req,res)=>{
  // console.log(req.body);
  var newMenu={
    mco:req.body.mco,
    mcs:req.body.mcs,
    number:Math.floor((Math.random() * 1000000) + 1),
    mcm:req.body.mcm,
    rm:req.body.rm,
    ro:req.body.ro,
    rs:req.body.rs,
    fanta:req.body.fanta,
    fantaEx:req.body.fantaEx,
    fantaFK:req.body.fantaFK,
    coca:req.body.coca,
    cocaZe:req.body.cocaZe,
    hawai:req.body.hawai,
    maazaTr:req.body.maazaTr,
    sUpMo:req.body.sUpMo,
    cristaline:req.body.cristaline,
    ginger:req.body.ginger,
    oasisTr:req.body.oasisTr,
    oasisFr:req.body.oasisFr,
    tropico:req.body.tropico,
    liptonPe:req.body.liptonPe,
    liptonOr:req.body.liptonOr,
  }




  // res.end();
  new Menu(newMenu)
    .save()
    .then(idea =>{
       res.redirect('/shift');
    })
});




app.delete('/commande/:number', (req,res)=>{

  var number = req.params.number;
  // console.log(number);







  Menu.findOne({
    number: number
  })
    .then(menu => {

      var newValide={
            mco:menu.mco,
            mcs:menu.mcs,
            mcm:menu.mcm,
            rm:menu.rm,
            ro:menu.ro,
            rs:menu.rs,
            fanta:menu.fanta,
            fantaEx:menu.fantaEx,
            fantaFK:menu.fantaFK,
            coca:menu.coca,
            cocaZe:menu.cocaZe,
            hawai:menu.hawai,
            maazaTr:menu.maazaTr,
            sUpMo:menu.sUpMo,
            cristaline:menu.cristaline,
            ginger:menu.ginge,
            oasisTr:menu.oasisTr,
            oasisFr:menu.oasisFr,
            tropico:menu.tropico,
            liptonPe:menu.liptonPe,
            liptonOr:menu.liptonOr,
            datein: menu.datein,
          };


      new Valide(newValide)
        .save()





    });


  Menu.remove({number:number})
    .then(()=>{
        res.redirect('/shift');
    });



});






const port =  process.env.PORT || 5000;

server.listen(port, ()=>{
  // console.log(`Server started on port ${port}`);
});


io.on('connection', (socket)=>{
  // console.log('new websocket connection');

  socket.on('increment', ()=>{
    // window.location.reload();
    io.emit('reload');
  })
});
