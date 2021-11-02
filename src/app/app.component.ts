import { Component, OnInit, Injector } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome!';
  users: any = [];
  constructor(private swUpdate: SwUpdate, private injector: Injector) {
  }

  ngOnInit() {
      this.injector.get(AppService).getUsers().subscribe(data => 
        {
          if(data){
            this.users = data;
            this.title = `Welcome! ${this.users.length} users loaded`
          }
        }
      )
      if (this.swUpdate.isEnabled) {

          this.swUpdate.available.subscribe(() => {
              if(confirm("New version available. Load New Version?")) {
                window.location.reload();
              }
          });
      }        
  }

  onClickSubmit(payload: any) {
    this.injector.get(AppService).addUser(payload).subscribe(data => 
      {
        if(data){
          this.users = [data];
          this.title = `Welcome! ${this.users.length} user loaded`
        }
      }
    )
  }
}
