function AnimalFunc(name) {
  this.name = name;
}

class AnimalClass {
  constructor(name) {
    this.name = name;
  }
}

const a1= AnimalFunc('초코');
console.log(a1);//1

const a2 = AClass();
console.log(a2);//2

class AClass{
	say(){
		console.log("hello");
	}
}

const a3= AnimalClass ('뽀삐');
console.log(a2);//3