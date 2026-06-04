import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid connection string"),
  NEXTAUTH_SECRET: z.string().min(1, "NEXTAUTH_SECRET is required"),
  NEXTAUTH_URL: z.string().url("NEXTAUTH_URL must be a valid URL"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

function validateEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    const messages = Object.entries(errors)
      .map(([key, msgs]) => `  ✗ ${key}: ${msgs?.join(", ")}`)
      .join("\n");

    throw new Error(
      `\n❌ Invalid environment variables:\n${messages}\n\nCheck your .env file.\n`
    );
  }

  return parsed.data;
}

// Only validate on the server, not during edge runtime
export const env = typeof window === "undefined" ? validateEnv() : ({} as ReturnType<typeof validateEnv>);
