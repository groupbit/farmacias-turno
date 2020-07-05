server = require("./server")
mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
Farmacia = require("./src/farmacia")

mongoConnection.connect( (db) => {
    farmaciaHome = new Home("farmacias", db) 
    ruiz = new Farmacia("ruiz","Peron",new Date("<2020-03-2>"))
    farmaciaHome.insert(ruiz)
    server.register(ruiz)
    server.register(farmaciaHome)
    server.init();
})

