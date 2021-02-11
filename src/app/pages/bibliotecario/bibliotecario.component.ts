import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/settings/translate-config.service';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.component.html',
  styleUrls: ['./bibliotecario.component.css']
})
export class BibliotecarioComponent implements OnInit {

  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }

}
