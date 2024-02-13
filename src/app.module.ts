import { MikroORM } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, OnModuleInit } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: MySqlDriver,
      dbName: 'node',
      autoLoadEntities: true,
      user: 'tossbank-dev',
      password: 'any',
      debug: true,
      allowGlobalContext: true,
      schemaGenerator: {
        createForeignKeyConstraints: true,
        disableForeignKeys: false,
        ignoreSchema: [],
        managementDbName: 'management',
      },
    }),
    BookModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  onModuleInit() {
    this.orm.schema.updateSchema();
  }
}
