export class constantes{
    public routeGlobal = "http://localhost:8000/api/";
    public route = "http://localhost:8000/api/";

    constructor(){

    }

    getRouterGlobal(){
        return this.routeGlobal;
    }

    getRouter(){
        return this.route;
    }
}