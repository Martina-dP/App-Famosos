const { Router } = require("express");
const { Famosos_Usuarios } = require('../db');

const router = Router();

router.post("/", async function( req, res) {

        const {
                id,
                value } = req.body;
            
                try {
                    const formFamosos = await Famosos_Usuarios.create({
                        id,
                        value,
                    });
              
                    res.json(formFamosos);
                    console.log(formFamosos);
                    
                } catch (err) {
                    res.send("hola, hay un error")
                    console.log("hola a todos", err);
                }
});

module.exports = router;