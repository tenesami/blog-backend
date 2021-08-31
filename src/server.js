import express, { response } from 'express';
import bodyParser from 'body-parser';

const app = express();

//parse json obj include with post request  & include body property
//for the matching route
app.use(bodyParser.json());

app.get('/hello', (req, response) => response.send("Hi!"));

//Show one article based on the id on the url
app.get('/hello/:name', (req, response) => response.send(`Hi ${req.params.name}!`));

//create one article 
app.post('/hello', (req, response) => response.send(`Hi ${req.body.name}!`));

app.listen(8000, () => console.log('Listinig on port 8000'));