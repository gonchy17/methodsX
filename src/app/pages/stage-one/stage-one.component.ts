import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms';
import {PuedeDesactivar} from '../../shared/candeactivate/without-save.guard;'
@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.scss']
})
export class StageOneComponent implements OnInit, PuedeDesactivar {
 // send=false;
 // mensaje!:string;

  form:FormGroup;
  constructor(private formBuilder:FormBuilder) {
      this.form=this.formBuilder.group({
         nameOperation:[]
      })
  }

  ngOnInit(): void {
  }
 /* stageOne(){
    this.send=true;
  }*/
  permitirSalirDeRuta():boolean | import("rxjs").Observable<boolean> | Promise<boolean>{
   //  if(!this.mensaje||this.send){
     //   return true;
     //}
    if(this.form.dirty){
        const confirm=window.confirm('Want out form and loss changrs you?');
        return confirm;
    }
    return true;
  }
}
