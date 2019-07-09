server = require("./server")
mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
Farmacia = require("./src/farmacia")

mongoConnection.connect( (db) => {
    farmaciaHome = new Home("Farmacia", db)    
    folgera = new Farmacia("folgera")
    farmaciaHome.insert(folgera)
    server.register(farmaciaHome)
    server.register(folgera)
    server.init();
})

