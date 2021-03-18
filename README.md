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
- ` module.exports = { ` \
   ` port: process.env.PORT || 3000, ` \
   ` mongo_uri: process.env.MONGO_URI || 'mongodb://  127.0.0.1:27017/cloudpost', ` \
    `secret: process.env.SECRET || 'SzakmaiVizsga' 
} ` 
- Így a helyi portunkra, a Mongo adatbázishoz is tud csatlakozni \
valamint jelszót adtunk meg neki
- majd a **server.js**-ben meghívjuk a configot
` const config = require('./config'); ` 

## elindítjuk az appot a megadott porton
### server.js       
- `app.listen( ` \
      `  config.port, ` \
      `  console.log('A Szerver elindult a Port: %s',config.port) ` \
      `  ); `
- ahhoz hogy beindítsuk ki kell törölnünk a **package.json**-ból a script tartalmát
- beleílleszük a ` "dev": "nodemon server.js"` -t
- ezzel azt érjük el hogy a node surfer-t a nodemon mindig újra indítja változtatásoknál így élőben tudjuk tesztelni.

- kiadjuk a `npm run dev` parancsot a konzolba(cmd)
- Az eredmény: 
![](./ReadMePics/npmrundevtest.png)
A gond csak az hogyha el szeretnénk a böngészőben érni ezt a címet
nem tudjuk mert még nem adtuk meg a **routeokat**  
( Cannot GET \ )

# Authentication SETUP
- létrehozzuk a adatbázis config fájlt **database.js**
- behívjuk a mongoose package-t: \
`const mongoose = require('mongoose');`
- **index.js** elérés: \
`const config = require('./index.js');`
- csatlakoztatjuk az adatbázist: \
`const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true}).then(() => console.log('Adatbázishoz csatlakozva'));`
- exportáljuk az adatbázist: \
` module.exports = db; `











