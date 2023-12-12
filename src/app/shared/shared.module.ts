import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center/center.component';
import { CardComponent } from './card/card.component';
import { LayoutComponent } from './layout/layout.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroHomeModern,
  heroInboxStack,
  heroClipboardDocument,
  heroChatBubbleLeftEllipsis,
  heroBell,
  heroCog8Tooth,
  heroArrowRightOnRectangle,
  heroArrowLongRight
} from '@ng-icons/heroicons/outline';
import { ProductListComponent } from './product-list/product-list.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { LoadingComponent } from './loading/loading.component';
import { OrderListComponent } from './order-list/order-list.component';
import {AppModule} from "../app.module";
import {OrderFilterPipe} from "../pipes/order-filter.pipe";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
  declarations: [
    CenterComponent,
    CardComponent,
    LayoutComponent,
    ProductListComponent,
    MoreButtonComponent,
    LoadingComponent,
    OrderListComponent,
    OrderFilterPipe,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgIconsModule.withIcons({
      heroHomeModern,
      heroInboxStack,
      heroClipboardDocument,
      heroChatBubbleLeftEllipsis,
      heroBell,
      heroCog8Tooth,
      heroArrowRightOnRectangle,
      heroArrowLongRight
    }),
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    CenterComponent,
    CardComponent,
    LayoutComponent,
    ProductListComponent,
    MoreButtonComponent,
    LoadingComponent,
    OrderListComponent,
    OrderFilterPipe
  ]
})
export class SharedModule { }
