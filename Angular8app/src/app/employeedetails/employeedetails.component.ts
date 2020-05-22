import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
 // templateUrl: './employeedetails.component.html',
 template:`
  <h2>Employee Details</h2>
  <ul *ngFor="let employees of employee">
    <li>{{employees.name}}</li>
  </ul>`,
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
   
  public employee=[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data=>this.employee = data);
  }

}
