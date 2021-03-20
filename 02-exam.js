class cIrcle {
    constructor(diameter, radias) {
        this.diameter = diameter
        this.radias   = radias
    }
 get area() {
     return this.calcArea();
 }
 calcArea() {
    return Math.PI * this.radias ** 2
    //return this.diameter * this.radias;
 }
} 
const circle = new cIrcle(3,2)

console.log(circle.area)
return circle.area