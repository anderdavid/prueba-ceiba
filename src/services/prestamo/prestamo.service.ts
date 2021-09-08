import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from '../../models/prestamo.entity'

@Injectable()
export class PrestamoService {
    constructor(@InjectRepository(Prestamo)
    private repositorioPrestamo: Repository<Prestamo>){}

    async createPrestamo(body:any){
       
         await this.repositorioPrestamo.save(this.repositorioPrestamo.create(
             {
                isbn:"DASD154212",
                identificaciónUsuario:"154515485",
                tipoUsuario:1,
                fechaMaximaDevolucion: "15/02/2021"
             }
         ))
         return "crear prestamo "+JSON.stringify(body);
    }

    getPrestamo(id): Promise<Prestamo[]>{
        return this.repositorioPrestamo.find();
    }
}
