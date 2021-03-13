
class BMW {
    startEngine() {
        console.log('wwrrrrr')
    }
 
    accept(operation:Visitor) {
        operation.visitBMW(this)
    }
}
 
class Mercedes {
    startEngine() {
        console.log('drdrrrr')
    }
 
    accept(operation:Visitor) {
        operation.visitMercedes(this)
    }
}
 
class Toyota {
    startEngine() {
        console.log('Rrrrrrr')
    }
 
    accept(operation:Visitor) {
        operation.visitToyota(this)
    }
}
 


 
class Visitor {
    visitBMW(bmw:BMW){
        bmw.startEngine()
    }
    visitMercedes(mercedes:Mercedes){
        mercedes.startEngine()
    }
    visitToyota(toyota:Toyota){
        toyota.startEngine()
    }
}
 

 
 
const bmw = new BMW()
const mercedes = new Mercedes()
const toyota = new Toyota()
const start = new Visitor();

 
 
bmw.accept(start)           // wwrrrrr
mercedes.accept(start)      // drdrrrr
toyota.accept(start)        // Rrrrrrr

