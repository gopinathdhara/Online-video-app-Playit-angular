import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  record:any='';
  countRecord=0;
  title:string='';
  desc:string='';
  addedBy:string='';
  constructor(private videoObj:VideosService) { }

  ngOnInit(): void {
    this.getAllVideosListService();
  }

  showModal(title,desc,addedBy):void {
    this.title=title;
    this.desc=desc;
    this.addedBy=addedBy;
    $("#myModal").modal('show');
  }

  sendModal(): void {
    //do something here
    this.hideModal();
  }

  hideModal():void {
    document.getElementById('close-modal').click();
  }
  
  
  getAllVideosListService(){
    this.videoObj.getAllVideosListService().subscribe(response => {
      this.record = response;
      if(this.record.status==200){
        if(this.record.data.length==0){
          this.countRecord=0;
        }else{
          this.countRecord=1;
        }
        console.log(this.record);
      }
    },(e) => {
      console.log(e);
        console.log(e);
    });
    
  }
}
