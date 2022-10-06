import { json } from "https://deno.land/x/sift@0.6.0/mod.ts";

export async function onRequest() {
  return json({ ok: true }, { status: 200 });
}