
# Angular 

# Goals

* Composant réutilisable
* Eviter la duplication
* Utiliser des services communication
* Séparer en composant
* Modulariser l'application (avec une nature )
* SRP Composant
* Identifier les communs (core/shared)
* Décrire le code via les interfaces TS
    * Conserver une source de vérité par concept
    * Utilser un convetion de nommage représentant un espacede nom
* Minimiser l'exposition des services
* Alléger le code des composant
    * Utiliser des Directives
    * Utiliser des Pipe
    * Limiter les Injections
    * Utiliser le pipe Acync
* Reactive Programming


# Angular Library

> Un `NgModule` n'appartenant à aucune application spécifique.

**Création de projet**
`ng g lib LIB_NAME --prefix=PREFIX`

**Création d'élémént**
`ng g SCHEMATICS  PATH/NAME [OPTIONS] --project=LIB_NAME`

**Avantages**

* Créer du code réutilisable ( entre projet)
* Alléger la responsabilité ( du code ) des applications.

# Tips
* Utiliser les librairies pour isoler le développement de composant.
* Utiliser les `InjectionToken` pour créer du couplage lache.
* Utiliser `ng-content` pour simplifier la transmission de contenu. 
* Penser  - Reactive Programming.

