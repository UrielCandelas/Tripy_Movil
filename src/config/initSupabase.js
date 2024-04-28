import { createClient } from "@supabase/supabase-js";

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
// const email = process.env.EXPO_PUBLIC_SUPABASE_EMAIL;
// const password = process.env.EXPO_PUBLIC_SUPABASE_PASSWORD;

const supabase = createClient(url, key);

export default supabase;
