const { Router } = require("express");
const { Usuario, Famoso } = require("../db");

const router = Router();

router.get("/", async function( req, res) {

try{
        const usuarios = await Usuario.findAll({ });

        res.json(usuarios);
} catch (err) {
        res.send("Error")
    }
});

router.post("/", async function( req, res) {

        const {
            id,
                name,
                lastname,
                email,
                edad,
                trabajo } = req.body;
        
            try {
                const formUsuarios = await Usuario.create({
                    id,
                        name,
                        lastname,
                        email,
                        edad,
                        trabajo,
                });
          
                res.json(formUsuarios);
                
            } catch (err) {
                res.send("hola, hay un error")
            }
});

module.exports = router;