import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FilesRoutingModule, routedComponents } from './files-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';



@NgModule({
  imports: [
    ThemeModule,
    FilesRoutingModule,
    Ng2SmartTableModule,
    VgBufferingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class FilesModule { }
