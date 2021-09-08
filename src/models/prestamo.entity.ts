import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isbn: string;

  @Column()
  identificaciónUsuario: string;

  @Column()
  tipoUsuario: number; 

  @Column()
  fechaMaximaDevolucion:string;
}
