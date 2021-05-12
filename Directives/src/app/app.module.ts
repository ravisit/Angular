import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyredDirective } from './directives/myred.directive';
import { NiceThemeDirective } from './directives/nice-theme.directive';
import { ColorInputDirective } from './directives/color-input.directive';
import { TextSizeDirective } from './directives/text-size.directive';
import { CustomThemeDirective } from './directives/custom-theme.directive';
import { MouseActionDirective } from './directives/mouse-action.directive';
import { DynamicColorDirective } from './directives/dynamic-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyredDirective,
    NiceThemeDirective,
    ColorInputDirective,
    TextSizeDirective,
    CustomThemeDirective,
    MouseActionDirective,
    DynamicColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
