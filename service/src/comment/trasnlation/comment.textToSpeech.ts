import { Injectable}            from '@nestjs/common';
import { IamAuthenticator }     from 'ibm-watson/auth';
import Fs                       from 'fs'
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
@Injectable()
export class CommentService {
    
    async trasnlation(): Promise<void>{
       
        const textToSpeech = new TextToSpeechV1({
          authenticator: new IamAuthenticator({
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
            audio.pipe(Fs.createWriteStream('../../../hello_world.mp3'));
          })
          .catch(err => {
            console.log('error:', err);
          });
    }
}