const {Router} = require('express');
const Portfolio = require('../models/Portfolio');

const router = Router();

router.get('/',async (req,res)=>{
    const portafolio = await Portfolio.find();
    res.render('index',{portafolio: portafolio});
});    

router.post('/portfolio/add',async (req,res)=>{
    // Deficion de variable para captura del registro:
    let portfolio = Portfolio(req.body);
    
    try {
        // Envio del registro a la BD:
        await portfolio.save();    
        res.send({
            "Status": 200,
            "Message": "Registro creado"
        })
    } catch (error) {
        res.send({
            "Status": 400,
            "Message": error
        })
    }
})

module.exports = router;