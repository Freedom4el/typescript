let element = this.document.getElementById("content");
class User{name : string;age : number;gender : string;    
    constructor(
        name:string, 
        age: number, 
        gender:string
    ){
        this.name = name;        
        this.age = age;        
        this.gender = gender;
    }
}
const den : User = new User("Den", 28, "man");
element.innerHTML=`Имя: ${den.name} возраст: ${den.age} пол: ${den.gender}`;