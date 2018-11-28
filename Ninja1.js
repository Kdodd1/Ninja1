function Ninja(ninjaName){
  this.name = ninjaName;
  this.health = 100;
  var speed = 3;
  var strength = 100;

  this.getSpeed = function(){
    return speed;
    }
  this.getStrength = function(){
    return strength;
  }
  };
  Ninja.prototype.sayName = function() {
    console.log("My name is "+ this.name);
  }
  Ninja.prototype.showStats = function() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.getSpeed() + ", Strength: " + this.getStrength());
  }
  Ninja.prototype.drinkSake = function() {
    this.health += 10;
  }
  var ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  ninja1.showStats();
