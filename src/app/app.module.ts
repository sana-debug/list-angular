import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ListsComponent } from './lists/lists.component';
import { FormsModule } from '@angular/forms';
import { VoirDetailsCourseComponent } from './voir-details-course/voir-details-course.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { MarkdownModule } from 'ngx-markdown';
import { LiveEditViewerComponent } from './live-edit-viewer/live-edit-viewer.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ListsComponent,
    VoirDetailsCourseComponent,
    LiveEditViewerComponent,
    SearchCourseComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
