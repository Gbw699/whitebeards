import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CatalogRepositoryService } from './catalog-repository.service';
import { CatalogComponent } from './catalog.component';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [CatalogComponent],
  exports: [],
  providers: [CatalogRepositoryService],
})
export class CatalogModule {}
