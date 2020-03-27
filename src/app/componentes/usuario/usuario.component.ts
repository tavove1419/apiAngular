import { AgentModel } from '../../models/agent.model';
import { usuarioModel } from '../../models/usuario.model';
import { constantes } from '../../utilitis/constantes';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  matCard
  public usuarioModel;
  public agentModel;
  public listUsuario;
  public listAgent;
  public constantes: constantes;
  private datatables;

  constructor(
    //public dialog: MatDialog,
    private UsuarioService: UsuarioService
  ) { 
    this.usuarioModel = new usuarioModel();
    this.agentModel = new AgentModel();
    this.datatables = new MatTableModule;
  }

  ngOnInit(): void {
    this.show();
    this.showAgent();
  }

  clear(){
    this.usuarioModel = new usuarioModel();
  }

  clearAgent(){
    this.agentModel = new AgentModel();
  }

  show(){
    
    this.UsuarioService.show().subscribe(result=>{
      this.listUsuario = result.response;
      console.log(this.listUsuario);
    })
  }

  showAgent(){
    this.UsuarioService.listAgent().subscribe(result=>{
      this.listAgent = result.response;
      console.log(result);
    })
  }

  edit(row){
    this.usuarioModel = row;
  }

  delete(row){
    console.log(row);
    this.UsuarioService.delete(row).subscribe(result=>{
      this.show();
    },err=>{

    })
  }

  createAgent(){
    console.log(this.agentModel);
    this.UsuarioService.createAgent(this.agentModel).subscribe(result=>{
      this.agentModel = new AgentModel();
      this.showAgent();
    })
  }

  create(){
    console.log(this.usuarioModel);
    this.UsuarioService.create(this.usuarioModel).subscribe(result=>{
      console.log(result);
      this.usuarioModel = new usuarioModel();
      this.show();
    },err=>{
      
    })
  }

  update(){
    console.log(this.usuarioModel);
    this.UsuarioService.update(this.usuarioModel).subscribe(result=>{
      this.usuarioModel = new usuarioModel();
      this.show();
    }, err=>{

    })
  }
}
