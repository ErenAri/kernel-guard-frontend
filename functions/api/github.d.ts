export function onRequest(context: {
  request: Request;
  env: Record<string, string | undefined>;
}): Promise<Response>;
