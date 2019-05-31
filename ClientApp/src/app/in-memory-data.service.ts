
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './models/task';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
    const tasks = [
      { id: 11, titlle:'Habilitar Servicios HTTP', description: '...' ,priority:true},
      { id: 12, titlle:'Simular Servidor de Datos ', description: '...',priority:true },
      { id: 13, titlle:'Importar HttpClientInMemoryWebApiModule y InMemoryDataService ', description: '...' ,priority:true },
    ];
    return {tasks};
  }
 
 
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
