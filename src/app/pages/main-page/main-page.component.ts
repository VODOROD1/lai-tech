import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectToGithubApiService } from 'src/app/core/service/connect-to-github-api.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  repositories: string[][] = [];

  constructor(private githubApi: ConnectToGithubApiService) {
  }

  ngOnInit() {
    debugger
    this.getRepositories();
  }

  getRepositories() {
    debugger
    this.githubApi.getRepositories()
    .subscribe((data) => {
      debugger
      this.repositories = Object.entries(data)
    })
  }

  identify(index: number, item: string[]){
    return item[0]; 
 }
}
