## Conseils/Consignes

- Le projet peut être réalisé par 2 au maximum
- Le travail devra être rendu via un repo GIT de votre choix
- Le projet sera réalisé en vueJS
- Pensez composant : on découpe la page en composant, chacun ayant UNE responsabilité
- À chaque modification du repo, pensez à regarder TOUTES les modifications qui peuvent vous donner des idées, indices, solutions etc...

## Sujet du TP

1) Créer une classe `LinkService`, ayant pour méthode `getLinks` qui retourne un tableau de `String`
2) Créer un composant `Navbar` qui affichera une liste de lien : un lien Home, un lien "Teams", un lien "Results"
3) Au clic sur le lien "Teams", ouvrir un onglet contenant un formulaire pour ajouter une Team { id, name }. Le résultat sera affiché dans la console
4) Créer un composant `TeamCard` permettant d'afficher une équipe et l'utiliser pour l'affichage des équipes créées
5) Enrichir une Team avec le champ `description` qui sera à saisir dans le formulaire et à afficher dans le détail d'une Team (composant `TeamCard`)
6) Afficher que les 20 premiers caractères de la `description` dans la `TeamCard`
7) Dans le formulaire, mettre en place une vérification d'erreur (champs obligatoire, titre de 5 caractères, descriptionde 20 caractères) sur chaque champ (affichage d'un message d'erreur + mise en avant du champ en question)