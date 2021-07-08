import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from '../src/client.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const mockClient = {};

  const mockClientRepository = {
    findOneOrFail: jest.fn().mockResolvedValue(mockClient),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(getRepositoryToken(Client))
      .useValue(mockClientRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/app/hello (GET)', () => {
    return request(app.getHttpServer())
      .get('/app/hello')
      .expect(200)
      .expect(mockClient);
  });
});
