const mongo = require('mongoose');

(async ()=>{
    try {
        const db = await mongo.connect("mongodb://acdesacomp_andres:ab3244262@mongodb-acdesacomp.alwaysdata.net/acdesacomp_mdb");
        console.log('Conectado a la base de datos: ',db.connection.name);        
    } catch (error) {
        console.log(error);
    }
})()
