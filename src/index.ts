const price = 1; //if we dont define type it will consider type  by their value

let isLogin: boolean = true  //defining type is boolean

let count: number = 100  //defining type is number

let userName: string = "Prathamesh"  //defining type is string



//we can assign array datatype in two ways 

let laptopNames: Array<string> = ["HP", "Acer", "Honor", "Macbook", "Asus"];   //first one 

let laptops: string[] = ["HP", "Acer", "Honor", "Macbook","Asus"];  //second one


console.log(laptopNames, userName, count);




//Any

let num: any = 100;      //Type Any will allow all types of datatype (it is also similar to not use of TS)
num = "Hundred";
num= true;



//Tuple

const ts: [string, string, number] = ["Hello", "TypeScript", 3]   // we can assign datatypes in array and values will be fixed no. of values.

console.log(`${ts[0]} this is ${ts[1]} lecture No. ${ts[2]}`);


//Enum 


enum Status{       //using enum we can assign specific values and we can use only that values
    Available,
    NotAvailable,
    Shifted,
    Dead

}


let userStatus: Status = Status.Available;

console.log(userStatus);




//Readonly

interface mobile{                  //by using readonly we can not define value again
        readonly id: number;
        name: string ;
        price: number;
}


const mobile1: mobile = {
    id: 1, 
    name: "iPhone 15 Pro", 
    price: 120000
}

const mobile2: mobile = {
    id: 2, 
    name: "Samsung Galaxy S23 Ultra", 
    price: 150000
}

const mobile3: mobile = {
    id: 3, 
    name: "OnePlus 11", 
    price: 60000
}
