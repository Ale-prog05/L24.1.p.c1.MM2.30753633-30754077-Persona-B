/* Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos
y reporte al final la edad promedio y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17),
Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) 
y Leo (16); la salida requerida presenta el siguiente formato:
Edad promedio: 18.50
Edad mayor entre las mujeres: 19 */

import CL_persona from "./CL_persona.js"
import CL_clase from "./CL_clase.js"


let persona1 = new CL_persona("Luis", 15, "M")
let persona2 = new CL_persona("Ana", 19, "F")
let persona3 = new CL_persona("Jose", 21, "M")
let persona4 = new CL_persona("Carmen", 17, "F")
let persona5 = new CL_persona("Rosa", 18, "F")
let persona6 = new CL_persona("Jose", 22, "M")
let persona7 = new CL_persona("Maria", 17, "F")
let persona8 = new CL_persona("Luz", 19, "F")
let persona9 = new CL_persona("Rafael", 23, "M")
let persona10 = new CL_persona("Liz", 15, "F")
let persona11 = new CL_persona("Marcos", 20, "M")
let persona12 = new CL_persona("Leo", 16, "M")
let clase = new CL_clase()
clase.procesarPersona(persona1)
clase.procesarPersona(persona2)
clase.procesarPersona(persona3)
clase.procesarPersona(persona4)
clase.procesarPersona(persona5)
clase.procesarPersona(persona6)
clase.procesarPersona(persona7)
clase.procesarPersona(persona8)
clase.procesarPersona(persona9)
clase.procesarPersona(persona10)
clase.procesarPersona(persona11)
clase.procesarPersona(persona12)

let salida = document.getElementById("salida")
salida.innerHTML = `
<h1>Resultados</h1>
<p>Edad promedio: ${clase.promedio()}</p>
<p>Edad mayor entre las mujeres: ${clase.devolverMayor()}</p>
`