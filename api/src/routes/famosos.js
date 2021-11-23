const { Router } = require("express");
const { Famoso, Usuario } = require("../db");

const router = Router();

router.get("/", async function( req, res) {

        const famosos = await Famoso.findAll({ });

        res.json(famosos);
});

module.exports = router;