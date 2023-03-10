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
7) Dans le formulaire, mettre en place une vérification d'erreur (champs obligatoires, name de 5 caractères minimum, descriptionde 20 caractères minimum) sur chaque champ (affichage d'un message d'erreur + mise en avant du champ en question)
8) Compléter la `TeamCard` avec un élément clickable permettant, avec le libellé 'éditer', permettant de modifier l'équipe courante. Vous devrez utiliser le même formulaire que pour la création et rafraichir l'affichage de la `TeamCard` éditée
9) Créer une classe générique `ApiService` qui vous prmettra d'effectuer des appels API de type GET ou POST via des méthodes dédiées qui retourneront le résultat de la requête au format JSON
10) Créer une classe `NewsService` dans laquelle vous ferez un appel en GET à la route `https://newsapi.org/v2/everything`. Vous allez devoir récupérer les 5 articls les + récents, contenant le mot clé `esport`
uniquement dans le `title`.
11) Sur l'onglet HOME, récupérer les 5 derniers articles et afficher les grâce à un composant `NewsCard` qui affichera le `title` et le `publishedAt` au format '01/01/2000 15h20'

## News API

Afin d'utiliser l'API fournie par News API, vous allez devoir vous inscrire sur ce site : https://newsapi.org/
La documentation ccomplète de l'API est accessible ici : `https://newsapi.org/docs`