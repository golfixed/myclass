import dbCon from "../../configs/DBConnection";
import express from "express";

let setting = express();

//REQUEST ACCOUNT ID 
setting.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(200)
      .send({ error: true, message: "Please provide account id" });
  } else {
    dbCon.query("SELECT id FROM account WHERE id = ?", id, (error, results) => {
      if (error) { console.log(error) }
      else {
        console.log(results)

        if (results.length > 0) {
          let ac_id = results[0].id;

          dbCon.query("SELECT id, firstname, lastname, email, role, image, gender, phone FROM account WHERE id = ?", ac_id, (error, results) => {
            if (error) throw error;

            let message = "";
            if (results === undefined || results.length == 0) {
              message = "ID not found";
            } else {
              message = `Successfully retrieved profile ID = ${id}`;
            }
            return res.send({ error: false, data: results[0], message: message });
          }
          );
        } else {
          res.status(200).send({ error: true, message: "No account id in DB" })
        }
      }
    })
  }
});


module.exports = setting;