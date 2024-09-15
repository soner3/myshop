# ShopZilla

An Online Shop as a final coding project for my course

## Start the Project

To start the project you have to run the following commands in the Terminal

1. npm run install
2. npm run build
3. npm run start

Error Handling:

1. Make sure you are in the correct folder in your Terminal. The path should have shopzilla in the end ---> "..../shopzilla"
2. Make sure you have node.js installed on your device:
   2.1 this means you should be able to run "node -v" and "npm -v" in your terminal

## Application Error

If your Internet Connection is bad you get an error like this:
"TypeError: fetch failed
at node:internal/deps/undici/undici:12502:13
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
at async fetchExternalImage (/home/soner/Web-Project/shopzilla/node_modules/next/dist/server/image-optimizer.js:582:17)
at async NextNodeServer.imageOptimizer (/home/soner/Web-Project/shopzilla/node_modules/next/dist/server/next-server.js:649:48)
at async cacheEntry.imageResponseCache.get.incrementalCache (/home/soner/Web-Project/shopzilla/node_modules/next/dist/server/next-server.js:182:65)
at async /home/soner/Web-Project/shopzilla/node_modules/next/dist/server/response-cache/index.js:90:36
at async /home/soner/Web-Project/shopzilla/node_modules/next/dist/lib/batcher.js:45:32 {
[cause]: ConnectTimeoutError: Connect Timeout Error
at onConnectTimeout (node:internal/deps/undici/undici:6635:28)
at node:internal/deps/undici/undici:6587:50
at Immediate.\_onImmediate (node:internal/deps/undici/undici:6619:13)
at process.processImmediate (node:internal/timers:478:21)
at process.callbackTrampoline (node:internal/async_hooks:130:17) {
code: 'UND_ERR_CONNECT_TIMEOUT'
}"

This means that the request took to much time. This error is most likely to occure at the images. If an image is not loading it means that the request needed to much time to process due to ypur internet connection.

## Data

All Data including images comes from "https://dummyjson.com/docs/products".
It also allows mutations like updating and adding a product at the given endpoints
