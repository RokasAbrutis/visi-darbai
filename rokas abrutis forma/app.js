const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(html(forma()))
})

function html(forma = '') {
  let txt = `<!DOCTYPE html>`
  txt += `
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <title>forma</title>
  </head>
  <body>`

  txt += forma;

  txt += `
  </body>
  </html>`

  return txt;
}

function forma(vardas = "", pavarde = "", email = "", phone = "", preke = "", pristatymo_budas = "", komentaras = "", rajonas = "", miestas = "", adresas = "", kodas = "", parduotuve = "") {
  let txt = `
  <div class="container">
  <form action="/forma" method="post">
      <div class="form-group">
      <label for="">Vardas:</label> <br>
      <input type="text" class="form-control" name="vardas" value="${vardas}" required> <br>
      </div>
      <div class="form-group">
          <label for="">Pavarde:</label> <br>
          <input type="text" class="form-control" name="pavarde" value="${pavarde}" required> <br>
          </div>
          <div class="form-group">
              <label for="">El. pastas:</label> <br>
              <input type="text" class="form-control" name="email" value="${email}" required> <br>
              </div>
              <div class="form-group">
                  <label for="">Telefonas:</label> <br>
                  <input type="number" class="form-control" name="phone" value="${phone}" required> <br>
                  </div>
                  <div class="form-group">
                      <label for="">Uzsakoma preke:</label> <br>
                      <textarea type="text" class="form-control" name="preke" required>${preke}</textarea> <br>
                      </div>
      <label for="">Pristatymo Budas:</label> <br>
      <select name="pristatymo_budas" id="" onchange=deliver(value) required> <br>
          <option value=""></option> <br>
          <option value="b1" class="option-1" ${pristatymo_budas == "b1" ? 'selected' : ""}>Kurjeris</option> <br>
          <option value="b2" class="option-2" ${pristatymo_budas == "b2" ? 'selected' : ""}>Pastomatas</option> <br>
          <option value="b3" class="option-3" ${pristatymo_budas == "b3" ? 'selected' : ""}>Parduotuve</option> <br>
      </select> <br>
      <div class="root"></div>
      <div class="form-group">
          <label for="">Komentaras:</label> <br>
          <textarea type="text" class="form-control" name="comment">${komentaras}</textarea required> <br>
      </div>
      <input type="date" name="date" id="date" hidden>
      <input type="submit" class="btn btn-primary">
  </form>

  <script>

  var today = new Date();
  if((today.getMonth()+1).toString().length == 2 && today.getDate().toString().length== 2) {
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  } else if ((today.getMonth()+1).toString().length == 1 && today.getDate().toString().length == 2) {
    var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
  } else if((today.getMonth()+1).toString().length == 2 && today.getDate().toString().length == 1) {
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-0'+today.getDate();
  } else {
    var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-0'+today.getDate();
  }

  document.querySelector('#date').value = date

  if(document.querySelector('.option-1').selected) {
    txt = '<label for="">Rajonas:</label> <br>'
        txt += '<input type="text" class="form-control" name="rajonas" value="${rajonas}" required> <br>'
        txt += '<label for="">Miestas:</label> <br>'
        txt += '<input type="text" class="form-control" name="miestas" value="${miestas}" required> <br>'
        txt += '<label for="">Adresas:</label> <br>'
        txt += '<input type="text" class="form-control" name="adresas" value="${adresas}" required> <br>'
        txt += '<label for="">Pasto kodas:</label> <br>'
        txt += '<input type="text" class="form-control" name="kodas" value="${kodas}" required> <br>'
        document.querySelector(".root").innerHTML = txt;
  } else if(document.querySelector('.option-2').selected) {
    txt = '<label for="">Miestas:</label> <br>'
    txt += '<input type="text" class="form-control" name="miestas" value="${miestas}" required> <br>'
    document.querySelector(".root").innerHTML = txt;
  } else if(document.querySelector('.option-3').selected) {
    txt = '<label for="">Parduotuve:</label>'
    txt += '<br> <select name="parduotuve" value="${parduotuve}" required>'
    txt += '<option value="c1"></option>'
    txt += '<option value="c2">Rimi Kretinga</option>'
    txt += '<option value="c3">Maxima Klaipeda</option>'
    txt += '<option value="c4">IKI Kaunas</option>'
    txt += '<option value="c5">BIG Vilnius</option>'
    txt += '<option value="c6">Maxima Palanga</option>'
    txt += '</select>'

    document.querySelector(".root").innerHTML = txt;
  }


    function deliver(option) {
      let txt = "";
      if(option == "") {
        document.querySelector(".root").innerHTML = txt;
      } else if(option == "b1") {
        txt = '<label for="">Rajonas:</label> <br>'
        txt += '<input type="text" class="form-control" name="rajonas" value="${rajonas}" required> <br>'
        txt += '<label for="">Miestas:</label> <br>'
        txt += '<input type="text" class="form-control" name="miestas" value="${miestas}" required> <br>'
        txt += '<label for="">Adresas:</label> <br>'
        txt += '<input type="text" class="form-control" name="adresas" value="${adresas}" required> <br>'
        txt += '<label for="">Pasto kodas:</label> <br>'
        txt += '<input type="text" class="form-control" name="kodas" value="${kodas}" required> <br>'
        document.querySelector(".root").innerHTML = txt;
      } else if(option == "b2") {
        txt = '<label for="">Miestas:</label> <br>'
        txt += '<input type="text" class="form-control" name="miestas" value="${miestas}" required> <br>'
        document.querySelector(".root").innerHTML = txt;
      } else if(option == "b3") {
        txt = '<label for="">Parduotuve:</label>'
          txt += '<br> <select name="parduotuve" value="${parduotuve}" required>'
          txt += '<option value="c1"></option>'
          txt += '<option value="c2">Rimi Kretinga</option>'
          txt += '<option value="c3">Maxima Klaipeda</option>'
          txt += '<option value="c4">IKI Kaunas</option>'
          txt += '<option value="c5">BIG Vilnius</option>'
          txt += '<option value="c6">Maxima Palanga</option>'
          txt += '</select>'

        document.querySelector(".root").innerHTML = txt;
      }
    }
  </script>
</div>`
  
  return txt
}


let array = []

app.post('/forma', (req, res) => {
  let vardas = req.body.vardas
  let pavarde = req.body.pavarde
  let email = req.body.email
  let phone = req.body.phone
  let preke = req.body.preke
  let shipping = req.body.pristatymo_budas
  let comment = req.body.comment
  let rajonas = req.body.rajonas
  let miestas = req.body.miestas
  let adresas = req.body.adresas
  let kodas = req.body.kodas
  let parduotuve = req.body.parduotuve

  if(req.body.vardas && req.body.pavarde && req.body.email.includes('@') && req.body.phone && req.body.preke && req.body.pristatymo_budas && req.body.comment) {
    if(req.body.pristatymo_budas == "b1" && req.body.rajonas && req.body.miestas && req.body.adresas && req.body.kodas) {
      fs.appendFile("data.json", JSON.stringify(req.body), (err) => {
        if (err)
        console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("data.json", "utf8"));
        }
        res.sendFile(path.join(__dirname, 'data.json'))
      })


    } else if (req.body.pristatymo_budas == "b2" && req.body.miestas) {
      fs.appendFile("data.json", JSON.stringify(req.body), (err) => {
        if (err)
        console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("data.json", "utf8"));
        }
        res.sendFile(path.join(__dirname, 'data.json'))
      })

    } else if (req.body.pristatymo_budas == "b3" && req.body.parduotuve) {
      fs.appendFile("data.json", JSON.stringify(req.body), (err) => {
        if (err)
        console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("data.json", "utf8"));
        }
        res.sendFile(path.join(__dirname, 'data.json'))
      })

    } else {
      res.send(html(forma(vardas, pavarde, email, phone, preke, shipping, comment, rajonas, miestas, adresas, kodas, parduotuve)))
    }
  } else {
    res.send(html(forma(vardas, pavarde, email, phone, preke, shipping, comment, rajonas, miestas, adresas, kodas, parduotuve)))
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})