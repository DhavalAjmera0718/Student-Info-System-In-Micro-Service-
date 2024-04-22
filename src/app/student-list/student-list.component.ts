import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { StudentMicroService } from '../service/student-micro.service';
import { DialogUpdateComponentComponent } from '../dialog-update-component/dialog-update-component.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  tableData: any;
  dataSource: any;
  displayColumns: string[] = ["enrollmentNo", "password", "name", "gender", "dob", "branch", "contact", "address", "city", "pinCode", "securityKey", "action"]
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) matsort !: MatSort;
  @ViewChild(MatFormField) matform!: MatFormField

  searchValue: string = '';

  constructor(private service: StudentMicroService, private router: Router, private fb: FormBuilder, public dialog: MatDialog) {
    this.service.getAllUserData().subscribe({
      next: (resp) => {
        this.tableData = resp;
        console.log(this.tableData)
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matsort;
        // this.dataSource.form=this.matform
        console.log("Data Source--->", this.dataSource)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {}
  /*****************************************************************************************************************/
  filterchange(data: any) {

    const value = (data.target as HTMLInputElement).value
    this.dataSource.filter = value;

  }

  search(searchValue: string) {
    this.dataSource.filter = searchValue;
  }
 

/************************************************** [ OPEN DAILOG FOR UPDATE] **************************************************************/
openDialog(width: string, height: string, name: string): void {
  const dialogRef = this.dialog.open(DialogUpdateComponentComponent, {
    width: width,
    height: height,
    data: { name: name }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.service.getAllUserData().subscribe({
      next: (resp) => {
        this.tableData = resp;
        console.log(this.tableData)
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matsort;
        // this.dataSource.form=this.matform
        console.log("Data Source--->", this.dataSource)

      },
      error: (err) => {
        console.log(err);
      }
    })
    // You can handle the result here if needed
  });
}
}
