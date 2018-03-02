let mongoose = require('mongoose');
const USER = "YOUR mLAB USERNAME";
const PW = "YOUR mLAB PASS";
mongoose.connect('mongodb://' + USER + ':' + PW + '@ds062448.mlab.com:62448/aravinda-db');
