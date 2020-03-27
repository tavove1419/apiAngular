import { constantes } from '../../utilitis/constantes';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
//import { constant } from "../../utility/constant";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

    constant = new constantes();
    api_url = this.constant.routeGlobal;
   
    constructor(private http: HttpClient){
        
    }

    show(): Observable<any>{
        return this.http.get(`${this.api_url}customer/list`);
    }

    create(params): Observable<any>{
        return this.http.post(`${this.api_url}customer/create`, params);
    }

    update(params): Observable<any>{
        return this.http.post(`${this.api_url}customer/actualizar`, params);
    }

    delete(params): Observable<any>{
        return this.http.post(`${this.api_url}customer/delete`, params);
    }

    listAgent(): Observable<any>{
        return this.http.get(`${this.api_url}agent/listAgent`);
    }

    createAgent(params): Observable<any>{
        return this.http.post(`${this.api_url}agent/createAgent`, params);
    }
}
