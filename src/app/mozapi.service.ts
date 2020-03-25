import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MOZApiService {

  constructor(private http: HttpClient) { }

  public getAllPostomatOrdersFromDb(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_posstamat_orders');
    fd.append('id', postId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public getAllPostomatAllOrdersFromDb(): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_all_orders');
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

  public getPostomatIds(): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_posstamat_ids');
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public getPostomatStatusDirect(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'status_all');
    fd.append('post_id', postId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public savePostomatCellStatusDataToDb(postId, locked, sensor): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'celldata');
    fd.append('locked', locked);
    fd.append('post_id', postId);
    fd.append('sensor', sensor);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public setPostomatMasterPincodeDirect(postId, pincode): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'set_master_pincode');
    fd.append('post_id', postId);
    fd.append('pincod', pincode);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public setPostomatCellPincode(postId, cellId, pincode): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'set_pincode');
    fd.append('post_id', postId);
    fd.append('pincod', pincode);
    fd.append('cell_id', cellId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public openPostomatCell(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'open_cell');
    fd.append('post_id', postId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public getAllPostomatDataFromDb(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'status_db');
    fd.append('post_id', postId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public setPostomatPwd(postId, pwd): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'set_password');
    fd.append('post_id', postId);
    fd.append('secret', pwd);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public saveOrderStatustoOpenCartCMS(postId, orderId, orderStatusId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'set_status_cms');
    fd.append('post_id', postId);
    fd.append('order_id', orderId);
    fd.append('order_status_id', orderStatusId);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public genCustomerPINs(postId, orderId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'customer_pin_cells');
    fd.append('post_id', postId);
    fd.append('order_id', orderId);

    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public genMailmanPINs(postId, orderId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'mailman_cells');
    fd.append('post_id', postId);
    fd.append('order_id', orderId);

    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public clearReservationForCellsofSomeOrder(postId, orderId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'unreserv_cells');
    fd.append('post_id', postId);
    fd.append('order_id', orderId);

    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }

  public makeReservationForCellsofSomeOrder(postId, orderId, cells): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'reserv_cells');
    fd.append('post_id', postId);
    fd.append('order_id', orderId);
    fd.append('cells', cells);
    return this.http.post('/moz/uiproxy.php', fd, {}
    );
  }
}
