interface BikeInfo {
    name: string;
    price: number;
    email?: string;  //by adding optional parameter (question mark) that key, value will be optional but if we want to add then it should be in a assigned datatype.
    contact: number;
    isSportBike: boolean;
}




const bike1: BikeInfo = {
    name: "Royal Enfield Classic 350",
    price: 190000,
    email: "classic350@royalenfield.com",
    contact: 9876543210,
    isSportBike: false,
};

const bike2: BikeInfo = {
    name: "Bajaj Pulsar NS200",
    price: 145000,
    contact: 9765432109,
    isSportBike: true,
};

const bike3: BikeInfo = {
    name: "TVS Apache RTR 160",
    price: 118000,
    email: "apache160@tvs.com",
    contact: 9654321098,
    isSportBike: true,
};

const bike4: BikeInfo = {
    name: "Yamaha FZ-S FI",
    price: 125000,
    contact: 954321098,
    isSportBike: false,
};

const bike5: BikeInfo = {
    name: "KTM Duke 390",
    price: 330000,
    email: "duke390@ktm.com",
    contact: 9432109876,
    isSportBike: true,
};


console.log(bike1);





