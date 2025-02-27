import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient)
  title = 'client';
  users: any;
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: data => this.users = data,
      error: error => {console.log(error)},
      complete: () => {console.log({"data": "Fetched"})}
    })
  }
}
