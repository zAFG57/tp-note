## Conseils/Consignes

- Le projet peut être réalisé par 2 au maximum
- Le travail devra être rendu via un repo GIT de votre choix (github ou codefirst)
- Le projet sera réalisé en vueJS
- Pensez composant : on découpe la page en composant, chacun ayant UNE responsabilité
- À chaque modification du sujets, pensez à regarder TOUTES les modifications qui peuvent vous donner des idées, indices, solutions etc...

## Sujet du TP

1) Créer une classe `LinkService`, ayant pour méthode `getLinks()` qui retourne un tableau de { `id(int)`, `label(string)`, `link(string)` }
2) Créer un composant `Navbar` qui affichera une liste de lien : un lien Home et un lien pour chaque élément retourné par la méthode `getLinks` (le routing en VueJS n'ayant pas été vu, vous pouvez utiliser des liens sous la forme `http:localhost:3000#link`)
3) Dans la classe `LinkService` ajoutez la méthode `getLink(url)` qui retourne le lien avec l'URL passée en paramètre
4) Au clic sur chaque lien, le H1 de la page devra afficher le libellé du lien cliqué

## Bonus

1) Mette en place un routing propre grâc à VueJS (doc : https://router.vuejs.org/)
