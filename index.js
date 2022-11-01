class car{
    constructor(name,brand,com,total_sales){
        this.name =name;
        this.brand =brand;
        this.com =com;
        this.total_sales=total_sales;
    }
}
class car_details extends car{
    constructor(name,engine,transmision,seating_cap,price,yol){
        super(name,engine,transmision,seating_cap,price,yol);
    this.name=name;
    this.engine=engine;
    this.transmision=transmision;
    this.seating_cap=seating_cap;
    this.price=price;
    this.yol=yol;
    }

get_details(){
    console.log(this.name);
    console.log(this.engine);
    console.log(this.transmision);
    console.log(this.seating_cap);
    console.log(this.price);
    console.log(this.yol);
}
}
 car1 = new car_details("BMW","4000CC",23,6,122,2022)
    car1.get_details()
