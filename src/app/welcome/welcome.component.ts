import { Component, OnInit } from '@angular/core';
import { CandidatoDataService } from '../service/data/candidato-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  headerMessage: string = 'e-Commerce Gapsi'
  welcomeMessage: string = '';
  version: string = '';

  constructor(
    private candidatoDataService: CandidatoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.candidatoDataService.getWelcomeMessage().subscribe(
      data => this.welcomeMessage = data.message
    );

    this.candidatoDataService.getVersion().subscribe(
      data => this.version = data.message
    );
  }

  continuar(): void{
    console.log('hacia proveedores!');
    this.router.navigate(['lista-proveedores']);
  }

}
