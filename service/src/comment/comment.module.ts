import { Module }               from '@nestjs/common';
import { DatabaseModule }       from '../database/database.module';
import { CommentProviders }     from './entities/comment.providers';
import { CommentService }       from './comment.service';
import { CommentController }    from './comment.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [
    ...CommentProviders,
    CommentService,
  ],
})
export class CommentModule {}