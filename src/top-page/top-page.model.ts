import { prop, index } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class hhData {
  @prop()
  count: number;
  @prop()
  juniorSalary: number;
  @prop()
  middleSalary: number;
  @prop()
  seniorSalary: number;
}

export class TopPagesAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}

export interface TopPageModel extends Base {}

@index({ '$**': 'text' }) // title: 'text', seoText: 'text'
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;
  @prop()
  secondaryCategory: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  title: string;
  @prop()
  category: string;
  @prop({ type: () => hhData })
  hh?: hhData;
  @prop({ type: () => [TopPagesAdvantage] })
  advantages: TopPagesAdvantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
