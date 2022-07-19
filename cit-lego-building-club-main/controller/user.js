const person=require('../models/users');
const path=require('path');



exports.events=(req,res)=>{
    res.render('Events',{
        pagetitle:"Events"
    });
}
exports.contactus=(req,res)=>{
    res.render('contact-us',{
        pagetitle:"Contact-us"
    });
};
exports.membership=(req,res)=>{
    res.render('membership',{
        pagetitle:"Membership & support"
    });
};
exports.index=(req,res)=>{
    res.render('index',{
        pagetitle:"LEGO Building Club | CIT"
    });
};
  