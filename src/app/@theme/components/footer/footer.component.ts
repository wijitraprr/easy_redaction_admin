import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <span class="created-by">Created by <a href="http://www.wolfcomusa.com/"> WOLFCOM® </a> <img src="assets/images/wolfcom-icon16x16.png"></span>
  <div class="socials">
  <a href="#" target="_blank" class="ion ion-social-facebook"></a>
  <a href="#" target="_blank" class="ion ion-social-twitter"></a>

  </div>
  `,
})
export class FooterComponent {
}
