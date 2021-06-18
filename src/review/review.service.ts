import { Injectable } from '@nestjs/common';
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

class Leak {}

const leaks = [];

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel)
    private readonly reviewModel: DocumentType<ReviewModel>, // ModelType
  ) {}
  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create(dto);
  }
  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
  async findByProductId(
    productId: string,
  ): Promise<DocumentType<ReviewModel>[]> {
    leaks.push(new Leak());
    return this.reviewModel
      .find({ productId: Types.ObjectId(productId) })
      .exec();
  }
  // async deleteByProductId(productId: string) {
  //   return this.reviewModel
  //     .deleteMany({ productId: Types.ObjectId(productId) })
  //     .exec();
  // }
}
