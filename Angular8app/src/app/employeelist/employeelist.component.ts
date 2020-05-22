import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  //templateUrl: './employeelist.component.html',
  template:`
  <h2>Employee List</h2>
  <ul *ngFor="let employees of employee">
    <li>{{employees.name}}</li>
  </ul>
  `,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employee=[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees()
     .subscribe(data=>this.employee=data)
     ;
  }

}
