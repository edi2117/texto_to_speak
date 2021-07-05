import { Body, Controller, Get, Post }  from '@nestjs/common';
import { CommentService }               from './comment.service';
import { Comment }                      from './entities/comment.entity';
import { ResponseDto }                  from '../dto/response.dto';
import { CommentCreateDto }             from './dto/comment.create.dto';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Get('list')
    async getList(): Promise<Comment[]>{
        return this.commentService.findAll();
    }

    @Post('add')
    async create(@Body() data: CommentCreateDto): Promise<ResponseDto>{
     return this.commentService.create(data);
    }
}
