//机器
function Machine(ecode, horsepower) {
    this.ecode = ecode;
    this.horsepower = horsepower;
}
//特别注意这一句，Machine.prototype是第一次初始化的时候就初始化好的，
//当调用Machine作为构造函数的时候，engine的值不会再改变
Machine.prototype.engine = this.ecode + " " + this.horsepower;
Machine.prototype.showme = function () {
    alert(this.name + " " + this.ecode + " " + this.horsepower);
}
Machine.prototype.addInit = function(a,b){
    return a+b;
}

var machine = new Machine("code1", 15);
machine.name = "machine1";

//小汽车
function Car(name, ecode, horsepower) {
    this.name = name;
    //调用父类的构造函数，使得Car的对象有ecode、horsepower属性
    Machine.call(this, ecode, horsepower);
}
//Car的原型指向Machine，使Car对象有Machine原型的任意属性和方法，比如showme
Car.prototype = new Machine();

var car = new Car("Benz","code1",255);







