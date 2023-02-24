import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CommonRegistrationService {
    constructor() { }
}
CommonRegistrationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonRegistrationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonRegistrationComponent {
}
CommonRegistrationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CommonRegistrationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: CommonRegistrationComponent, selector: "common-registration", ngImport: i0, template: ` <p>common-registration works! LERNAAA!!</p> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'common-registration', template: ` <p>common-registration works! LERNAAA!!</p> ` }]
        }] });

class CommonRegistrationModule {
}
CommonRegistrationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonRegistrationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationModule, declarations: [CommonRegistrationComponent], exports: [CommonRegistrationComponent] });
CommonRegistrationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: CommonRegistrationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonRegistrationComponent
                    ],
                    imports: [],
                    exports: [
                        CommonRegistrationComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of common-registration
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonRegistrationComponent, CommonRegistrationModule, CommonRegistrationService };
//# sourceMappingURL=common-registration.mjs.map
