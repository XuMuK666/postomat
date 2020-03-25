import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPostomatStatus(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'status');
    fd.append('post_id', postId);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public getAllPostomatDataFromDb(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'status_db');
    fd.append('post_id', postId);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public getPostomatIds(): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'get_posstamat_ids');
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public getPostomatStatusDirect(postId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('post_id', postId);
    fd.append('req_type', 'status_all');
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public setPostomatMasterPincode(postId, pincode): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'set_master_pincode');
    fd.append('post_id', postId);
    fd.append('pincod', pincode);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public setPostomatCellPincode(postId, cellId, pincode): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'set_pincode');
    fd.append('post_id', postId);
    fd.append('pincod', pincode);
    fd.append('cell_id', cellId);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public openPostomatCell(postId, cellId): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'open_cell');
    fd.append('post_id', postId);
    fd.append('cell_id', cellId);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public setPostomatPwd(postId, pwd): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'direct');
    fd.append('req_type', 'set_password');
    fd.append('post_id', postId);
    fd.append('secret', pwd);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }

  public savePostomatCellStatusToDb(postId, locked, sensor): Observable <any> {
    var fd = new FormData();
    fd.append('command', 'celldata');
    fd.append('locked', locked);
    fd.append('post_id', postId);
    fd.append('sensor', sensor);
    return this.http.post('/ma/uiproxy.php', fd, {}
    );
  }
}
