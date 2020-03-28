import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MOZApiService {

  constructor(private http: HttpClient) { }

  public getAllPostomatAllOrdersFromDb(): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_all_orders');
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }
  public getAllPostomatAllOrdersFromDbA(): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_all_orders');
    fd.append('active', '1');
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }



  public getPostomatMeta(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_posstamat_meta');
    fd.append('id', postId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public reservCell(postId, orderId, cell): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'posstamat_reserv');
    fd.append('id', postId);
    fd.append('order_id', orderId);
    fd.append('cells_global', cell);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public unreservCell(postId, orderId, cell): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'posstamat_unreserv');
    fd.append('id', postId);
    fd.append('order_id', orderId);
    fd.append('cells_global', cell);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public setCellPin(postId, cellId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'posstamat_set_cell_pin');
    fd.append('id', postId);
    fd.append('cell_id', cellId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public setMasterPin(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'posstamat_set_master_pin');
    fd.append('id', postId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }





}
