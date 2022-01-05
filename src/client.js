import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://odwktzzsavnqiynhzjwu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTM2NzIxNiwiZXhwIjoxOTU2OTQzMjE2fQ.tdlfCS5kJQGeclsLV0MJjT7cg19o_JgqTJ5O_v41ICQ"
);

export { supabase };
