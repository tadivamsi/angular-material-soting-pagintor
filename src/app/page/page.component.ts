import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'body'];
  datasource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true})
    paginator!: MatPaginator;
    @ViewChild(MatSort, {static: true })
    sort!: MatSort;
  title: any;
  pageEvent!: PageEvent;
  pageSizeOptions:number[]=[]
  length = 5000;
  pageSize = 20;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.Rolelist()
  }
  Rolelist() {
    let obj = {
      "Iq_id": ""
    }
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((Response: any) => {

      console.log(Response);
      this.datasource = new MatTableDataSource(Response);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
      console.log("data", this.datasource);
    })
  }
  ngAfterViewInit() {

    (id: number): any =>  {
 
       const Title = `${this.title[Math.round(Math.random() * (this.title.length - 1))]} ${this.title[Math.round(Math.random() * (this.title.length - 1))].charAt(0)}`;
 
       return {
 
         id: id.toString(),
 
         title:this.title.toString(),
 
         url: Math.round(Math.random() * 100).toString(),
 
         };
 
     }
 
   }
}
