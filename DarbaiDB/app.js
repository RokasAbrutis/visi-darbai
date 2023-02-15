
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

      con.query("SELECT * FROM darbai", function (err, result, fields) {
        if (err) throw err;
        function table() {
            let neatlikti_darbai = [];
            let atlikti_darbai = [];
            let veluojami_darbai = [];
            let be_laiko = [];

            let today = new Date()

            
            for(let i = 0; i < result.length; i++)  {
                if(result[i].atliktas == 0 && result[i].laikas == null) {
                    be_laiko.push(result[i])
                } else if (result[i].atliktas == 0 && result[i].laikas < today) {
                    veluojami_darbai.push(result[i])
                } else if (result[i].atliktas == 0 && result[i].laikas != null) {
                    neatlikti_darbai.push(result[i])
                } else {
                    atlikti_darbai.push(result[i])
                }
            }

            let txt = `
            <div class="d-flex justify-content-between align-items-center m-4">
                <h1>Darbu lentele</h1>
                <a href="/naujas" class="btn btn-primary">Prideti nauja darba</a>
            </div>
            <br>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Darbas</th>
                    <th scope="col">laikas</th>
                    <th scope="col">Atlikta</th>
                    <th scope="col">Veiksmas</th>
                    </tr>
                </thead>
                <tbody>
            `

            if (neatlikti_darbai.length > 0) {
                
                txt += `
                <tr>
                    <th colspan="5" class="text-center">Neatlikti darbai</th>
                </tr>
                `
    
                neatlikti_darbai.sort((a, b) => {
                    return a.laikas - b.laikas;
                });
    
                for(let i = 0; i < neatlikti_darbai.length; i++) {
                    txt += `
                    <tr>
                        <th scope="row">${neatlikti_darbai[i].id}</th>
                        <td>${neatlikti_darbai[i].darbas}</td>
                        <td>${neatlikti_darbai[i].laikas}</td>
                        <td>${neatlikti_darbai[i].atliktas == 1 ? "Atlikta" : "Neatlikta"}</td>
                        <td><a class="btn btn-primary" href="/update/${neatlikti_darbai[i].id}">${neatlikti_darbai[i].atliktas == 0 ? "atlikta" : "neatlikta?"}</a></td>
                    </tr>
                    `
                }
            }

            if (be_laiko.length > 0) {
                txt += `
                <tr>
                    <th colspan="5" class="text-center">Darbai be termino</th>
                </tr>
                `
                be_laiko.sort((a, b) => {
                    return a.laikas - b.laikas;
                });
    
                for(let i = 0; i < be_laiko.length; i++) {
                    txt += `
                    <tr>
                        <th scope="row">${be_laiko[i].id}</th>
                        <td>${be_laiko[i].darbas}</td>
                        <td>Be termino</td>
                        <td>${be_laiko[i].atliktas == 1 ? "Atlikta" : "Neatlikta"}</td>
                        <td><a class="btn btn-primary" href="/update/${be_laiko[i].id}">${be_laiko[i].atliktas == 0 ? "atlikta" : "neatlikta?"}</a></td>
                    </tr>
                    `
                }
            }

            if (veluojami_darbai.length > 0) {
                txt += `
                <tr>
                    <th colspan="5" class="text-center">Veluojami darbai</th>
                </tr>
                `
                veluojami_darbai.sort((a, b) => {
                    return a.laikas - b.laikas;
                });
    
                for(let i = 0; i < veluojami_darbai.length; i++) {
                    txt += `
                    <tr>
                        <th scope="row">${veluojami_darbai[i].id}</th>
                        <td>${veluojami_darbai[i].darbas}</td>
                        <td>${veluojami_darbai[i].laikas}</td>
                        <td>${veluojami_darbai[i].atliktas == 1 ? "Atlikta" : "Neatlikta"}</td>
                        <td><a class="btn btn-primary" href="/update/${veluojami_darbai[i].id}">${veluojami_darbai[i].atliktas == 0 ? "atlikta" : "neatlikta?"}</a></td>
                    </tr>
                    `
                }
            }

            if (atlikti_darbai.length > 0) {
                txt += `
                <tr>
                    <th colspan="5" class="text-center">Atlikti darbai</th>
                </tr>
                `
                atlikti_darbai.sort((a, b) => {
                    return a.laikas - b.laikas;
                });
    
                for(let i = 0; i < atlikti_darbai.length; i++) {
                    txt += `
                    <tr>
                        <th scope="row">${atlikti_darbai[i].id}</th>
                        <td>${atlikti_darbai[i].darbas}</td>
                        <td>${atlikti_darbai[i].laikas}</td>
                        <td>${atlikti_darbai[i].atliktas == 1 ? "Atlikta" : "Neatlikta"}</td>
                        <td><a class="btn btn-primary" href="/update/${atlikti_darbai[i].id}">${atlikti_darbai[i].atliktas == 0 ? "atlikta" : "neatlikta?"}</a></td>
                    </tr>
                    `
                }
            }

            txt += `
            </tbody>
            </table>
            `

            return txt
        }
        res.send(html(table()))
      });

})

app.get('/update/:id', (req, res) => {

    con.query(`SELECT atliktas FROM darbai WHERE id = ${req.params.id}`, function (err, result) {
        if (err) throw err;
        if(result[0].atliktas == 0) {
            var sql = `UPDATE darbai SET atliktas = 1 WHERE id = ${req.params.id}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
        } else {
            var sql = `UPDATE darbai SET atliktas = 0 WHERE id = ${req.params.id}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
        }
      });

      res.redirect("/");
})

app.get('/naujas', (req, res) => {
    function forma() {
        let txt = `
        <form action="/naujas" method="post" class="m-4">
        <div class="form-group">
            <label for="">Darbas</label>
            <input type="text" class="form-control" name="darbas" aria-describedby="emailHelp" placeholder="darbas" required>
         </div>
        <div class="form-group">
            <label for="">Terminas</label>
            <input type="date" class="form-control" name="laikas" aria-describedby="emailHelp" placeholder="darbas">
         </div>
         <br>
         <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        
        `
        return txt;
    }

    res.send(html(forma()))
})

app.post('/naujas', (req, res) => {

    if(req.body.darbas && req.body.laikas) {
        var sql = `INSERT INTO darbai (darbas, laikas) VALUES ('${req.body.darbas}', '${req.body.laikas}')`;
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    } else {
        var sql = `INSERT INTO darbai (darbas) VALUES ('${req.body.darbas}')`;
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    }


  res.redirect("/");
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "darbai"
});

function html(content = "") {
    let txt;
    txt = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>darbai</title>
</head>
<body>
    `

    txt += content;

    txt += `
        </body>
        </html>
    `
    return txt
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})