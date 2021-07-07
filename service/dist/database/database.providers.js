"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mysql',
            host: '172.22.13.128',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'app_development',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map