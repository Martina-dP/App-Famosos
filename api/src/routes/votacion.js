const { Router } = require("express");
const { Famoso_usuario } = require('../db');

const router = Router();

router.get("/", async function( req, res) {

        const famosos = await Famoso_usuario.findAll({ });

        res.json(famosos);
});

router.post("/", async function( req, res) {

        const { value, famosoId,
                usuarioId, } = req.body;
            
                try {
                    const formFamosos = await Famoso_usuario.create({
                        value,
                        famosoId,
                        usuarioId,
                    });
              
                    res.json(formFamosos);
                    console.log(formFamosos);
                    console.log(Famoso_usuario);
                    
                } catch (err) {
                    res.send("hola, hay un error")
                    console.log("hola a todos", err);
                }
});

module.exports = router;