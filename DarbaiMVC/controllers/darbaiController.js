const darbaiModel = require("../models/darbai/darbaiModel");
const twing = require("../view");

module.exports = {
  getList : async (req, res) => {
    const [list, _] = await darbaiModel.sarasas();
    const output = await twing.render("index.html", {
      list: list,
    });
    res.send(output);
  },
  atlikta : (req, res) => {
    darbaiModel.atlikta(req.params.id);
    res.redirect("/");
  },
  naujas : async (req, res) => {
    const output = await twing.render("naujas.html")
    res.send(output);
  },
  prideti : (req, res) => {
    if(!req.body.laikas) {
      let method = 1;
      darbaiModel.prideti(req.body.darbas, req.body.laikas, method);
    } else {
      darbaiModel.prideti(req.body.darbas, req.body.laikas);
    }

    // console.log(req.body)
    res.redirect("/");
  }
}