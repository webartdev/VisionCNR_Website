const path = require('path');
const express = require('express');
const app = express();
const ourPath = path.join(__dirname, '..', 'src')
const port = process.env.PORT || 3000;

app.use(express.static(ourPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(ourPath, 'index.js'));
});

// app.listen(3000, () => 
// {
//     console.log('Server is up')
// });

app.listen(port, () => 
{
    console.log('Server is up')
});