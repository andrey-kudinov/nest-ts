import { prop } from '@typegoose/typegoose';
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
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;
  @prop()
  secondaryCategory: string;
  @prop()
  alias: string;
  @prop({ unique: true })
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
