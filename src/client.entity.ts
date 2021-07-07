import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from './pet.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(type => Pet, pet => pet.owner)
  pets: Pet[];
}
