server = require("./server")
mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
Farmacia = require("./src/farmacia")

mongoConnection.connect( (db) => {
    farmaciaHome = new Home("farmacias", db)    
    folgera = new Farmacia("folgera",false,"España")
    ruiz = new Farmacia("ruiz",true,"Peron")
    farmaciaHome.insert(folgera)
    farmaciaHome.insert(ruiz)
    server.register(ruiz)
    server.register(farmaciaHome)
    server.register(folgera)
    server.init();
})

