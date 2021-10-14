import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  // No importa en que parte de la aplicacion este,
  // el servicio va verse de manera global
  providedIn: 'root',
})
export class GifsService {

  //api key para acceder a los gifs https://developers.giphy.com/dashboard/
  private apiKey : string = '3Onfs2kTLMJtTrDTfGwICalls4qCD9yd';
// servicio url
private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  //para almacenar todas el historial de las busquedas en el sidebar
  private _historial: string[] = [];

  //TODO: cambiar any por su tipo
  public resultados: Gif[] = [];

  get historial() {
    //... rompemos la referencia
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    // solo se va ejecutar una vez

    this._historial =  JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [];
   
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

  }


  buscarGifs(terminoBusqueda: string) {
    // con trim eliminamos espacios, y lowerCase para almacenarlo en minusculas
    terminoBusqueda = terminoBusqueda.trim().toLocaleLowerCase();

    // Controlamos no tener búsquedas repetidas
    // si no existe ese termino, se inserta al sidebar
    if (!this._historial.includes(terminoBusqueda)) {
      // unshift inserta al principio
      this._historial.unshift(terminoBusqueda);
      // Controlamos que máximo se muestren 10 búsquedas en el sidebar
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    

    //  fetch('https://api.giphy.com/v1/gifs/search?api_key=3Onfs2kTLMJtTrDTfGwICalls4qCD9yd&q=doremi&limit=10')
    //  .then(resp => {
    //    resp.json().then(data => {
    //      console.log(data)
    //     })
    //  })

    // this.http.get('https://api.giphy.com/v1/gifs/search?api_key=3Onfs2kTLMJtTrDTfGwICalls4qCD9yd&q=doremi&limit=10')
    //   .subscribe((resp: any) =>{
    //     console.log(resp.data);
    //   })

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q',terminoBusqueda);

    // console.log('parametrossssssssssss',params.toString())
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params: params})
    .subscribe((resp) =>{
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));

    })
    
  }
}
