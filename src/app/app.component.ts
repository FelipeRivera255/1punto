import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeraapp';

  miFormulario = new FormGroup({
    Usuario : new FormControl('',Validators.required),
    Formulario : new FormControl('',Validators.required),
    Si : new FormControl('',Validators.required), 
    No : new FormControl('',Validators.required),  
    id : new FormControl('',Validators.required)
    

  });


  
}
