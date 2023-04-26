'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bdl-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0e93d861181ee79430f23a297db275cd02e47b5f47525786e15067c7e1d57c0f3a812de4081ba82bb56f5b77fd1d10d2004e945d7e26b146716424d8aa17575f"' : 'data-target="#xs-components-links-module-AppModule-0e93d861181ee79430f23a297db275cd02e47b5f47525786e15067c7e1d57c0f3a812de4081ba82bb56f5b77fd1d10d2004e945d7e26b146716424d8aa17575f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0e93d861181ee79430f23a297db275cd02e47b5f47525786e15067c7e1d57c0f3a812de4081ba82bb56f5b77fd1d10d2004e945d7e26b146716424d8aa17575f"' :
                                            'id="xs-components-links-module-AppModule-0e93d861181ee79430f23a297db275cd02e47b5f47525786e15067c7e1d57c0f3a812de4081ba82bb56f5b77fd1d10d2004e945d7e26b146716424d8aa17575f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-771cbf851af4218af889629b4912dbba2ea593f958c8a6ee8d39bc87971406ecf673ad7a600b41b272e65cc6ccae9a149921763ecf69cb29382fd14717d90c7d"' : 'data-target="#xs-injectables-links-module-CoreModule-771cbf851af4218af889629b4912dbba2ea593f958c8a6ee8d39bc87971406ecf673ad7a600b41b272e65cc6ccae9a149921763ecf69cb29382fd14717d90c7d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-771cbf851af4218af889629b4912dbba2ea593f958c8a6ee8d39bc87971406ecf673ad7a600b41b272e65cc6ccae9a149921763ecf69cb29382fd14717d90c7d"' :
                                        'id="xs-injectables-links-module-CoreModule-771cbf851af4218af889629b4912dbba2ea593f958c8a6ee8d39bc87971406ecf673ad7a600b41b272e65cc6ccae9a149921763ecf69cb29382fd14717d90c7d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgImportModule.html" data-type="entity-link" >NgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageHomeModule.html" data-type="entity-link" >PageHomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageHomeModule-49c2c9718e36fe9880170911a995c69a91b00325b350dd5f6d3a02f701377da34879cfcf59007c2be5a0edc803358610157865cd4820f63b25e2155fe3be864a"' : 'data-target="#xs-components-links-module-PageHomeModule-49c2c9718e36fe9880170911a995c69a91b00325b350dd5f6d3a02f701377da34879cfcf59007c2be5a0edc803358610157865cd4820f63b25e2155fe3be864a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageHomeModule-49c2c9718e36fe9880170911a995c69a91b00325b350dd5f6d3a02f701377da34879cfcf59007c2be5a0edc803358610157865cd4820f63b25e2155fe3be864a"' :
                                            'id="xs-components-links-module-PageHomeModule-49c2c9718e36fe9880170911a995c69a91b00325b350dd5f6d3a02f701377da34879cfcf59007c2be5a0edc803358610157865cd4820f63b25e2155fe3be864a"' }>
                                            <li class="link">
                                                <a href="components/PageHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageHomeRoutingModule.html" data-type="entity-link" >PageHomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageLoginModule.html" data-type="entity-link" >PageLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageLoginModule-f28a31fd3194b1908d44fb17ff4afb014ae0fb9d7d91d0067ee9d7609a2ef258672045edacf435b00d5e8c2128cc023ea467911c28a905868156670e34989b78"' : 'data-target="#xs-components-links-module-PageLoginModule-f28a31fd3194b1908d44fb17ff4afb014ae0fb9d7d91d0067ee9d7609a2ef258672045edacf435b00d5e8c2128cc023ea467911c28a905868156670e34989b78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageLoginModule-f28a31fd3194b1908d44fb17ff4afb014ae0fb9d7d91d0067ee9d7609a2ef258672045edacf435b00d5e8c2128cc023ea467911c28a905868156670e34989b78"' :
                                            'id="xs-components-links-module-PageLoginModule-f28a31fd3194b1908d44fb17ff4afb014ae0fb9d7d91d0067ee9d7609a2ef258672045edacf435b00d5e8c2128cc023ea467911c28a905868156670e34989b78"' }>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageLoginRoutingModule.html" data-type="entity-link" >PageLoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageMessagesModule.html" data-type="entity-link" >PageMessagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageMessagesModule-5e06e9ea73b3348f0f7510401d5bd4ee531c76ac72134dbe45200937187ff8f24a1657efbd172cca9d97b09d34e7b373a59eb22481245ed7a2932e1e58c23084"' : 'data-target="#xs-components-links-module-PageMessagesModule-5e06e9ea73b3348f0f7510401d5bd4ee531c76ac72134dbe45200937187ff8f24a1657efbd172cca9d97b09d34e7b373a59eb22481245ed7a2932e1e58c23084"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageMessagesModule-5e06e9ea73b3348f0f7510401d5bd4ee531c76ac72134dbe45200937187ff8f24a1657efbd172cca9d97b09d34e7b373a59eb22481245ed7a2932e1e58c23084"' :
                                            'id="xs-components-links-module-PageMessagesModule-5e06e9ea73b3348f0f7510401d5bd4ee531c76ac72134dbe45200937187ff8f24a1657efbd172cca9d97b09d34e7b373a59eb22481245ed7a2932e1e58c23084"' }>
                                            <li class="link">
                                                <a href="components/PageMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageMessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageMessagesRoutingModule.html" data-type="entity-link" >PageMessagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-b26f38f6d048dafcf38aa0067ee54cc2bedf4f4c83589c793c904b41e8beef4465a4baf6dfc1c82a1c6188f76953d1d06e433732918543a43e387db015c5d23b"' : 'data-target="#xs-components-links-module-UiModule-b26f38f6d048dafcf38aa0067ee54cc2bedf4f4c83589c793c904b41e8beef4465a4baf6dfc1c82a1c6188f76953d1d06e433732918543a43e387db015c5d23b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-b26f38f6d048dafcf38aa0067ee54cc2bedf4f4c83589c793c904b41e8beef4465a4baf6dfc1c82a1c6188f76953d1d06e433732918543a43e387db015c5d23b"' :
                                            'id="xs-components-links-module-UiModule-b26f38f6d048dafcf38aa0067ee54cc2bedf4f4c83589c793c904b41e8beef4465a4baf6dfc1c82a1c6188f76953d1d06e433732918543a43e387db015c5d23b"' }>
                                            <li class="link">
                                                <a href="components/UiHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiNavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiNavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiNotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiNotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsModule.html" data-type="entity-link" >UtilsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UtilsModule-39f2fc722ff17033a73819ca9431c25e4ccf2deb1f6ca4e64a0f8ccfe85b98bc97b5b82606cf9d4db5572b05387be7cb5b3fde5fdd04f976151ca6d23b180093"' : 'data-target="#xs-directives-links-module-UtilsModule-39f2fc722ff17033a73819ca9431c25e4ccf2deb1f6ca4e64a0f8ccfe85b98bc97b5b82606cf9d4db5572b05387be7cb5b3fde5fdd04f976151ca6d23b180093"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UtilsModule-39f2fc722ff17033a73819ca9431c25e4ccf2deb1f6ca4e64a0f8ccfe85b98bc97b5b82606cf9d4db5572b05387be7cb5b3fde5fdd04f976151ca6d23b180093"' :
                                        'id="xs-directives-links-module-UtilsModule-39f2fc722ff17033a73819ca9431c25e4ccf2deb1f6ca4e64a0f8ccfe85b98bc97b5b82606cf9d4db5572b05387be7cb5b3fde5fdd04f976151ca6d23b180093"' }>
                                        <li class="link">
                                            <a href="directives/RetractedDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RetractedDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UiImageEmphasisDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiImageEmphasisDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UiImageFallbackDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiImageFallbackDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BdlCredentials.html" data-type="entity-link" >BdlCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BdlMessage.html" data-type="entity-link" >BdlMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BdlNotification.html" data-type="entity-link" >BdlNotification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BdlRoute.html" data-type="entity-link" >BdlRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BdlUser.html" data-type="entity-link" >BdlUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReactiveService.html" data-type="entity-link" >ReactiveService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UiImageSize.html" data-type="entity-link" >UiImageSize</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});