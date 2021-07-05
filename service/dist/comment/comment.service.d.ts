import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CommentCreateDto } from './dto/comment.create.dto';
import { ResponseDto } from 'src/dto/response.dto';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    findAll(): Promise<Comment[]>;
    create(data: CommentCreateDto): Promise<ResponseDto>;
    trasnlation(): Promise<void>;
}
