////////////// THE TURTLE //////////////////////

class Turtle {
      constructor(x,y) {
            this.x = x;
            this.y = y;
            this.grid = [];
            this.direction = "xright";
            this.points = [];

            for (let i = 0; i < 10; i++) {
                  let row = [];
                  for (let j = 0; j < 10; j++) {
                        row.push(" ");
                  }
                 this.grid.push(row);
            }
            this.points.push([this.x,this.y])
            this.grid[this.y][this.x] = "•"
      };

      forward(num) {
            if (this.direction === "xright") {
                  for (let i = 0; i < num; i++) {
                        this.grid[this.y][this.x + i] = "•"
                        this.points.push([this.x + i,this.y])
                  }
                  this.x += num;    
            } else if (this.direction === "xleft") {
                  for (let i = 0; i < num; i++) {
                        this.grid[this.y][this.x - i] = "•"
                        this.points.push([this.x - i,this.y])
                  }
                  this.x -= num;    
            } else if (this.direction === "ydown") {
                  for (let i = 0; i < num; i++) {
                        this.grid[this.y + i][this.x] = "•"
                        this.points.push([this.x,this.y + i])
                  }
                  this.y += num;    
            } else {
                  for (let i = 0; i < num; i++) {
                        this.grid[this.y - i][this.x] = "•"
                        this.points.push([this.x,this.y - i])
                  }
                  this.y -= num;    
            }
            return this;
      };

      right() {
            if (this.direction === "xright") {
                  this.direction = "ydown";
            } else if (this.direction === "ydown") {
                  this.direction = "xleft";
            } else if (this.direction === "xleft") {
                  this.direction = "yup";
            } else {
                  this.direction = "xright";
            }   
            return this; 
      };

      left() {
            if (this.direction === "xleft") {
                  this.direction = "ydown";
            } else if (this.direction === "ydown") {
                  this.direction = "xright";
            } else if (this.direction === "yup") {
                  this.direction = "xleft";
            } else {
                  this.direction = "yup";
            }  
            return this;  
      };

      allPoints() {
            return this.points;  
      };

      print() {
            for (let i = 0; i < this.grid.length; i++) {
                  const all = this.grid[i].join('')
                  console.log(all);
              }
      };
}



const flash = new Turtle(0,0)
flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print();

const p = new Turtle(0, 4)
p.forward(3)
p.left()
p.forward(3)
p.right()
p.forward(5)
p.right()
p.forward(8)
p.right()
p.forward(5)
p.right()
p.forward(3)
p.left()
p.forward(3)
p.print();
