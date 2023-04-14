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
                                            'data-target="#components-links-module-AppModule-9d5fe072114c8d19e5ff3fbede981db2b599654649121e38b0b2166675969c2e0202d0cc10dd9522747d649c2022a068de17500868295bdf2893262aa259574f"' : 'data-target="#xs-components-links-module-AppModule-9d5fe072114c8d19e5ff3fbede981db2b599654649121e38b0b2166675969c2e0202d0cc10dd9522747d649c2022a068de17500868295bdf2893262aa259574f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9d5fe072114c8d19e5ff3fbede981db2b599654649121e38b0b2166675969c2e0202d0cc10dd9522747d649c2022a068de17500868295bdf2893262aa259574f"' :
                                            'id="xs-components-links-module-AppModule-9d5fe072114c8d19e5ff3fbede981db2b599654649121e38b0b2166675969c2e0202d0cc10dd9522747d649c2022a068de17500868295bdf2893262aa259574f"' }>
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
                                        'data-target="#injectables-links-module-CoreModule-6ac31a789113c141d667e36a3736ff71e3be516bcb3042930000eab170c294c0f063256adeb7f0a4c8a47deebf1d87d7ff865f1dd5b254e9fb7fff55913ac0fc"' : 'data-target="#xs-injectables-links-module-CoreModule-6ac31a789113c141d667e36a3736ff71e3be516bcb3042930000eab170c294c0f063256adeb7f0a4c8a47deebf1d87d7ff865f1dd5b254e9fb7fff55913ac0fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-6ac31a789113c141d667e36a3736ff71e3be516bcb3042930000eab170c294c0f063256adeb7f0a4c8a47deebf1d87d7ff865f1dd5b254e9fb7fff55913ac0fc"' :
                                        'id="xs-injectables-links-module-CoreModule-6ac31a789113c141d667e36a3736ff71e3be516bcb3042930000eab170c294c0f063256adeb7f0a4c8a47deebf1d87d7ff865f1dd5b254e9fb7fff55913ac0fc"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
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
                                            'data-target="#components-links-module-PageHomeModule-baf36056cabdf6387c1db15b75abcd5c3fedeaf04a6ff98fd33ccdb1b62b341f3358abc7d0227b7b2b787252c002bee262049faa4e849af1112ff25d2e6f85ce"' : 'data-target="#xs-components-links-module-PageHomeModule-baf36056cabdf6387c1db15b75abcd5c3fedeaf04a6ff98fd33ccdb1b62b341f3358abc7d0227b7b2b787252c002bee262049faa4e849af1112ff25d2e6f85ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageHomeModule-baf36056cabdf6387c1db15b75abcd5c3fedeaf04a6ff98fd33ccdb1b62b341f3358abc7d0227b7b2b787252c002bee262049faa4e849af1112ff25d2e6f85ce"' :
                                            'id="xs-components-links-module-PageHomeModule-baf36056cabdf6387c1db15b75abcd5c3fedeaf04a6ff98fd33ccdb1b62b341f3358abc7d0227b7b2b787252c002bee262049faa4e849af1112ff25d2e6f85ce"' }>
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
                                            'data-target="#components-links-module-PageLoginModule-aa1394ae04986a72e29ea708d41e17db6d27d9eae669edf42a7566e9019ce4791cee84d265da8e9b2e44bb6bc6af856cc57f55d31e16a0412fbe1fe489276758"' : 'data-target="#xs-components-links-module-PageLoginModule-aa1394ae04986a72e29ea708d41e17db6d27d9eae669edf42a7566e9019ce4791cee84d265da8e9b2e44bb6bc6af856cc57f55d31e16a0412fbe1fe489276758"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageLoginModule-aa1394ae04986a72e29ea708d41e17db6d27d9eae669edf42a7566e9019ce4791cee84d265da8e9b2e44bb6bc6af856cc57f55d31e16a0412fbe1fe489276758"' :
                                            'id="xs-components-links-module-PageLoginModule-aa1394ae04986a72e29ea708d41e17db6d27d9eae669edf42a7566e9019ce4791cee84d265da8e9b2e44bb6bc6af856cc57f55d31e16a0412fbe1fe489276758"' }>
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
                                            'data-target="#components-links-module-PageMessagesModule-3efffac64f689765052f6b64038560716de683edbc1dc1b061a2c86b4193a20e0d8ad01dd1d38e220a67f82e2c0b0d92ea46be25626c63fc1233174fcf700eec"' : 'data-target="#xs-components-links-module-PageMessagesModule-3efffac64f689765052f6b64038560716de683edbc1dc1b061a2c86b4193a20e0d8ad01dd1d38e220a67f82e2c0b0d92ea46be25626c63fc1233174fcf700eec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageMessagesModule-3efffac64f689765052f6b64038560716de683edbc1dc1b061a2c86b4193a20e0d8ad01dd1d38e220a67f82e2c0b0d92ea46be25626c63fc1233174fcf700eec"' :
                                            'id="xs-components-links-module-PageMessagesModule-3efffac64f689765052f6b64038560716de683edbc1dc1b061a2c86b4193a20e0d8ad01dd1d38e220a67f82e2c0b0d92ea46be25626c63fc1233174fcf700eec"' }>
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
                                            'data-target="#components-links-module-UiModule-2ddd4f95a3e2bbc1d373478f53086669373717e56665358cb2edca04a90ce3c27a222702680e61ef74a6e9c677a2744a90ecb2d11d71218ded6ff94ee3b82f1c"' : 'data-target="#xs-components-links-module-UiModule-2ddd4f95a3e2bbc1d373478f53086669373717e56665358cb2edca04a90ce3c27a222702680e61ef74a6e9c677a2744a90ecb2d11d71218ded6ff94ee3b82f1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-2ddd4f95a3e2bbc1d373478f53086669373717e56665358cb2edca04a90ce3c27a222702680e61ef74a6e9c677a2744a90ecb2d11d71218ded6ff94ee3b82f1c"' :
                                            'id="xs-components-links-module-UiModule-2ddd4f95a3e2bbc1d373478f53086669373717e56665358cb2edca04a90ce3c27a222702680e61ef74a6e9c677a2744a90ecb2d11d71218ded6ff94ee3b82f1c"' }>
                                            <li class="link">
                                                <a href="components/UiHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiNavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiNavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsModule.html" data-type="entity-link" >UtilsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UtilsModule-21bc8912e7a6a41ddec3eb74650b3acdd505daf5abecf8847aa2950dfa5983985c81b58613ddeae4fe8821961e510fe69161114b2ec835719a0094a03f466936"' : 'data-target="#xs-directives-links-module-UtilsModule-21bc8912e7a6a41ddec3eb74650b3acdd505daf5abecf8847aa2950dfa5983985c81b58613ddeae4fe8821961e510fe69161114b2ec835719a0094a03f466936"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UtilsModule-21bc8912e7a6a41ddec3eb74650b3acdd505daf5abecf8847aa2950dfa5983985c81b58613ddeae4fe8821961e510fe69161114b2ec835719a0094a03f466936"' :
                                        'id="xs-directives-links-module-UtilsModule-21bc8912e7a6a41ddec3eb74650b3acdd505daf5abecf8847aa2950dfa5983985c81b58613ddeae4fe8821961e510fe69161114b2ec835719a0094a03f466936"' }>
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
                                <a href="interfaces/BdlMessageCollection.html" data-type="entity-link" >BdlMessageCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BdlRoute.html" data-type="entity-link" >BdlRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BdlUser.html" data-type="entity-link" >BdlUser</a>
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