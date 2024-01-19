import { ObjectSchema } from 'realm';
import Realm from "realm";

export class Person extends Realm.Object<Person> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  id_card_no!: string;
  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: { type: 'string', indexed: 'full-text' },
      id_card_no: { type: 'string' },
    },
    primaryKey: '_id',
  };
}
