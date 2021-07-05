import { Injectable, Inject, BadRequestException }   from '@nestjs/common';
import { Repository }           from 'typeorm';
import { Comment }              from './entities/comment.entity';
import { CommentCreateDto }     from './dto/comment.create.dto';
import { ResponseDto }          from 'src/dto/response.dto';

@Injectable()
export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async create(data: CommentCreateDto): Promise<ResponseDto>{
    let comment = new Comment()

    if(!data.content){
        throw new BadRequestException(<ResponseDto>{
            status: false,
            message: "Não é possivel cadasddtrar sem informar o comentario"
        });
    }

    comment.content = data.content;
 
    return this.commentRepository.save(comment)
    .then((result) => {
      return <ResponseDto>{
        status: true,
        message: "Conteúdo cadastrado com sucesso!!!"
      }
    })
    .catch((error) => {
      return <ResponseDto>{
        status: false,
        message: "Houve um erro ao cadastrar (-_-)"
      }
    })    
  }
}

