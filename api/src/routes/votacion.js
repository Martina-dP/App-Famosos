const { Router } = require("express");
const { Famoso_usuario } = require('../db');

const router = Router();

router.get("/", async function( req, res) {

        const famosos = await Famoso_usuario.findAll({ });

        res.json(famosos);
});

router.post("/", async function( req, res) {

        const { votacion, famosoId,
            usuarioId } = req.body;
            
                try {
                    const formFamosos = await Famoso_usuario.create({
                        votacion,
                        famosoId,
                        usuarioId
                    });
              
                    res.json(formFamosos);
                    console.log("holaa",formFamosos);
                    console.log(Famoso_usuario);
                    
                } catch (err) {
                    res.send("hola, hay un  en el back: " + err);
                    console.log("hola a todos", err);
                }
});

module.exports = router;