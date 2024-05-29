declare global {
  interface Window {
    ENV: {
      SANITY_STUDIO_PROJECT_ID: string;
      SANITY_STUDIO_DATASET: string;
      SANITY_STUDIO_URL: string;
      SANITY_STUDIO_STEGA_ENABLED: string;
    };
  }
}

const {
  SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_URL = "http://localhost:3333",
  SANITY_STUDIO_STEGA_ENABLED = "false",
} = typeof document === "undefined"
  ? {
      SANITY_STUDIO_PROJECT_ID: "pfnv96lh",
      SANITY_STUDIO_DATASET: "main",
      SANITY_STUDIO_URL: "http://localhost:3333",
      SANITY_STUDIO_STEGA_ENABLED: "false",
    }
  : window.ENV;

export const projectId = SANITY_STUDIO_PROJECT_ID!;
export const dataset = SANITY_STUDIO_DATASET!;
export const studioUrl = SANITY_STUDIO_URL!;
export const stegaEnabled = SANITY_STUDIO_STEGA_ENABLED === "true";

// if (!projectId) throw new Error("Missing SANITY_STUDIO_PROJECT_ID in .env");
// if (!dataset) throw new Error("Missing SANITY_STUDIO_DATASET in .env");
// if (!studioUrl) throw new Error("Missing SANITY_STUDIO_URL in .env");
// if (!stegaEnabled)
//   throw new Error(`Missing SANITY_STUDIO_STEGA_ENABLED in .env`);
