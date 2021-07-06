"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeakService = void 0;
const auth_1 = require("ibm-watson/auth");
const fs_1 = require("fs");
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
class TextToSpeakService {
    async trasnlation(data) {
        const textToSpeech = new TextToSpeechV1({
            authenticator: new auth_1.IamAuthenticator({
                apikey: 'htvoYJ6FQnd-Vzx-tPMxSira0c6up2La1TAGDyjUcevD',
            }),
            serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c2fb2eac-396f-47d1-b470-783640bccc4d',
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
            audio.pipe(fs_1.default.createWriteStream(`../../${data.id}`));
        })
            .catch(err => {
            console.log('error:', err);
        });
    }
}
exports.TextToSpeakService = TextToSpeakService;
//# sourceMappingURL=comment.textToSpeak.service.js.map