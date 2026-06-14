const APEX_HOST = 'kernelguard.net';
const CANONICAL_HOST = 'www.kernelguard.net';

export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname.toLowerCase() === APEX_HOST) {
    url.protocol = 'https:';
    url.host = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
