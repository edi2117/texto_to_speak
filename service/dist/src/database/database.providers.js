"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const database_1 = require("../../config/database");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mysql',
            host: database_1.Config.host,
            port: database_1.Config.port,
            username: database_1.Config.username,
            password: database_1.Config.password,
            database: database_1.Config.database,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map