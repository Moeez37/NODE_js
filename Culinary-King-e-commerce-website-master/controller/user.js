const person=require('../models/users');
const path=require('path');



exports.contact=(req,res)=>{
    res.render('contact',{
        pagetitle:"Contact"
    });
}
exports.catering=(req,res)=>{
    res.render('catering',{
        pagetitle:"Catering"
    });
};
exports.summer=(req,res)=>{
    res.render('summer',{
        pagetitle:"Summert"
    });
};
exports.about=(req,res)=>{
    res.render('about',{
        pagetitle:"About"
    });
};
exports.index=(re,res)=>{
    res.render('index',{
        pagetitle:"Culinary King | Catering"
    })
}
  