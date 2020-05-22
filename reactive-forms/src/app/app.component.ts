import { Component } from '@angular/core';
//import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder,Validators, FormGroup,FormArray } from '@angular/forms'
import {forbiddenNameValidator}from './shared/user-name.validator';
import { PasswordValidator} from './shared/password.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){
    
  }

  title = 'reactive-forms';
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Siam'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  registrationForm:FormGroup;
   get userName(){
     return this.registrationForm.get('userName');
   }
   get email(){
     return this.registrationForm.get('email');
   }
   get alternateEmails()
   {
     return this.registrationForm.get('alternateEmails') as FormArray;
   }
   addAlternateEmail(){
      this.alternateEmails.push(this.fb.control(''));
   }
   ngOnInit(){
    this.registrationForm =  this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    email:[''],
    subscribe:[false],
    password: [''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    }),
    alternateEmails:this.fb.array([])
 },{validator:PasswordValidator});

  this.registrationForm.get('subscribe').valueChanges
  .subscribe(checkedValue =>{
    const email= this.registrationForm.get('email');
    if(checkedValue){
      email.setValidators(Validators.required);
    }
    else{
      email.clearValidators();
    }
    email.updateValueAndValidity();
  })

 }
  

  // loadApiData(){
  //    this.registrationForm.setValue({
  //      userName:'siam',
  //      password:1234,
  //      confirmPassword:1234,
  //      address:{
  //        city:'City',
  //        state: 'State',
  //        postalCode: '123456'
  //      }
  //    })
  // }
  loadApiData(){
      this.registrationForm.patchValue({
         userName:'',
         password:1234,
         confirmPassword:1234
      })
    }
}
