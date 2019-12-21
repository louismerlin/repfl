async function handleRequest(request) {
  const init = {
    headers: {
      'Access-Control-Allow-Origin': '*',

    },
  }
  const url = new URL(request.url)
  const apiurl = url.searchParams.get('apiurl') || "https://duckduckgo.com"
  const response = await fetch(apiurl)
  const { headers } = response
  const contentType = headers.get('content-type')
  if (contentType.includes('application/json')) {
    result = await response.json()
  } else if (contentType.includes('application/text')) {
    result = await response.text()
  } else if (contentType.includes('text/html')) {
    result = await response.text()
  } else {
    result = await response.text()
  }
  return new Response(result, init)
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})
