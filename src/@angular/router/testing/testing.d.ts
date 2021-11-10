/**
 * @license Angular v12.0.5
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */

import { ChildrenOutletContexts } from '@angular/router';
import { Compiler } from '@angular/core';
import { ExtraOptions } from '@angular/router';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { NgModuleFactoryLoader } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { UrlHandlingStrategy } from '@angular/router';
import { UrlSerializer } from '@angular/router';

/**
 * @description
 *
 * Sets up the router to be used for testing.
 *
 * The modules sets up the router to be used for testing.
 * It provides spy implementations of `Location`, `LocationStrategy`, and {@link
 * NgModuleFactoryLoader}.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * beforeEach(() => {
 *   TestBed.configureTestingModule({
 *     imports: [
 *       RouterTestingModule.withRoutes(
 *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}]
 *       )
 *     ]
 *   });
 * });
 * ```
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
export declare class RouterTestingModule {
    static withRoutes(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterTestingModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<RouterTestingModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<RouterTestingModule, never, never, [typeof ɵngcc1.RouterModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<RouterTestingModule>;
}

/**
 * Router setup factory function used for testing.
 *
 * @publicApi
 */
export declare function setupTestingRouter(urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, loader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, routes: Route[][], opts?: ExtraOptions, urlHandlingStrategy?: UrlHandlingStrategy): Router;

/**
 * Router setup factory function used for testing.
 *
 * @deprecated As of v5.2. The 2nd-to-last argument should be `ExtraOptions`, not
 * `UrlHandlingStrategy`
 * @publicApi
 */
export declare function setupTestingRouter(urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, loader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, routes: Route[][], urlHandlingStrategy?: UrlHandlingStrategy): Router;

/**
 * @description
 *
 * Allows to simulate the loading of ng modules in tests.
 *
 * ```
 * const loader = TestBed.inject(NgModuleFactoryLoader);
 *
 * @Component({template: 'lazy-loaded'})
 * class LazyLoadedComponent {}
 * @NgModule({
 *   declarations: [LazyLoadedComponent],
 *   imports: [RouterModule.forChild([{path: 'loaded', component: LazyLoadedComponent}])]
 * })
 *
 * class LoadedModule {}
 *
 * // sets up stubbedModules
 * loader.stubbedModules = {lazyModule: LoadedModule};
 *
 * router.resetConfig([
 *   {path: 'lazy', loadChildren: 'lazyModule'},
 * ]);
 *
 * router.navigateByUrl('/lazy/loaded');
 * ```
 *
 * @publicApi
 */
export declare class SpyNgModuleFactoryLoader implements NgModuleFactoryLoader {
    private compiler;
    /**
     * @docsNotRequired
     */
    private _stubbedModules;
    /**
     * @docsNotRequired
     */
    set stubbedModules(modules: {
        [path: string]: any;
    });
    /**
     * @docsNotRequired
     */
    get stubbedModules(): {
        [path: string]: any;
    };
    constructor(compiler: Compiler);
    load(path: string): Promise<NgModuleFactory<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SpyNgModuleFactoryLoader, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<SpyNgModuleFactoryLoader>;
}

export { }

//# sourceMappingURL=testing.d.ts.map