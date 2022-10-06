import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";

import * as root from "./routes/index.ts";
import * as v1$music$current from "./routes/v1/music/current.ts";

serve({
  "/": root.onRequest,
  "/v1/music/current": v1$music$current.onRequest,
});