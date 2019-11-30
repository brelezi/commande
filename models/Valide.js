const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ValideSchema = new Schema({
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
  datein:{
    type:Date,
  },
  dateout: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('valides', ValideSchema);
