# ShopZilla

Ein Online-Shop als Abschlussprojekt meines Kurses

## Projekt starten

Um das Projekt zu starten, musst du folgende Befehle im Terminal ausführen:

1. `npm install`
2. `npm run build`
3. `npm run start`

### Alternative

Als Alternative kann man die Anwendung auch mit Docker starten.

Falls Sie Makefile Befehle ausführen können tuen sie folgendes im Terminal:

1. `make build`
2. `make run`

Wenn Sie Makefile Befehle nicht ausführen können tuen sie bitte folgendes im Terminal:

1. `docker build -t myshop .`
2. `docker run --rm -p 3000:3000 myshop`

Fehlerbehandlung:

1. Stelle sicher, dass du dich im richtigen Ordner im Terminal befindest. Der Pfad sollte mit `shopzilla` enden ---> „..../shopzilla“
2. Stelle sicher, dass Node.js auf deinem Gerät installiert ist:
   2.1. Das bedeutet, dass du in deinem Terminal die Befehle `node -v` und `npm -v` ausführen kannst.

## Application

Der Quellcode der gesamten Application ist im 'src' Ordner.

Der Ordner besteht aus folgenden Ordnern und einer Datei

Info: Sämtliche HTML Entitätszeichen sind nicht gegoogelt oder von woanders. ESLint von Next.js
überprüft den text in den HTML-Tags und gibt an, dass das Zeichen mit den HTML-Entitäten ersetzt werden sollen.

1. app
2. components
3. data
4. lib
5. ui
6. interfaces.ts

### app

Das ist der Ordner der die ganze Anwendung enthält. Alle anderen Ordner und die Interface.ts Datei enthalten Komponenten, Typen oder Methoden, die in dem Ordner verwendet werden.
Alle Seiten enthalten eine page.tsx Datei in der wird die Seite geschreiben und die Komponenten von den anderen Ordnern importiert. Der App Ordner hat und einige andere Ordner haben eine layout.tsx in der das Layout für den Teil der Seite vorgegeben wird.

Mehr Informationen zum App Router von Next.js finden sie unter: https://nextjs.org/docs/app/building-your-application/routing

Sämtliche Bilder und andere Datei Namen sind File Conventions die von Next.js erkannt werden. Außnahme ist hierbei StoreProvider.tsx die für Redux ist.

Mehr Informationen im Doc: https://nextjs.org/docs/getting-started/project-structure#metadata-file-conventions

### Dokumentation

Demnach ist die Dokumentation für das Projekt in den Page.tsx, Layout.tsx und der StoreProvider.tsx Datei im App Ordner und seinen unter Ordnern.

Nicht selbsterklärende Komponenten sind auch dokumentiert.

## Anwendungsfehler

Wenn Ihre Internetverbindung schlecht ist, erhalten Sie einen Fehler wie diesen:

```
TypeError: fetch failed
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
at Immediate._onImmediate (node:internal/deps/undici/undici:6619:13)
at process.processImmediate (node:internal/timers:478:21)
at process.callbackTrampoline (node:internal/async_hooks:130:17) {
code: 'UND_ERR_CONNECT_TIMEOUT'
}
```

Das bedeutet, dass die Anfrage zu viel Zeit in Anspruch genommen hat. Dieser Fehler tritt bei den Bildern auf. Wenn die request zu lange braucht erhält man einen Timeout error. Infolgedessen erhält man das angefragte Bild nicht. Überprüfen sie deshalb ihre Internetverbindung.

## Daten

Alle Daten, einschließlich der Bilder, stammen von „https://dummyjson.com/docs/products“.
INFO: Einige Bilder haben eine niedrige Qualität oder sind außerhalb des Rahmens.
