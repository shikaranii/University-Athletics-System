import { Test, TestingModule } from '@nestjs/testing';
import { FacultyService } from './FacultyService';

describe('FacultyService', () => {
  let service: FacultyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyService],
    }).compile();

    service = module.get<FacultyService>(FacultyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
