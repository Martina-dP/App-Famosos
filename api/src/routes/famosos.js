const { Router } = require("express");

const router = Router();

router.get("/", async function( req, res) {
  
        res.send("hola a todos")
});

module.exports = router;