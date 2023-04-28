
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

**Décorateurs TypeScript**
> Les décorateurs ou annotations sont de fonctions appliquées sur le code qu'elles précèdent.

*Les décorateurs Angular sont aux nombre de **19***


**Création**
* `@NgModule`      
* `@Component` 
* `@Pipe`   
* `@Directive`
* `@Injectable`  

**Communication**
* `@Attribute`
* `@Input`
* `@Output`  
* `@ViewChild`
* `@ViewChildren`
* `@ContentChild`
* `@ContentChildren`
* `@HostBinding`
* `@HostListener`

**Injection**
* `@Inject`
* `@Optional`
* `@Host`
* `@Self`
* `@SkipSelf`

# Angular Test Unitaire

> `ng test --project=PROJECT_NAME`

* `*.spec.ts`

**Etape d'un test.**

* `describe`
* `beforeEach`
* `afterEach`
* `it`

**Utilitaires Angular**

* `TestBed.configureTestingModule`
* `fixture` - Wrapper utilitaire
* `component` - intance


# Angular Component : Template

> (DSL) angular propose des expressions spécifique pour lier (`binding`) le code j'avascript d'un composant au template HTML de celui-ci.

```html

<!-- Liaison Textuelle -->
{{ expressionAsString }}

<!-- Valorisation Attribut -->
<element [attributeName]="expressionAsValue"></element>

<!-- Evenement -->
<element (eventName)="expressionAsFunction"></element>

<!-- Directive : enrichissment -->
<ul>
    <li *ngFor="let value of collectionValue">{{value}}</li>
</ul>

<!-- Pipe : transformation -->
{{ objectValue | json }}

<ng-container></ng-container>

<ng-container [ngTemplateOutlet]="templateName"></ng-container>

<ng-container [ngComponentOutlet]="expr"></ng-container>

<ng-template #templateName></ng-template>

```
