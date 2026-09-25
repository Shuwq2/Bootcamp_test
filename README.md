# Projet transversal F1 — Python → Java → JavaScript

Pack complet : énoncé, données, squelettes, tests, extensions et corrigés.

```
ENONCE.md                    l'énoncé étudiant (à lire en premier)
donnees/resultats.csv        l'export brut du championnat
01-python/ingestion.ipynb    maillon 1 — 

temps_en_secondes : On vérifie d'abord si la valeur est vide ou constituée d'espaces (en appliquant strip sur le paramètre texte pour éliminer les caractères invisibles). Si c'est le cas, on retourne None. On découpe ensuite la chaîne avec texte.split(':') pour isoler minutes et secondes. On calcule le total en secondes en convertissant les minutes via int et les secondes via float, puis la valeur est renvoyée via round(total_secondes, 3) pour garder 3 décimales. En cas de ValueError ou de toute autre Exception, la fonction renvoie également None.

lire_resultats : Cette fonction traite un fichier CSV de résultats en ignorant la ligne d'en-tête et en s'ajustant toute seule au séparateur. Les informations de chaque pilote y sont extraites et nettoyées : le chronomètre est converti, et la position est forcée à 0 lors d'un abandon. Elle restitue au final l'ensemble de ces données sous forme d'une liste de dictionnaires, directement exploitable en Python.

ecrire_courses_propres : Cette fonction produit un fichier CSV finalisé en inscrivant la ligne d'en-tête en premier lieu. Elle parcourt ensuite les données grâce à une boucle pour rédiger chaque ligne à l'aide de f.write(). Le formatage du chrono avec 3 décimales est assuré de façon élégante par l'utilisation de f-strings.

02-java/src/                 maillon 2 — 

pointsPourPosition
Cette méthode permet de déterminer le nombre de points gagnés selon le classement d'un pilote. Une condition if vérifie d'abord si la position se situe dans le Top 10 (comprise entre 1 et 10). Si c'est le cas, elle récupère le score correspondant dans le tableau BAREME. L'index utilisé est position - 1 afin de compenser le fait que les tableaux commencent à l'indice 0 en Java (la 1ère place correspond à l'index 0). Si le pilote est classé au-delà de la 10ème place ou n'a pas terminé, la méthode retourne la valeur par défaut 0.

classementPilotes
Pour consolider les statistiques, une HashMap fait correspondre l'identité de chaque pilote à un objet Resultat. Une boucle for se charge d'additionner les points et les podiums accumulés durant la saison. Ces données sont par la suite extraites vers une ArrayList pour y être ordonnées avec la fonction sort(). Le tri est géré par un comparateur spécifique, rédigé sous la forme d'une expression lambda, qui classe les concurrents selon l'ordre décroissant de leurs points, suivi du nombre de victoires, des deuxièmes places, pour finir par un tri alphabétique en cas d'égalité

classementEcuries
Ce traitement s'appuie sur un principe d'agrégation similaire, à la différence que la clé de la HashMap est ici le nom de l'équipe. Une boucle se charge de cumuler les points et les victoires obtenus par les pilotes d'une même écurie. Pour ordonner la liste finale, on retrouve la méthode sort() couplée à une expression lambda équivalente, assurant ainsi des critères de classement strictement identiques à ceux des pilotes.



03-js/                       maillon 3 — app.js à compléter, index.html à ouvrir
secours/                     résultats de référence, en cas de blocage
extensions/E1 à E4           les extensions et leurs tests
formateur/                   corrigés, grille, générateur — À RETIRER avant distribution
```

Prérequis : Python 3 avec Jupyter, un JDK (`javac -version`), un navigateur.
