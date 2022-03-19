const {Router} = require('express');
const Portfolio = require('../models/Portfolio');
const twitter = require('./twitter')

// Definicion de enrutador:
const router = Router();

// Definicion de ruta principal:
router.get('/',async (req,res)=>{

    const portafolio = await Portfolio.find().lean();
    res.render('index',{portafolio: portafolio});
});   

// Definicion de ruta de actualizacion:
router.get('/actform/:id', async (req,res)=>{    

    let id = req.params.id;
    let portafolio = await Portfolio.findById(id).lean();

    res.render('actform', {portafolio: portafolio});
});  

// Definicion de ruta para guardar el dato:
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
});

// Definicion de ruta de actualizacion:

router.post('/updtPortfolio/:id', async (req,res)=>{

    let {id} = req.params;
    await Portfolio.findByIdAndUpdate(id, req.body);

    res.redirect('/');
});

module.exports = router;