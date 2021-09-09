import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from '../models/prestamo.entity';


@Injectable()
export class Validaciones{
    
    constructor(@InjectRepository(Prestamo)
    private repositorioPrestamo: Repository<Prestamo>){}

    async validarPrestamoInvitado(mIdentificaciónUsuario):Promise<boolean>{
        const prestamo = await this.repositorioPrestamo.findOne({identificaciónUsuario:mIdentificaciónUsuario});
        return (prestamo===undefined)?true:false;
    }
}
