import express, { response } from 'express';
import bodyParser from 'body-parser';


const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}
const app = express();

//parse json obj include with post request  & include body property
//for the matching route
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) =>{
    //obtain name of artcile upvoting 
    const articleName = req.params.name;

    //use it for increasing upvotes 
    articlesInfo[articleName].upvotes +=1;

    //responce to clint how many upvotes article has
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
})


// app.get('/hello', (req, response) => response.send("Hi!"));
// //Show one article based on the id on the url
// app.get('/hello/:name', (req, response) => response.send(`Hi ${req.params.name}!`));

//create one article 
app.post('/hello', (req, response) => response.send(`Hi ${req.body.name}!`));

app.listen(8000, () => console.log('Listinig on port 8000'));