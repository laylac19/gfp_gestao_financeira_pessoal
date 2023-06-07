import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {ANGULAR_IMPORTS} from "./imports/angular.imports";
import {PRIMENG_IMPORTS} from "./imports/primeng.imports";

const SHARED_MODULE_PRIVATE_DECLARATIONS: any[] = [];
// const SHARED_MODULE_DECLARATIONS: any[] = [
//   ModalFormComponent,
//   SideBarComponent,
// ];

@NgModule({
  imports: [
    CommonModule,
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS,
    RouterLink
  ],
  declarations: [
    // SHARED_MODULE_DECLARATIONS,
    SHARED_MODULE_PRIVATE_DECLARATIONS
  ],
  exports: [
    // SHARED_MODULE_DECLARATIONS,
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS
  ],
  providers: []
})
export class SharedModule {
}
