import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestamoController } from './controllers/prestamo/prestamo.controller';
import { PrestamoService } from './services/prestamo/prestamo.service';
import { Prestamo } from './models/prestamo.entity';
import {Validaciones} from './untils/validaciones'

/**
 * NestJs es un framework modular, acá se puso todo el manejo del objeto Usuario desde el App modulo, que es el que da inicio a todo el proyecto
 * En su solución planteada, debería tratar de separar nuevos modulos con sus responsabilidades definidas
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "sqlite",
        database: ":memory:", //Indica que es una base de datos en memoria y se reinicia en cada ejecución
        entities: [Prestamo], // Se definen las entidades va administrar (y las cuales creara como tablas al momento de inicar la app)
        synchronize: true
      }), TypeOrmModule.forFeature([Prestamo]) //Administración de entidades debería hacerce solo en cada modulo encargado de la entidad
  ],
  controllers: [PrestamoController],
  providers: [PrestamoService,Validaciones],
})
export class AppModule { }
