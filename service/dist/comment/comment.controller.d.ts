import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { ResponseDto } from '../dto/response.dto';
import { CommentCreateDto } from './dto/comment.create.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getList(): Promise<Comment[]>;
    create(data: CommentCreateDto): Promise<ResponseDto>;
}
