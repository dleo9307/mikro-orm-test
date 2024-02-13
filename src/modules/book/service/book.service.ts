import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Book } from '../entity/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: EntityRepository<Book>,
  ) {}

  async createBook(title: string): Promise<Book> {
    const book = new Book(title);
    await this.bookRepository.getEntityManager().persistAndFlush(book);
    return book;
  }
}
