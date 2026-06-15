export function onRequest(context: {
  request: Request;
  next: () => Response | Promise<Response>;
}): Response | Promise<Response>;
