import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Proveedor, ProveedoresDataService } from '../service/data/proveedores-data.service';
import { PAGE_SIZE } from '../app.constants';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent implements OnInit {

  page: number = 0;
  pageSize: number = PAGE_SIZE;
  totalElements: number = 0;
  proveedores: Proveedor[] = [];
  message: string = '';

  constructor(
    private proveedoresDataService: ProveedoresDataService
  ) { }

  ngOnInit(): void {
    this.getProveedores(0);
  }

  getProveedores(page: number){
    this.proveedoresDataService.getProveedores(page).subscribe(
      data => {
        this.proveedores = data.proveedores;
        this.totalElements = data.totalItems;

      }
    );
  }

  deleteProveedor(id: number){
    this.proveedoresDataService.deleteProveedor(id).subscribe(
      data => {
        this.getProveedores(this.page);
        this.message = `Se borró satisfactoriamente el proveedor ${id}`;
      }
    );
  }

  changePage(page: number){
    console.log(`invoking page: ${page}`);
    this.message = '';
    this.getProveedores(page-1);
  }

  



}
