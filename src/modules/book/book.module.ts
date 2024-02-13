import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Book } from './entity/book.entity';
import { BookService } from './service/book.service';

@Module({
  imports: [MikroOrmModule.forFeature([Book])],
  providers: [BookService],
})
export class BookModule {}
