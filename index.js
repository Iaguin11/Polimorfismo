class Vehicle {
    move(){
        console.log("O veículo está se movendo")
    }
}

class Car extends Vehicle { 
    move(){
        console.log("O carro está se movendo")
    }
}

class Ship extends Vehicle {
    move(){
        console.log("O navio está se movendo")
    }
}

class Aircraft {
    move(speed){
        console.log(`A aeronave está voando a ${speed} km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(80)


function start(Vehicle){
    console.log("Iniciando um veículo...")
    Vehicle.move() // Pode ser qualquer subClass de vehicle 
}
start(delorean)
start(blackPearl)
start(epoch)