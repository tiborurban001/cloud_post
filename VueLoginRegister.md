# Vue Bevezetése (2.0.0)
` vue create postcloud-client ` 
### *Vue config menete*
- Please pick a preset: Manually select features
- ? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, Linter
- ? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
- ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
- ? Pick a linter / formatter config: Basic
- ? Pick additional lint features: Lint on save
- ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
- ? Save this as a preset for future projects? (y/N)   
### node.sass letöltése (a saját kódnyelvünket átfordítja CSS-re)
` npm i node-sass `   
` npm run serve ` a dev mode server elindítás
### A fölösleges scriptek,stylesheetek,views-ek törlése
### majd a Login component route létrehozása és komponens csatolás
- ` import Login from '../views/Login.vue' `   
- ` { `
- `   path: '/login', `
- `    name: 'login', `
- `    component: Login `
- `  },`        
- **Ugyanez a Signup-component-tel** 
### Meta data hozzáadása a routhes-ban
- ` meta: { `
- `      requiresAuth: true `
- `    }` 
- Authorizáció kell a belépőnek hogy a Home page-re lépjen(minden máshol false)
## A Router működésének átalakítása
- ` let router átalakítás`
- aztán auth alapján (van e jwt token vagy nincs loginnál) redirecting 
- `  router.beforeEach((to, from, next) => { `
- `   if  (to.matched.some(record => record.meta.requiresAuth)) { `
- `     if(localStorage.getItem('jwt') == null){ `
- `       next({ `
- `         path: '/login', `
- `         params: {nextUrl: to.fullPath} `
- `       }) `
- `     }else{ `
- `       console.log('Logged in') `
- `       next(); `
- `   } `
- ` }else{ `
- `   console.log("Doesn't require authorization") `
- `   next(); `
- ` } `
- ` }) `

