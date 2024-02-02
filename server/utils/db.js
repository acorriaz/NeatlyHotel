import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqbgthzlroeplhhywlst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxYmd0aHpscm9lcGxoaHl3bHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1OTU5MjUsImV4cCI6MjAyMjE3MTkyNX0.opkphl2pLEzLW2C7piUj9AzkOM14XrZGy9CgEH63R-4";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
