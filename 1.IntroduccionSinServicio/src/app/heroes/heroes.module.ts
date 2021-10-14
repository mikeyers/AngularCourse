import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
//Las declarations sirven para especificar que tiene nuestro modulo
//que componentes, que pipes
declarations: [
    HeroeComponent,
    ListadoComponent
],
//Cosas que sean visibles fuera de este modulo (publicas)
exports: [
    ListadoComponent
],
imports: [
    CommonModule // ofrece directivas como ngfor nif
]

})
export class HeroesModule{

}
