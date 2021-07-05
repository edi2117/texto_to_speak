"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentProviders = void 0;
const comment_entity_1 = require("./comment.entity");
exports.CommentProviders = [
    {
        provide: 'COMMENT_REPOSITORY',
        useFactory: (connection) => connection.getRepository(comment_entity_1.Comment),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=comment.providers.js.map