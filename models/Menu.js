const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// var random = Math.floor((Math.random() * 1000000) + 1);

const MenuSchema = new Schema({
  ___id:{
    type:String,
  },
  number:{
    type: String,
    // default: Math.floor((Math.random() * 1000000) + 1),
  },
  mco:{
    type: String,
  },
  mcs:{
    type: String,
  },
  mcm:{
    type: String,
  },
  rm:{
    type: String,
  },
  ro:{
    type: String,
  },
  rs:{
    type: String,
  },
  fanta:{
    type: String,
  },
  fantaEx:{
    type: String,
  },
  fantaFK:{
    type: String,
  },
  coca:{
    type: String,
  },
  cocaZe:{
    type: String,
  },
  hawai:{
    type: String,
  },
  maazaTr:{
    type: String,
  },
  sUpMo:{
    type: String,
  },
  cristaline:{
    type: String,
  },
  ginger:{
    type: String,
  },
  oasisTr:{
    type: String,
  },
  oasisFr:{
    type: String,
  },
  tropico:{
    type: String,
  },
  liptonPe:{
    type: String,
  },
  liptonOr:{
    type: String,
  },
  datein: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('menus', MenuSchema);
