import *as moment from 'moment';
 
const SABADO =6;
const DOMINGO=0;

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