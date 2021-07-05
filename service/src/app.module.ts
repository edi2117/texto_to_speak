import { Module }             from '@nestjs/common';
import { AppController }      from './app.controller';
import { CommentController }  from './comment/comment.controller';
import { AppService }         from './app.service';
import { CommentModule }      from './comment/comment.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CommentModule],
})
export class AppModule {}
