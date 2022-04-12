import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const appRoutes: Routes = [
  /*{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},*/
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'books',  component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: '**', redirectTo: 'books'}
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
