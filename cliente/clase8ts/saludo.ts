import IAnimal from "./IAnimal";

class Animal implements IAnimal{
    edad: number;
    constructor(edad:number=1){
        this.edad = edad;
    }

    public get Edad(): number {
        return this.edad;
    }
    public set Edad(value: number) {
        if (value < 0) {
            throw new RangeError("La edad no puede ser negativa");
        }
        this.edad = value;
    }

    roar(): void {
        console.log("Roar!");
        return;
    }

    toString(): string {
        return `Animal de ${this.edad} años`;
    }
}

const gato = new Animal();
console.log(gato.toString());
console.log(gato.Edad);
gato.roar();