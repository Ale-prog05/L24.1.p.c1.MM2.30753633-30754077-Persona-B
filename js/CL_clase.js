export default class CL_clase {
constructor () {
    this.mayor = 0
    this.acumEdad = 0
    this.contPer = 0
}
 procesarPersona (per) {
  this.contPer++
  this.acumEdad += per.edad 
  
  if(per.edad > this.mayor && per.sexo == 'F') {
    this.mayor = per.edad } 
  }
   promedio () {
    return this.acumEdad / this.contPer}
   
   devolverMayor () {
    return this.mayor
   }

}
