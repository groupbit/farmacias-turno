MemoryHome = require("../src/memoryHome")
Product = require ("../src/producto")

var home
var chocolate
var alfajor


function setup() {
    home = new MemoryHome()
    folguera = new farmacia("folgera")
        home.insert(chocolate)

}



//register functions

beforeEach(setup)
test(get.name, get)
test(getNotContained.name, getNotContained)
test(deleteObject.name, deleteObject)
test(update.name, update)
test(all.name, all)
