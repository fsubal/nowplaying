import {
  json,
  validateRequest,
} from "https://deno.land/x/sift@0.6.0/mod.ts";

import * as spotify from '../../../domains/spotify.ts'

export async function onRequest(request: Request) {
  const { error } = await validateRequest(request, {
    GET: {},
  });
  if (error) {
    // validateRequest() generates appropriate error and status code when
    // the request isn't valid. We return that information in a format that's
    // appropriate for Slack but there's a good chance that we will not
    // encounter this error if the request is actually coming from Slack.
    return json(
      { message: "Not allowed" },
      { status: error.status },
    );
  }

  return json(
    {
      song: await spotify.getCurrentPlayingSong(),
    },
    { status: 200 },
  );
}