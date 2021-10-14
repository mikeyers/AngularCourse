import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';


@NgModule({
    //Las declarations sirven para especificar que tiene nuestro modulo
    //que componentes, que pipes
    declarations: [
        ContadorComponent
    ],
    //Cosas que sean visibles fuera de este modulo (publicas)
    exports: [
        ContadorComponent
    ],
    imports: [
       
    ]
    
    })
    export class ContadorModule{
    
    }
    