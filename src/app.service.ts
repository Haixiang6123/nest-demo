import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
  ) {}

  getAll(): Promise<Client[]> {
    return this.clientsRepository.find(); // select * from client
  }

  async findOneById(id: number): Promise<Client> {
    try {
      return this.clientsRepository.findOneOrFail(id); // select * from client where id == id
    } catch (err) {
      // Handle error
      throw err;
    }
  }

  createClient(name: string): Promise<Client> {
    // insert -> ResultRow，not the Client entity
    const newClient = this.clientsRepository.create({ name });

    return this.clientsRepository.save(newClient);
  }

  async updateClient(id: number, name: string): Promise<Client> {
    const client = await this.findOneById(id);

    client.name = name;

    return this.clientsRepository.save(client);
  }

  async deleteClient(id: number): Promise<Client> {
    const client = await this.findOneById(id);

    return this.clientsRepository.remove(client);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
