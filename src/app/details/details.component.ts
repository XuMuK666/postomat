import {Component, Input, OnInit} from '@angular/core';
import {MOZApiService} from '../mozapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  postamat = [];

  Current: any;
  @Input()
  set item(val: any) {
    this.Current = val;
    this.postMeta();
  }
  constructor(private service: MOZApiService) { }

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
}
