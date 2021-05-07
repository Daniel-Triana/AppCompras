import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-8fc47-default-rtdb.firebaseio.com/presupuestos.json'; 
  preURL = 'https://comprasapp-8fc47-default-rtdb.firebaseio.com/presupuestos';
  
  constructor(private http: HttpClient) {
    
   }
   postPresupuesto(presupuesto: any){
    const newpres=JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.presURL, newpres, {headers})
      
  }

  getPresupuestos(){
    return this.http.get(this.presURL);
  }

  getPresupuesto(id$: string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url);

  }

  putPresupuesto(presupuesto: any, id$: string){
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${this.preURL}/${id$}.json`;

    return this.http.put(url,newpre,{headers})

  }

  delPresupuesto (id$: string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url);
    
  }

}
