import { PrimaryKey, Property } from '@mikro-orm/core';

export abstract class CustomBaseEntity {
  @PrimaryKey({ type: 'bigint', autoincrement: true })
  id: number;

  @Property({ type: 'date', defaultRaw: 'now()' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date(), defaultRaw: 'now()' })
  updatedAt;
}
