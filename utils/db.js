import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

console.log("DATABASE_URL:", process.env.DATABASE_URL); 

//const sql = neon(process.env.DATABASE_URL);

const sql = neon("postgresql://neondb_owner:npg_kl4AxfKSrN3B@ep-fancy-tooth-a1qk7lby-pooler.ap-southeast-1.aws.neon.tech/MockMentor?sslmode=require&channel_binding=require");

export const db = drizzle(sql, { schema });