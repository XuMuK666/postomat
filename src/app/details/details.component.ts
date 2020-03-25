import {Component, Input, OnInit} from '@angular/core';
import {MOZApiService} from '../mozapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Current: any;
  @Input()
  set item(val: any) {
    this.Current = val;
    this.service.getPostomatMeta(val['posstamat_id']).subscribe(res => {
      console.log( "getPostomatMeta",res);
    })
  }
  constructor(private service: MOZApiService) { }

  ngOnInit() {}

}
