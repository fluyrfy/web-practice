import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02-emplist',
  templateUrl: './myc02-emplist.component.html',
  styleUrls: ['./myc02-emplist.component.css']
})
export class Myc02EmplistComponent implements OnInit {
  empList = [
    { eid: 101, ename: 'liang liang', salary: 5000.2233, birthday: 1000 *　3600 * 24, sex: 1, zzmm: 10},
    { eid: 102, ename: 'Ran Ran', salary: 6000.5583, birthday: 1000 * 3600 * 24 * 365, sex: 0, zzmm: 20},
    { eid: 101, ename: 'donG dOng', salary: 7000.1234, birthday: 0, sex: 1, zzmm: 30},
    { eid: 101, ename: 'tAo TAo', salary: 8000.9876, birthday: 0, sex: 0, zzmm: 20},
  ];

  delEmp(index: number){
    this.empList.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
