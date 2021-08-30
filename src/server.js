import express from 'express';

const app = express();

app.get('/hello', (req, response) => response.send("Hi!"));

app.listen(8000, () => console.log('Listinig on port 8000'));