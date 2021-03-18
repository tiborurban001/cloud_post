# cloud_post

### A programhoz szükséges package, modulok injectálása
1. `npm init`
2. `npm i express jsonwebtoken mongoose dotenv bcrypt`
- jsonwebtoken (Authentikációra)
- mongoose (A MongoDB adatbázis kapcsolatra)
- dotenv (hozzáférés)
- bcrypt (jelszó hashaléshez(sózás))
3. `npm i -D nodeman` 
- nodeman segít futtatni a surfer és front end application-t külön

## server.js, package-k "élesítése"
1. *Express*
- `const express = require('express');`
- `const app = express();`
