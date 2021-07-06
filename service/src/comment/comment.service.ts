import { Injectable, Inject, BadRequestException }   from '@nestjs/common';
import { Repository }           from 'typeorm';
import { Comment }              from './entities/comment.entity';
import { CommentCreateDto }     from './dto/comment.create.dto';
import { ResponseDto }          from 'src/dto/response.dto';
import {ApiKey, Url}             from '../../config/watson' 
const { IamAuthenticator }      = require('ibm-watson/auth');
const Fs                        = require('fs');
const TextToSpeechV1            = require('ibm-watson/text-to-speech/v1');

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
            message: "Não é possivel cadastrar sem informar o comentario"
        });
    }
   
    comment.content = data.content;

    return this.commentRepository.save(comment)
    .then(async (result) => {
      const translation = await this.translation(result);
      return {
        return: result,
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

  async translation(data): Promise<void>{
       
    const textToSpeech = new TextToSpeechV1({
      authenticator: new IamAuthenticator({
        apikey: ApiKey,
      }),
      serviceUrl: Url,
    });
    
    const synthesizeParams = {
      text: data.content,
      accept: 'audio/mp3',
      voice: 'pt-BR_IsabelaV3Voice',
    };
   
    textToSpeech
      .synthesize(synthesizeParams)
      .then(response => {
        const audio = response.result;
        audio.pipe(Fs.createWriteStream(`../client/public/audio/${data.id}.mp3`));
      })
      .catch(err => {
        console.log('error:', err);
      });
  }
}

