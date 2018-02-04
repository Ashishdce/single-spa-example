import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './components/main-component/main.component.ts';
import {AboutMeComponent} from './components/about-me/about-me.component.ts';
import {AboutProjectComponent} from './components/about-project/about-project.component.ts';
import {ContactComponent} from './components/contact/contact.component.ts';
import {APP_BASE_HREF} from "@angular/common";
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    {
      path: 'me',
      component: AboutMeComponent
    },
    {
      path: 'project',
      component: AboutProjectComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: '',
      redirectTo: 'me',
      pathMatch: 'full'      
    },
    {
      path: '**',
      redirectTo: 'me',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes, {})
    ],
    declarations: [
        MainComponent,
        AboutMeComponent,
        AboutProjectComponent,
        ContactComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/about/'}],
    bootstrap: [MainComponent]
})
export default class MainModule {
}