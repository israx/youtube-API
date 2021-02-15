const express = require('express'); //api server
const cors = require('cors');// it allows to make request from the front-end
const morgan = require('morgan');//it's a logger so we can see in coming request
const fetch = require('node-fetch'); //it allows to make fetch request from the backed or node
const {google} = require('googleapis'); //it allows to get google methods
const { request } = require('express');
require('dotenv').config( ) // allow to hide api key from github

const app = express();

//middleware
app.use(morgan('tiny'));
app.use(cors());


app.get('/videos', (req, res)=>{
   console.log(req.query.query)
    google.youtube('v3').search.list({
        key: process.env.GOOGLE_KEY,
        part: 'snippet',
        channelId: 'UC0WP5P-ufpRfjbNrmOWwLBQ',
        q: req.query.query, 
        maxResults: 12,
        type: 'video'
    })
    .then(resp=>{ 

        res.json(resp.data.items)
    
    })//turning that response into json
    .catch(err => res.json(err))
})

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`The app is listeing on port ${port}`))