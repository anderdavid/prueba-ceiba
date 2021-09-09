import *as moment from 'moment';

// hoy = new Date();
// i=0;
// while (i<3) {
//   hoy.setTime(hoy.getTime()+24*60*60*1000); // añadimos 1 día
//   if (hoy.getDay() != 6 && hoy.getDay() != 0)
//     i++;  
// }
// fecha = hoy.getDate()+ '/' + hoy.getMonth()+1 + '/' + hoy.getFullYear();
// document.write(fecha); 

const SABADO =6;
const DOMINGO=0;

const LUNES =1;
const MARTES=2;
const MIERCOLES=3;
const JUEVES=4;
const VIERNES=5;

export const calcularFechaMaxima =(days:number)=>{
    let countDays =0;
    let today =moment();
   
    while(countDays<days){
        today =today.add(1,'days');
        console.log('dia '+today.day()+ 'countDia '+countDays);

        if(today.day()!=SABADO && today.day()!=DOMINGO){
           countDays++;
        }
    }
    
    
    return { fechaMaxima:today.format('DD/MM/YYYY')}
}