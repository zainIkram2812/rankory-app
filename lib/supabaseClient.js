import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";

export const supabase = createClient(
  "https://havoovkiqctecintxuon.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhdm9vdmtpcWN0ZWNpbnR4dW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NTAyMDEsImV4cCI6MjA2ODMyNjIwMX0.G7bXfkjnS1ZWD-maMCmuGLYsezvI4Jx__yUlXiTfmS0"
);
