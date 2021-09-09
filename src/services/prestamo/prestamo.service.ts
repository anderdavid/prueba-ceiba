import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from '../../models/prestamo.entity';
import { calcularFechaMaxima } from '../../untils/untils'
import { Validaciones} from '../../untils/validaciones'

@Injectable()
export class PrestamoService {
    constructor(@InjectRepository(Prestamo)
    private repositorioPrestamo: Repository<Prestamo>, private validaciones:Validaciones){}

    async createPrestamo(body:any){

    const USUARIO_AFILIADO:number=1;
    const USUARIO_EMPLEADO:number=2;
    const USUARIO_INVITADO:number=3;
       
        if(body.tipoUsuario === USUARIO_INVITADO && ! await this.validaciones.validarPrestamoInvitado(body.identificaciónUsuario)){
            return{
                mensaje :`El usuario con identificación ${body.identificaciónUsuario} ya tiene un libro prestado por lo cual no se le puede realizar otro préstamo`
            }
        }else{
            let currently:any=await this.repositorioPrestamo.save(this.repositorioPrestamo.create(
                {
                    ...body,
                    fechaMaximaDevolucion: "15/02/2021"
                }
            ))
            const {id,fechaMaximaDevolucion}=currently;
            return {
                id:id,
                fechaMaximaDevolucion:fechaMaximaDevolucion
            }
            
               
        }
    
    

    }

    getPrestamo(id): Promise<Prestamo[]>{
        return this.repositorioPrestamo.find(); 
    }
}
