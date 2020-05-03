import {Component, Input, OnInit} from '@angular/core';
import {MOZApiService} from '../mozapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  popup = false;
  title = '';
  formTitle = '';
  postamat = [];
  cell = undefined;
  Current: any;
  cod = undefined;
  @Input()
  set item(val: any) {
    this.Current = val;
    this.postMeta();
  }
  constructor(public service: MOZApiService) { }

  ngOnInit() {}

  postMeta() {
    this.service.getPostomatMeta(this.Current['posstamat_id']).subscribe(res => {
      console.log( "getPostomatMeta",res);
      this.postamat = [];
      for (let item in res['status_lock']) {
        let tmp = {};
        for (let key in res) {
          if (typeof(res[key]=="object")){
            tmp[key] = res[key][item];
          } else {
            tmp[key] = res[key];
          }
        }
        this.postamat.push(tmp);
        console.log(this.postamat);
      }
    });
  }

  send() {
    if (this.cod) {
      if (this.formTitle == 'Мастер пин-код') {
        this.service.setMasterPin(this.Current['posstamat_pid'], this.cod).subscribe();
      }
      if (this.formTitle == 'Пин-код') {
        this.service.setCellPin(this.Current['posstamat_id'], this.cell, this.cod).subscribe();
      }

      this.popup = false;
    }
    this.cod = undefined;

  }

}
