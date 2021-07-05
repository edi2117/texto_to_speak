"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const response_dto_1 = require("../dto/response.dto");
const auth_1 = require("ibm-watson/auth");
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async findAll() {
        return this.commentRepository.find();
    }
    async create(data) {
        let comment = new comment_entity_1.Comment();
        if (!data.content) {
            throw new common_1.BadRequestException({
                status: false,
                message: "Não é possivel cadasddtrar sem informar o comentario"
            });
        }
        comment.content = data.content;
        return this.commentRepository.save(comment)
            .then((result) => {
            this.trasnlation();
            return {
                status: true,
                message: "Conteúdo cadastrado com sucesso!!!"
            };
        })
            .catch((error) => {
            return {
                status: false,
                message: "Houve um erro ao cadastrar (-_-)"
            };
        });
    }
    async trasnlation() {
        const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
        const fs = require('fs');
        const textToSpeech = new TextToSpeechV1({
            authenticator: new auth_1.IamAuthenticator({
                apikey: 'htvoYJ6FQnd-Vzx-tPMxSira0c6up2La1TAGDyjUcevD',
            }),
            serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c2fb2eac-396f-47d1-b470-783640bccc4d',
        });
        const synthesizeParams = {
            text: 'Que merda deu certo esta bosta',
            accept: 'audio/mp3',
            voice: 'pt-BR_IsabelaV3Voice',
        };
        textToSpeech
            .synthesize(synthesizeParams)
            .then(response => {
            const audio = response.result;
            audio.pipe(fs.createWriteStream('hello_world.mp3'));
        })
            .catch(err => {
            console.log('error:', err);
        });
    }
};
CommentService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('COMMENT_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map