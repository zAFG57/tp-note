## Conseils/Consignes

- Le projet peut être réalisé par 2 au maximum
- Le travail devra être rendu via un repo GIT de votre choix (github ou codefirst)
- Le projet sera réalisé en vueJS
- Pensez composant : on découpe la page en composant, chacun ayant UNE responsabilité
- À chaque modification du sujets, pensez à regarder TOUTES les modifications qui peuvent vous donner des idées, indices, solutions etc...

## Sujet du TP

1) Créer une classe `LinkService`, ayant pour méthode `getLinks()` qui retourne un tableau de { `id(int)`, `label(string)`, `link(string)` }
2) Créer un composant `Navbar` qui affichera une liste de lien : un lien Home et un lien pour chaque élément retourné par la méthode `getLinks`
3) Dans la classe `LinkService` ajoutez la méthode `getLink(id)` qui retourne le lien avec l'ID passé en paramètre
4) Au clic sur chaque lien, le H1 de la page devra afficher le libellé du lien cliqué
