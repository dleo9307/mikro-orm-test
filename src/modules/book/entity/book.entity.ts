import { Entity, Property } from '@mikro-orm/mysql';
import { CustomBaseEntity } from '../../../core/database/mikro-orm/base.entity';

@Entity()
export class Book extends CustomBaseEntity {
  @Property()
  title: string;

  constructor(title: string) {
    super();
    this.title = title;
  }
}
