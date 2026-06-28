Test technique pour seconde

sans IA: docker - nest - react - prisma - pstgSQL - 

tt_seconde/
    app/
    back/
    dc.yml
    .env
    Rm.md


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
npm install @prisma/client @prisma/adapter-pg pg
```

Puis pour initialiser la db :
npx prisma migrate dev --name init
npx prisma generate

---
avec nest cli on peut utiliser des commandes pour simplifier lecriture du CRUD et du controller :
nest g controller [nom], ici short-url.
pour le CRUD en entier : nest g resource short-url

---
je me suis servi de claude pour fix un bug, que je comprenais mal : 
Prisma 7's prisma-client generator lisait tsconfig.json:module: "nodenext" et déduisait à tort que le projet était en ESM, générant du code source ESM (import.meta.url, import/export) incompatible avec le reste du projet CommonJS. Node chargeait ce fichier .js compilé en contexte CommonJS et plantait (ReferenceError: exports is not defined in ES module scope).

Honnêtement je sais pas comment j'aurais fait sans...




source :
- https://notiz.dev/blog/how-to-connect-nestjs-with-prisma
- https://medium.com/@abhijariwala/dockerizing-a-next-js-and-node-js-app-with-postgresql-and-prisma-a-complete-guide-000527023e99
- https://www.prisma.io/docs/guides/frameworks/nestjs
