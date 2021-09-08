import { Injectable } from '@nestjs/common';

@Injectable()
export class PrestamoService {
    createPrestamo(body:any){
        return "crear prestamo "+JSON.stringify(body);
    }

    getPrestamo(id){
        return "mostrar el prestamo "+id;
    }
}
