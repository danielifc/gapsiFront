import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor, ProveedoresDataService } from 'src/app/service/data/proveedores-data.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

	proveedor!: Proveedor;
	error: boolean = false;
	errorMessage: string = '';

  constructor(
		private service: ProveedoresDataService,
		private router: Router
	) { }

  ngOnInit(): void {
		this.proveedor = new Proveedor(-1, '', '', '');
  }

	saveProveedor(){		

		console.log('Desde saveProveedor');
		console.log(this.proveedor);

		this.service.saveProveedor(this.proveedor).subscribe(
			data => {
				console.log(data);
				this.router.navigate(['lista-proveedores']);
			},
			error => {
				if(error.status === 400){
					this.error = true;
					this.errorMessage = `El nombre del proveedor: "${this.proveedor.nombre}" ya existe, favor de validar`;
				}
				console.log(error);
			}
		);
	}
}