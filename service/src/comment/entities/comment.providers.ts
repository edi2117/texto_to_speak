import { Connection, Repository } from 'typeorm';
import { Comment } from './comment.entity';

export const CommentProviders = [
  {
    provide: 'COMMENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: ['DATABASE_CONNECTION'],
  },
];