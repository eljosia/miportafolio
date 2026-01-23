import { DataSource } from 'typeorm'
import { env } from 'process'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: env.DATABASE_HOST || 'localhost',
    port: env.DATABASE_PORT ? parseInt(env.DATABASE_PORT) : 3306,
    username: env.DATABASE_USER || 'root',
    password: env.DATABASE_PASSWORD || '',
    database: env.DATABASE_NAME || 'portafolio_cms',
    synchronize: env.DATABASE_SYNC === 'true' ? true : false,
    logging: true,
    entities: ['src/modules/**/entities/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
})
