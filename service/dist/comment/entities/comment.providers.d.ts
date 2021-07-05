import { Connection, Repository } from 'typeorm';
import { Comment } from './comment.entity';
export declare const CommentProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Comment>;
    inject: string[];
}[];
