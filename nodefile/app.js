const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    var result           = '';
    var length           = 6;
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   const jsonresult = [{"key": result}]
   res.json({"value": result});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listing on port ${port}..`));
