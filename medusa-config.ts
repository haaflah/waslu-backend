import { defineConfig } from "@medusajs/framework/utils";

import { validateEnv } from "./src/lib/env";

const env = validateEnv();

export default defineConfig({
  projectConfig: {
    databaseUrl: env.databaseUrl,
    redisUrl: env.redisUrl,
    http: {
      jwtSecret: env.jwtSecret,
      cookieSecret: env.cookieSecret,
      storeCors: env.storeCors,
      adminCors: env.adminCors,
      authCors: env.authCors,
    },
  },
  // Project modules are registered in later issues, once their implementations
  // exist. Do not register a module here before its code is in place.
  modules: [],
});
