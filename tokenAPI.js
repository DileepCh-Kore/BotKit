const router = require('express').Router();
var config = require('./procureAssistConfig.json');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const {spawn} = require('child_process');
const request = require('request');

router.get("/",async (req,res)=>{
    // Run app.py in a seperate terminal 
    let url = config.jwtURL
    request(url, function(err,response){
        if(err){
            console.log(err)
            res.status(204).send("error while executing")
        }
        console.log(response.body)
        res.send(response.body)
    })
    
})

module.exports = router;