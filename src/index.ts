import pino from "pino"

export default {
  async fetch(request, env, ctx): Promise<Response> {
    console.log("pino.symbols", pino.symbols) // got undefined

    return new Response("Hello World!")
  },
} satisfies ExportedHandler
