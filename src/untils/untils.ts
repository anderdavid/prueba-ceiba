import *as moment from 'moment';
 
const SABADO =6;
const DOMINGO=0;

const USUARIO_AFILIADO:number=1;
const USUARIO_EMPLEADO:number=2;
const USUARIO_INVITADO:number=3;

export const calcularFechaMaxima =(tipoUsuario)=>{

    let countDays =0;
    let days:number=0
    let today =moment();

    switch(tipoUsuario){
        case USUARIO_AFILIADO:
            days =10;
            break;
        case USUARIO_EMPLEADO:
            days=8;
            break;
        case USUARIO_INVITADO:
            days=7;
            break;
    }
   
    while(countDays<days){
        today =today.add(1,'days');
        
        if(today.day()!=SABADO && today.day()!=DOMINGO){
           countDays++;
        }
    }
    
    
    return today.format('DD/M/YYYY')
}