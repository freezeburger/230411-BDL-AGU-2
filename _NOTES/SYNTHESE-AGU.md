
# Angular CLI

> Outil de productivité en ligne de commande pour Angular.

L'`@angular/cli` est basé sur NodeJS.

**Installation** 

`npm i -g @angular/cli`

`npm install --global @angular/cli`


**Créer un workspace** 
`ng new WORKSPACE_NAME`

**Utilisation de schematics** 

Les schematics sont des modèles de génération de code.

`ng generate SCHEMATIC PATH/NAME [OPTIONS]`

Exemples:

```
ng generate component PATH/COMPONENT_NAME
ng g c PATH/COMPONENT_NAME

ng g s PATH/SERVICE_NAME

ng g p PATH/PIPE_NAME

ng g d PATH/DIRECTIVE_NAME

ng g m PATH/MODULE_NAME

ng g i PATH/INTERFACE_NAME
ng g g PATH/GUARD_NAME
```

# Angular Framework

> 5 concepts fondamentaux.

* Modules       - Organisation (Component, Pipe, Directive...)
    * Component - Unité de la vue ( HTML/CSS/JS en TS)
    * Pipe      - Règle de transformation (Transformation avant affichage)
    * Directive - Enrichissement (du code HTML).
* Services      - Logique pure utilisable (par injection)

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
* `@Input`
* `@Output`  
* `@ViewChild`
* `@HostBinding`
* `@HostListener`

**Innjection**
* `@Inject`
* `@Host`

# Angular Observable

> Les observables sont une implémentation de l'Observer Pattern (https://refactoring.guru/fr/design-patterns/observer) apportée par `rxjs`

Une function consommatrice (`observer`) souscrit (`subscribe`) à une source `Observable`.

*Observable dans Angular*

```ts
// EventEmitter hérite de Subject depuis rxjs
@Output() public action = new EventEmitter();

```


# Angular Component

> Un composant est la réunion **par Angular** de HTML / CSS / TS.

```ts
// Le décorateur ou annotation @Component enregistre au szin d'Angular la définition du composant.
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class HomeComponent {
}

```


# Angular Component : Communication

> La communication entre composant est l'écahnge de contenu, signal ou valeurs.

1. Projection de contenu : 
    * Par la création d'un cible de réception avec `ng-content` (https://angular.io/guide/content-projection)
2. Echnage de donnés via un service de médiation.
3. Communication Parent > Enfant
    * `@Input`
4. Communication Enfant > Parent
    * `@Output`



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

```


# Angular Module

> Les modules Angular ou `NgMmodule` sont un moyen d'organisation du code par modularisation.

* Décorateur `@NgMmodule`
* Un `@NgMmodule` déclare des `@Component, @Pipe, @Directive` (qui ne peuvent exister que dans ce module)
* Un `@NgMmodule` peut fournir (*provide*) des service `@Injectable`
* Les modules possède une macanique d'import/export
* **Un module peut importer**
    * Des modules
    * Parfois des `@Component, @Pipe, @Directive` standalone.
* **Un module peut exporter** ce qu'il déclare ou d'autre modules (ré export)


```ts


@NgModule({
  declarations: [
    // Component Pipe Directive
  ],
  imports: [
    // Modules
    // OU des standalone : Component Pipe Directive
    // LES IMPORTS SERVENT AUX DECLARATIONS
  ],
  exports: [
    // Modules
    // OU des standalone : Component Pipe Directive
    // Déclarations Component Pipe Directive
  ],
  providers: [
    // Service
  ],
})
export class AppModule { }
```