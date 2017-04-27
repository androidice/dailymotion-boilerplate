const request = require('request');
const settings = require('../settings');

function getAccessToken(app){
  app.post('/getAccessToken', (req, res)=>{
    request.post({
      url: 'https://api.dailymotion.com/oauth/token',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      form:{
        redirect_uri: settings.dailyMotion.CALL_BACK_URL,
        grant_type: 'authorization_code',
        client_id: settings.dailyMotion.API_KEY,
        client_secret: settings.dailyMotion.API_SECRET,
        code: req.body.auth_code
      },
      json:true
    },(error, response, body)=>{
      if(!error){
        res.type('application/json');
        res.status(200).send({access_token: body.access_token});
        res.end();
      }
    });
  });
}

const api = function(app){
  getAccessToken(app);
};

module.exports = api;
