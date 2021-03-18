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

## config létrehozása
- config/index.js portolás,stb..
- létrehozunk egy objectet amit tele töltünk a konfiguráció elemeivel.
- ` module.exports = {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cloudpost',
    secret: process.env.SECRET || 'SzakmaiVizsga'
} `
- Így a helyi portunkra, a Mongo adatbázishoz is tud csatlakozni \
valamint jelszót adtunk meg neki


