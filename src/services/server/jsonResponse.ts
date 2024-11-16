export function jsonResponse(response: object, options: ResponseInit) {
  return new Response(JSON.stringify(response), options)
}
