import { createConnection } from 'typeorm';
import  {Config}              from 'config/database'
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: Config.host,
      port: Config.port,
      username:Config.username,
      password: Config.password,
      database: Config.database,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];