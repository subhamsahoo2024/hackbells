function readEnv(value: string | undefined) {
  return value?.trim() ?? "";
}

export const env = {
  appUrl: readEnv(import.meta.env.VITE_APP_URL),
  supabaseUrl: readEnv(import.meta.env.VITE_SUPABASE_URL),
  supabaseAnonKey: readEnv(import.meta.env.VITE_SUPABASE_ANON_KEY),
  geminiApiKey: readEnv(import.meta.env.VITE_GEMINI_API_KEY),
  codingGeminiApiKey: readEnv(import.meta.env.VITE_GEMINI_API_KEY_CODING),
  hrGeminiApiKey: readEnv(import.meta.env.VITE_GEMINI_API_KEY_HR),
  hrGroqApiKey: readEnv(import.meta.env.VITE_GROQ_API_KEY_HR),
  groupDiscussionGroqApiKey: readEnv(import.meta.env.VITE_GROQ_API_KEY_GD),
  jdoodleClientId: readEnv(import.meta.env.VITE_JDOODLE_CLIENT_ID),
  jdoodleClientSecret: readEnv(import.meta.env.VITE_JDOODLE_CLIENT_SECRET),
};

export function requireEnv(name: string, value: string) {
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to .env and restart the Vite dev server.`,
    );
  }

  return value;
}
