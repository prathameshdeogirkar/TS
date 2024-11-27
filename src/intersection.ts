interface Student {
    name: string;
    age: number;
    mobile: string;
}

interface Teacher {
    name: string;
    age: number;
    email: string;
}


type Principal = Student & Teacher;


const principal: Principal = {
    name: "Rahul",
    age: 30,
    mobile: "",
    email: "",
} 
