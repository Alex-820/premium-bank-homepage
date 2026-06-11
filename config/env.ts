import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),
  AUTH_SECRET: z.string().min(32, "AUTH_SECRET must be at least 32 characters"),
  SESSION_COOKIE_NAME: z.string().default("premium_bank_session"),
  APP_URL: z.string().url().default("http://localhost:3000"),
  NODE_ENV: z.string().default("development")
});

export const env = envSchema.parse({
  MONGODB_URI: process.env.MONGODB_URI,
  AUTH_SECRET: process.env.AUTH_SECRET,
  SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME,
  APP_URL: process.env.APP_URL,
  NODE_ENV: process.env.NODE_ENV
});
