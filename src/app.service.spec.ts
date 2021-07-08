import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from './client.entity';

describe('AppService', () => {
  let service: AppService;

  const mockClientRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((client) =>
        Promise.resolve({ id: Date.now(), ...client }),
      ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Client),
          useValue: mockClientRepository,
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new client record', async () => {
    expect(await service.createClient('Jack')).toEqual({
      id: expect.any(Number),
      name: 'Jack',
    });
  });
});
