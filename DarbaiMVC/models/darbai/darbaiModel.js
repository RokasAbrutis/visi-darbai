const db = require("../db");

exports.sarasas = async () => {
    let rows = await db.query("SELECT *, CASE WHEN laikas is null THEN 1 ELSE 0 END AS neterminuotas FROM darbai ORDER BY atliktas ASC, neterminuotas ASC, laikas ASC;");
    return rows; 
  };

  exports.atlikta = async (id) => {
    let rows = await db.query(`UPDATE darbai SET atliktas = 1 WHERE ID = ${id};`);
    return rows; 
  };
  exports.prideti = async (darbas, laikas, method) => {
    if(method) {
        let rows = await db.query(`INSERT INTO darbai(darbas) VALUES ('${darbas}');`);
        return rows; 
    } else {
        let rows = await db.query(`INSERT INTO darbai(darbas, laikas) VALUES ('${darbas}','${laikas}');`);
        return rows; 
    }
  };