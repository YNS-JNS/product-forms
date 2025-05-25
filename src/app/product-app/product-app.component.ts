import { Component  } from '@angular/core';
import { CommonModule , NgIf} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true, 
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './product-app.component.html',
  styleUrl: './product-app.component.css'
})

export class ProductAppComponent {

  productForm:FormGroup; 

  constructor(private fp : FormBuilder){
    this.productForm = this.fp.group({
      name:['', Validators.required],
      category:['', Validators.required],
      price:[null, [Validators.required, Validators.min(0.01)]],
      quantity:[0, Validators.min(0)],
      descritpion:[''],
    });
  }

  get f(): { [key : string ] : AbstractControl }{
    return this.productForm.controls;
  }

  get isPremuim() :boolean{
    return this.productForm .get("price")?.value > 1000;
  }

  onSubmit(): void{
    if(this.productForm.valid){
      console.log('Produit Créer :', this.productForm.value); 
    }else {
      console.warn('Erreur lors de la creation du produit'); 
    }
    
  }

  onReset() : void{
    this.productForm.reset({ 
      quantity : 0
    });
  }



}
