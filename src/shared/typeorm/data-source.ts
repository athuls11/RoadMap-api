import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'road_mate',
  username: 'root',
  password: 'Athulatz@11',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/common/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'typeorm_migrations',
  logger: 'file',
  synchronize: false,
  migrationsRun: true,
});
