import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';


@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule, MatTableModule, MatButtonModule, HttpClientModule, MatCheckboxModule],
  declarations: [AppComponent, HelloComponent, NavigationComponent, PostComponent],
  bootstrap: [AppComponent],
  providers: [PostService]
})
export class AppModule { }
