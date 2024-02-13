import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../../app.module';
import { BookService } from '../book.service';

describe('BookService', () => {
  let service: BookService;
  let moduleRef: TestingModule;

  beforeEach(() => jest.clearAllMocks());

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = moduleRef.get<BookService>(BookService);
  });

  it('[Success] book을 생성할 수 있다', async () => {
    const book = await service.createBook('test');
    expect(book.title).toBe('test');
  });
});
