


function Robot() {

}

var directions = [ 'north', 'east', 'south', 'west' ]


Robot.prototype.orient = function(direction) {

    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
}

Robot.prototype.turnLeft = function() {
   let index = directions.indexOf(this.bearing)
   if(index === 0) {
     index = directions.length -1
   } else {
     index--
   }
   this.bearing = directions[index]
}

Robot.prototype.turnRight = function() {
   let index = directions.indexOf(this.bearing)
   if(index === (directions.length - 1)) {
     index = 0
   } else {
     index++
   }
   this.bearing = directions[index]
}

Robot.prototype.at = function(x,y) {
  this.coordinates = [x,y]
}

Robot.prototype.advance = function() {
  let x = this.coordinates[0]
  let y = this.coordinates[1]

  if(this.bearing ==="north") {
    y++
  } else if(this.bearing === "south") {
    y--
  } else if(this.bearing === "east") {
    x++
  } else if(this.bearing === "west") {
    x--
  }

  this.coordinates = [x,y]

}

Robot.prototype.instructions = function(command) {
  var commands = command.split("")
  var actions = {"L": "turnLeft",
              "R": "turnRight",
              "A": "advance"
  }
  var instruct = []
  for(let i = 0; i < commands.length; i++) {
    instruct.push(actions[commands[i]])
  }
  return instruct
}

Robot.prototype.place = function(command) {
  var array = this.instructions(command)

  for(i=0; i<array.length; i++) {
    const key = array[i]
    this[key]()
  }
}
