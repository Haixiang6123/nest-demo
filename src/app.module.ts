import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import config from '../ormconfig';
import { Client } from './client.entity';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
