class Circle {
	constructor(radius){
    this.radius = radius;
  }
  getArea(){return this.radius*this.radius*Math.PI};
  getPerimeter(){return 2*Math.PI*this.radius}
}