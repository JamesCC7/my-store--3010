const username: string | number = 'James';

const sum = (a: number, b:number) => {
    return a + b;
}

sum(1,3);

class Person{
    private age: number;
    lastName: string;

    constructor(age: number, lastName: string){
        this.age = age;
        this.lastName = lastName;
    }
}

//Si indicamos el alcance de las variables en el constructor no es necesario definir los atributos ya que el alcance de los atributos hacen que se conviertan en un colchon de seguro.
class Persona{
    constructor(public age: number, public lastName: string){
    }
}

const james = new Person(15, 'Contreras');
