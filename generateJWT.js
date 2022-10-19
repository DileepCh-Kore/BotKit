var config = require('./procureAssistConfig.json');
var botId = config.botId;
var botName = config.botName;
var sdk = require("./lib/sdk");
var exec = require('child_process').execFile;
const {spawn} = require('child_process');
const fs = require('fs');
const path = require('path');
const request = require('request')
module.exports = {
    botId   : botId,
    botName : botName,

    on_user_message : function(requestId, data, callback) {
        sdk.sendBotMessage(data, callback);
    },
    on_bot_message  : function(requestId, data, callback) {
    },
    on_webhook    : function(requestId, data, componentName, callback) {
        var context  = data.context;
        if(componentName === config.jwtComponentName){
            let url = config.jwtURL
            request(url, function (err, response) {
                if (err) {
                    console.log(err)
                    context.webhookVariable = 'execution failed';
                }
                console.log(response.body)
                context.webhookVariable = response.body;
            })
        }
        
    }
};
