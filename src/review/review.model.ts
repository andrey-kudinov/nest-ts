import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps {
  @prop()
  _id: string;
  @prop()
  name: string;
  @prop()
  title: string;
  @prop()
  description: string;
  @prop()
  rating: number;
  @prop()
  createdAd: Date;
}
