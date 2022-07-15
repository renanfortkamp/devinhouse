class Retangulo{
    width
    heigth
    constructor(width, heigth){
         this.width = width
         this.heigth = heigth
     }
    get area(){
         return this.width * this.heigth + "m²"
     }
    
}

const retangulos = [new Retangulo(30,10),new Retangulo(30,5),new Retangulo(60,30)]


for(index in retangulos){
    console.log(retangulos[index].area)

}