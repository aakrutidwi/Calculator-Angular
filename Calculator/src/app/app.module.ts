import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ButtonComponent } from './ButtonComponent/button/button.component';
import { FunctionComponent } from './ButtonComponent/Function/function.component';
import { OperationComponent } from './ButtonComponent/Operation/operation.component';
import { NumericComponent } from './ButtonComponent/Numeric/numeric.component';
import { DisplayComponent } from './DisplayComponent/display/display.component';
import { CalculatorComponent } from './CalculatorComponent/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FunctionComponent,
    OperationComponent,
    NumericComponent,
    DisplayComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
