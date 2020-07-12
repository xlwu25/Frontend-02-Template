class Creature{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.alive = true;
    }

    hurt(damage){
        this.health -= damage;
        if(this.health <= 0)this.died();
    }

    died(){
        this.damage = 0;
        this.alive = false;
    }
}

class Dog extends Creature{
    constructor(name, damage) {
        super(name);
        this.damage = damage;
    }
}

class Human extends Creature{
    constructor(name, damage) {
        super(name);
        this.damage = damage;
    }
}

// let dog = new Dog("恶犬", 80);
// let human = new Human("暴躁老哥", 100);

// human.hurt(dog.damage);
// dog.hurt(human.damage);