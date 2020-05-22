import { Component } from '@angular/core';
import { User } from './user';
import{EnrollmentService} from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatedrivenform';
  public topics=['angular','React','Vue'];
  submitted=false;
  topicHasError = true;
  errorMsg = '';
  userModel = new User('Rob','r@g.com',1234,'default','morning',true);
  constructor(private _enrollmentService:EnrollmentService){}
  validateTopic(value){
     if(value=='default'){
       this.topicHasError=true;
     }
     else{
       this.topicHasError = false;
     }
  }
  onSubmit(){
    this.submitted=true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>console.log('success',data),
      error => this.errorMsg = error.statusText      
      )
  }
}