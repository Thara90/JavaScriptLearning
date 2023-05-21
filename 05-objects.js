const cookie = {
    name : "chocolate chip",
    isGlutanFree : false,
    //"+Yummy" : true
    eatCookie : function () {
        console.log("I am eating " + this.name);
    }
};

//cookie.name = "chip chocolate"
//cookie.isGlutanFree = true,
//console.log(cookie["+Yummy"]);
//console.log(cookie);
cookie.eatCookie();

class Cookie {
    constructor(name, isGlutanFree){
        this.name = name;
        this.isGlutanFree = isGlutanFree;
    }

    eatCookie(){
        console.log("I am eating " + this.name); 
    }
}
const myCookie =  new Cookie("iced oatmeal",false);
//console.log(myCookie);
myCookie.eatCookie();