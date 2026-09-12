import { defineConfig } from "orval";

export default defineConfig({
  blogApi: {
    input: {
      target: "./src/services/swagger.yaml",
    },

    output: {
      mode: "tags-split",
      target: "./src/services/generated/api.ts",
      schemas: "./src/services/generated/model",
      client: "react-query",
      clean: true,

      override: {
        query: {
          version: 5,
        },

        mutator: {
          path: "./src/services/http.ts",
          name: "customFetch",
        },
      },
    },
  },
});
