import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material-module/material-module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
  DateAdapter,
  MatNativeDateModule,
  NativeDateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats
} from '@angular/material';
import {
  MatDialogModule
} from '@angular/material/dialog';
import { HttpModule, Http } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TokenService } from './auth/service/token.service';
import { MoviesComponent } from './modules/movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './modules/filters/filters.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [TokenService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { CatalogService } from './shared/services/catalog.service';
// import { HttpClient } from '@angular/common/http';
// import { Auth } from './shared/auth/auth.service';
// import { Broadcaster } from './shared/core/broadcaster';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule, Http } from '@angular/http';
// import { WindowRef } from './shared/window/window.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CdkTableModule } from '@angular/cdk/table';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor, ErrorInterceptor } from './utils/http-intercetor';

// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
// import { MaterialModule } from './shared/material-module/material-module';
// import {
//     DateAdapter,
//     MatNativeDateModule,
//     NativeDateAdapter,
//     MAT_DATE_FORMATS,
//     MatDateFormats
// } from '@angular/material';
// import {
//     MatDialogModule
// } from '@angular/material/dialog';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { AppRoutes } from './app.routing';
// import { AppComponent } from './app.component';
// import { SecuredLayoutComponent } from './layouts/secured-layout.component';
// import { PublicLayoutComponent } from './layouts/public-layout.component';
// import { OrganizationService } from './shared/services/organization.service';
// import { CanActivateAuthenticated } from './shared/auth/permissions.service';
// import { HomeComponent } from './shared/home/home.component';
// import { WelcomeComponent } from './shared/home/welcome.component';
// import { MenuItems, AppMenu } from './shared/menu-items/menu-items';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { IntegrationService } from './shared/integration/integration.service';
// import { AccordionModule } from './shared/accordion/accordion.module';

// import { Md2DatepickerModule, MdDateFormats, MD_DATE_FORMATS } from 'md2';
// import { SnackbarMessageComponent } from './shared/snackbar-message/snackbar-message.component';
// import { ErrorDialogComponent } from './shared/error-dialog/error.dialog.component';
// import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm.dialog.component';
// import { ConfirmDialogService } from './shared/services/confirm-dialog.service';
// import { AuthModule } from './shared/auth/auth.module';
// import { OidcSecurityService } from './shared/auth/services/oidc.security.service';
// import { AuthConfiguration } from './shared/auth/auth.config';
// import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
// import { OidcRedirectComponent } from './shared/home/oidc-redirect.component';
// import { LoginComponent } from './shared/login/login.component';
// import { UserPwdAuth } from './shared/auth/user-pwd-auth.service';
// import { Router } from '@angular/router';
// import { OidcAuthService } from './shared/auth/oidc-auth.service';
// import { SchedulerModule } from './modules/scheduler/scheduler.module';
// import { DocumentService } from './shared/services/document.service';
// import { AssignmentService } from './shared/services/assignment.service';
// import { environment } from '../environments/environment';
// import { RolesAndProfilesService } from './shared/Services/RolesAndProfiles.service';
// import { HelperService } from './shared/Services/Helper.service';
// import { UserManagementService } from './shared/Services/UserManagement.service';

// export const MAT_NATIVE_DATE_FORMATS: MatDateFormats = {
//     parse: {
//         dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' }
//     },
//     display: {
//         dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
//         monthYearLabel: { year: 'numeric', month: 'short' },
//         dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
//         monthYearA11yLabel: { year: 'numeric', month: 'long' }
//     }
// };

// export const MD_NATIVE_DATE_FORMATS: MdDateFormats = {
//     parse: {
//         dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' }
//     },
//     display: {
//         dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
//         monthYearLabel: { year: 'numeric', month: 'short' },
//         dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
//         monthYearA11yLabel: { year: 'numeric', month: 'long' }
//     }
// };
// const MY_DATE_FORMATS_MD: MdDateFormats = Object.assign( {}, MD_NATIVE_DATE_FORMATS, {
//     parse: { dateInput: 'DD.MM.YYYY' }
// } );

// const MY_DATE_FORMATS: MatDateFormats = Object.assign( {}, MAT_NATIVE_DATE_FORMATS, {
//     parse: { dateInput: 'DD.MM.YYYY' }
// } );

// export function createTranslateLoader( http: Http ) {
//     return new TranslateStaticLoader( http, './assets/i18n', '.json' );
// }

// export function createAuthenticationProvider(
//     http: HttpClient,
//     router: Router, authConfiguration: AuthConfiguration,
//     oidcService: OidcSecurityService ) {
//     if ( environment.auth === 'oidc' ) {
//         return new OidcAuthService( router, http, oidcService, authConfiguration );
//     } else {
//         return new UserPwdAuth( router, http );
//     }
// }


// @NgModule( {
//     declarations: [
//         AppComponent,
//         SecuredLayoutComponent,
//         PublicLayoutComponent,
//         HomeComponent,
//         WelcomeComponent,
//         SnackbarMessageComponent,
//         ErrorDialogComponent,
//         ConfirmDialogComponent,
//         UnauthorizedComponent,
//         OidcRedirectComponent,
//         LoginComponent
//     ],
//     imports: [
//         SchedulerModule,
//         BrowserModule,
//         RouterModule.forRoot( AppRoutes ),
//         FormsModule,
//         ReactiveFormsModule,
//         HttpModule,
//         AccordionModule,
//         HttpClientModule,
//         TranslateModule.forRoot( {
//             provide: TranslateLoader,
//             useFactory: createTranslateLoader,
//             deps: [Http]
//         } ),
//         MaterialModule,
//         MatNativeDateModule,
//         FlexLayoutModule,
//         Md2DatepickerModule,
//         CdkTableModule,
//         BrowserAnimationsModule,
//         MatDialogModule,
//         AuthModule.forRoot()
//     ],
//     providers: [
//         {
//             provide: Auth,
//             useFactory: createAuthenticationProvider,
//             deps: [HttpClient, Router, AuthConfiguration, OidcSecurityService]
//         },
//         OrganizationService,
//         CatalogService,
//         DocumentService,
//         AssignmentService,
//         ConfirmDialogService,
//         Broadcaster,
//         IntegrationService,
//         CanActivateAuthenticated,
//         RolesAndProfilesService,
//         HelperService,
//         UserManagementService,
//         { provide: MenuItems, useClass: AppMenu },
//         { provide: DateAdapter, useClass: NativeDateAdapter },
//         { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
//         { provide: MD_DATE_FORMATS, useValue: MY_DATE_FORMATS },
//         WindowRef,
//         {
//             provide: HTTP_INTERCEPTORS,
//             useClass: TokenInterceptor,
//             multi: true
//         },
//         {
//             provide: HTTP_INTERCEPTORS,
//             useClass: ErrorInterceptor,
//             multi: true
//         }
//     ],
//     schemas: [NO_ERRORS_SCHEMA],
//     bootstrap: [AppComponent],
//     entryComponents: [SnackbarMessageComponent, ErrorDialogComponent, ConfirmDialogComponent]
// } )
// export class AppModule {
//     constructor( private auth: Auth ) {
//         auth.setup();
//     }
// }