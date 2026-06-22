Test technique pour seconde

sans IA: docker - nest - react - prisma - pstgSQL - 


je pars sur 3 image, pour separer front back et data

---
partie front

npx create-react-app frontend --template react-ts

on passe par vite car CRA n'est meme plus maintenu, et vite est standard maintenant.

avec vite on lance avec npx vite dev
--port et --host sont important

---
partie back

jai installé nestjs
npm i -g @nestjs/cli

petit bug de mes packages npm qui se stock au mauvais endroit (.../.hermes/...)

il y avait la methode 1 coup :
nest add nestjs-prisma
mais bug.

Soluce 2:
nest new back
puis ajout de prisma a la mano :
```
npm install prisma --save-dev
npx prisma init

npm install @prisma/client
```


source :
https://notiz.dev/blog/how-to-connect-nestjs-with-prisma
