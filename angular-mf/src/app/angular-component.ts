import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-component',
  standalone: true,
  template: `
    <div style="padding: 20px; background-color: #dd0031; color: white; border-radius: 8px; margin: 10px; text-align: center;">
      <h2>🅰️ Angular Microfrontend</h2>
      <p>Este é um componente Angular carregado via Module Federation!</p>
      <p>Executando na porta 4201</p>
    </div>
  `
})
export class AngularComponent {
}
