const express = require('express');
const app = express();
const { readFile } = require('fs').promises;


app.use(express.static('public'));
// console.log(__dirname)
app.get('/', async(request, response) =>{
    // readFile('./home.html', 'utf8', (err, html) => {
    //     if(err){
    //         response.status(500).send('sorry, out of order') //500 is server error
    //     }

    //    
    // })
    // app.use(express.static(__dirname + '/styles'));
    response.send(await readFile('./public/home.html', 'utf8'));

});

app.listen(3005, () => console.log(`App available on http://localhost:3005`))