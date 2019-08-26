/* eslint-env serviceworker */

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v7').then(cache => {
      return cache.addAll([
        '/'
      ])
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {

    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined && response.type === 'basic') {
      return response
    } else {
      return fetch(event.request).then(response => {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        const responseClone = response.clone()

        caches.open('v7').then(cache => {
          cache.put(event.request, responseClone)
        })
        return response
      })
    }
  }))
})
