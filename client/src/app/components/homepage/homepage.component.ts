import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://localhost:5050/api/appuser").subscribe({
      next: res => this.users = res,
      error: e => console.log(e),
      complete: () => console.log("GET request is completed.")
    })
  }

}
