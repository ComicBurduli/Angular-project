import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NewserviceService } from './newservice.service';
import { BasketComponent } from './basket/basket.component';

const appRouts :Routes=[
  {path :'appcomponent' , component:AppComponent},
  {path:'main',component:MainComponent},
  {path:'header',component:HeaderComponent},
{path:'basket' , component:BasketComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
    HttpClientModule
  ],
  providers: [
    NewserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
