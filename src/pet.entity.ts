import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Client, client => client.pets)
  owner: Client;
}
