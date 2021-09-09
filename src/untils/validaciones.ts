import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from '../models/prestamo.entity';


@Injectable()
export class Validaciones{

    private USUARIO_AFILIADO:number=1;
    private USUARIO_EMPLEADO:number=2;
    private USUARIO_INVITADO:number=3;
    
    constructor(@InjectRepository(Prestamo)
    private repositorioPrestamo: Repository<Prestamo>){}

    async validarPrestamoInvitado(mIdentificaciónUsuario):Promise<boolean>{
        const prestamo = await this.repositorioPrestamo.findOne({identificaciónUsuario:mIdentificaciónUsuario});
        return (prestamo===undefined)?true:false;
    }

    validarTipoDeUsuario(tipoUsuario){
        if(tipoUsuario==this.USUARIO_AFILIADO){
            return true;
        }else if(tipoUsuario==this.USUARIO_EMPLEADO){
            return true;
        }else if(tipoUsuario==this.USUARIO_INVITADO){
            return true;
        }
        else {
            return false;
        }
    }
}
