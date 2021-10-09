const { Router } = require('express');
const fetch = require("cross-fetch");
const {Country, Activity} = require('../db');
const {Sequelize}= require("sequelize");
const Op=Sequelize.Op;
const countries = require('../../countries.json');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.get('/countries', async (req, res)=>{
    let {name}= req.query;
    if(name){
        const search = await Country.findAll({
             where :{
                 name: {
                     [Op.iLike]:`%${name}%`
                    } 
                },
                include: {model: Activity}
                });  
    if (!search){
        return res.status(404).send({error: "Master el pais no existe"})
    }else {
        return res.status(200).json(search);
    }
    };
// ----------------------------------------------------------------------------
    

const mapeoYcreate =  countries.map(async p => {
        const creacion = await Country.findOrCreate({
            where: { name: p.name },
            defaults: {
                id: p.alpha3Code,
                name: p["name"],
                flag: p["flag"].replace(".eu", ".com"),
                region: p["subregion"],
                capital: p["capital"],
                continent: p["region"],
                area: p["area"],
                population: p.population,
                timezone: p.timezones[0],   
            },
            include: {model: Activity}
         })
         return creacion[0];
     }); 
     let final =  await Promise.all(mapeoYcreate);
     
     res.status(200).json(final)


     
});

router.get('/countries/:id', async (req, res)=>{
    let {id} = req.params;
    const search = await Country.findOne({ where: { id: id.toUpperCase() },include: {model: Activity} });
    if (!search){
        return res.status(404).send({error: "Master el pais no existe"})
    } else {
        return res.status(200).json(search);
    };
    
});



router.post('/activity', async (req, res)=>{
    let {name, difficulty, time, season, countryId, price}= req.body;
    try {
        if (!name || !difficulty || !time || !season || !countryId || !price){
        return res.status(404).send({error: "Mi poio te falto pasar data"});
    }else {
        const newActivityAdded = await Activity.create({
        name,
        difficulty,
        time,
        season,
        price
    });
     for(c of countryId){
         var country = await Country.findByPk(c);
       console.log("este", country)
       await newActivityAdded.addCountry(country);
     }
        
      res.json(newActivityAdded);
    }
    }catch{
        res.status(404).send({error: "Algo salio mal wilson"});
    };
});


// router.get('/countries/:name', async (req, res)=>{
//     let {name} = req.params;
//     const search = await Country.findAll({
//         where :{
//             name: {
//                 [Op.iLike]:`%${name}%`
//                } 
//            },
//            include: {model: Activity}
//            });  
//            if (!search){
//             return res.status(404).send({error: "Master el pais no existe"})
//         }else {
//             return res.status(200).json(search);
//         }
// })


module.exports = router;
