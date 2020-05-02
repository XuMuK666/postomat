import {Component, OnInit} from '@angular/core';
import { NgModule, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridComponent,
  DxNumberBoxComponent,
   } from 'devextreme-angular';

import 'devextreme/data/odata/store';
import {ApiService} from './api.service';
import {MOZApiService} from './mozapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  @ViewChild(DxNumberBoxComponent, { static: false }) numberBox: DxNumberBoxComponent;
  columns: any;
  dataSource: any;
  CurrentRow: any;
  info = false;
  selected: undefined;



  constructor(private sanitizer: DomSanitizer, private service: MOZApiService) {
    this.dataSource = [];
    this.columns = [
      {
        caption: "ID постомата",
        dataField: "pid_local",
      },
      {
        caption: "Адрес установки",
        dataField: "address",
      },

      {
        caption: "Открытые ячейки",
        dataField: "status_lock"
      },
      {
        caption: "Статус посылки",
        dataField: "status_sensor"
      }
    ];
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.push( {
      location: 'before',
      widget: 'dxButton',
      options: {

        text: 'Обновить таблицу',
        stylingMode: "outlined",
        type: "default",
        onClick: this.dataDownload.bind(this)
      }
    }
    );
  }
  onFocusedRowChanging(e) {
    var rowsCount = e.component.getVisibleRows().length,
      pageCount = e.component.pageCount(),
      pageIndex = e.component.pageIndex(),
      key = e.event && e.event.key;

    if(key && e.prevRowIndex === e.newRowIndex) {
      if(e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
        e.component.pageIndex(pageIndex + 1).done(function() {
          e.component.option("focusedRowIndex", 0);
        });
      } else if(e.newRowIndex === 0 && pageIndex > 0) {
        e.component.pageIndex(pageIndex - 1).done(function() {
          e.component.option("focusedRowIndex", rowsCount - 1);
        });
      }
    }
  }

  onFocusedRowChanged(e) {
    var rowData = e.row && e.row.data;
    this.selected = rowData

    if(rowData) {
      this.CurrentRow = rowData;

    }
  }


  title = 'postomat';

  dataDownload() {
    this.service.getPostamatsFromDB().subscribe(res=>{
      console.log("getAllPostomatAllOrdersFromDb ", res);
        this.dataSource = [];
        // for (let item in res) {
        //   this.dataSource.push(item);
        // }
      for (let item in res) {
        let obj = {'key': item};
        Object.assign(obj, res[item]);
        this.dataSource.push(obj);
      }
    });
  }




  ngOnInit() {
    this.dataDownload();
}
}

