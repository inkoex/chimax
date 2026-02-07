import { createClient } from "@supabase/supabase-js";

const env = typeof process !== "undefined" ? process.env : {};
const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || "";

let warnedMissingConfig = false;

export function getSupabaseClient() {
    if (!supabaseUrl || !supabaseAnonKey) {
        if (!warnedMissingConfig) {
            console.warn("Supabase credentials missing. Check SUPABASE_URL and SUPABASE_ANON_KEY.");
            warnedMissingConfig = true;
        }

        return null;
    }

    return createClient(supabaseUrl, supabaseAnonKey);
}
