import { Injectable,HttpException } from '@nestjs/common';
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

        const USUARIO_INVITADO:number=3;
       
        if(body.tipoUsuario === USUARIO_INVITADO && ! await this.validaciones.validarPrestamoInvitado(body.identificaciónUsuario)){

            throw new HttpException(`El usuario con identificación ${body.identificaciónUsuario} ya tiene un libro prestado por lo cual no se le puede realizar otro préstamo`,404);
        }else{
            let currently:any=await this.repositorioPrestamo.save(this.repositorioPrestamo.create(
                {
                    ...body,
                    fechaMaximaDevolucion: calcularFechaMaxima(body.tipoUsuario)
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
