import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrestamoService } from '../../services/prestamo/prestamo.service'

@Controller('prestamo')
export class PrestamoController {
    constructor(private mService:PrestamoService){}

    @Post()
    createPrestamo(@Body() body:any){
        return this.mService.createPrestamo(body);
    }
    @Get(':id')
    getPrestamo(@Param() params) {
        return this.mService.getPrestamo(params.id);
    }
    
}
