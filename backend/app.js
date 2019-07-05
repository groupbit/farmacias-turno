server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
    farmaciaHome = new Home("farmacia", db)    
    server.register(farmaciaHome)
    server.init();
})

