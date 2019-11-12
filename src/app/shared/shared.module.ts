import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { TrimPipe } from './pipes/trim.pipe';
import { SafePipe } from './pipes/safe.pipe';


const COMPNENTS = [CardComponent];
const PIPES = [TrimPipe,SafePipe];

@NgModule({
  declarations: [...COMPNENTS, ...PIPES],
  imports: [
    CommonModule
  ],
  exports: [...COMPNENTS,...PIPES]
})
export class SharedModule { }
