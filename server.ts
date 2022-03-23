const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('./client/build'));

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
