const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000
const path = require('path');
const fs = require('fs');

app.use('/upload', express.static('upload'));


app.get('/', (req, res) => {
    images = `
    <html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
      <div class="root"></div>
      <form ref='uploadForm' 
        id='uploadForm' 
        action='http://localhost:3000/upload' 
        method='post' 
        encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input class="btn btn-primary" type='submit' value='Upload!' />
          <div class="d-flex flew-wrap gap-3">

  `;

    const fullPath = path.join(__dirname, '/upload')

    fs.readdir(fullPath, (error, files) => {
        if (error) console.log(error)
            files.forEach(file => {
                images += `
                <div class="card col-3">
                <img src="./upload/${file}"></img>
                <div class="card-body">
                    <h5 class="card-title">${file}</h5>
                </div>
                </div>`
        })
        images += `
        </div>
        </form>     
        </body>
      </html>`
        res.send(images);
    })
    
})


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/upload/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});