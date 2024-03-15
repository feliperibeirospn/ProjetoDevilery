import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EnderecoComponent } from './components/endereco/endereco.component';
import { AppAcaiBuilderComponent } from './components/app-acai-builder/app-acai-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EnderecoComponent,AppAcaiBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-delivery';
}
