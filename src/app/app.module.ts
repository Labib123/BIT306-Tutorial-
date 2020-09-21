import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatInputModule} from '@angular/material/input';
import { PostCreateComponent } from './posts/post-create/post-create.component' ; 
import {MatExpansionModule} from '@angular/material/expansion';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './posts/post-list/post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PostsService } from './posts/posts.service';
import {RouterModule,Routes} from "@angular/router" ; 
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


 
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    SidenavComponent,
  ],
  imports:      [RouterModule.forRoot([
    {path: 'edit',component:PostCreateComponent},
    {path: 'list',component:PostListComponent}
    
  
  ]),MatIconModule, RouterModule,MatTabsModule,BrowserModule,BrowserAnimationsModule, FormsModule,MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatFormFieldModule, LayoutModule, MatSidenavModule, MatListModule],

  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
