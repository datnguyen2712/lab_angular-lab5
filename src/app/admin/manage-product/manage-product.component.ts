import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manage-product',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})
export class ManageProductComponent implements OnInit {

  tuKhoaCam: any = /ma tuý|hàng trắng/;
  
  productForm = new FormGroup({
    productName: new FormControl(null, this.productNameValidator()),
    productCode: new FormControl('123-321'),
    description: new FormControl(null),
    price: new FormControl(null),
    starRating: new FormControl(null),
    imageUrl: new FormControl('https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg')

  });

  constructor() {}
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
  lamLai() {
    this.productForm = new FormGroup({
        productName: new FormControl(null),
        productCode: new FormControl(''),
        description: new FormControl(null),
        price: new FormControl(null), 
        starRating: new FormControl(null),
        imageUrl: new FormControl('')
    });
  }
  productNameValidator(): ValidatorFn{
    return (control: AbstractControl):any => {
      var productName: string = control.value;
      if (productName && (productName.includes('hàng trắng') || productName.includes('ma túy'))) {
        return { productNameInvalid: true };
      }
      return null;
    };
  }
  
}
