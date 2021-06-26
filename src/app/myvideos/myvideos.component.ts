import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.css']
})
export class MyvideosComponent implements OnInit {
  record:any='';
  addData:any='';
  title:any="";
  description:any="";
  url:any="";
  videoIdPk:any='';
  editRecord:any='';
  buttonValue:any='Add Video';
  countRecord=0;
  username='';
  constructor(private fb: FormBuilder,private videoObj:VideosService,private toastr: ToastrService) { }

  public addVideoForm = this.fb.group({
    title: ['',[Validators.required]], 
    description: ['',[Validators.required]],
    url: ['',[Validators.required]],
  });

  ngOnInit(): void {
    this.username=localStorage.getItem("username");
    this.getMyVideosListService();
    // this.addVideoForm.patchValue({
    //   title : "gopi",

    //  });
  }

  getMyVideosListService(){
    this.videoObj.getMyVideosListService().subscribe(response => {
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
      this.toastr.error(e.error.message);
    });
    
  }
  addUpdateVideo(title,description,url){
    if(this.buttonValue=="Add Video"){
      this.videoObj.insertMyVideosListService(title,description,url).subscribe(response => {
        this.addVideoForm.reset();
          this.addData = response;
          if(this.addData.status==200){
            this.toastr.success('Video Added successfully', 'Success');
          }
          this.getMyVideosListService();
      },(e) => {
        console.log(e);
        this.toastr.error(e.error.message);
      });
    }else if(this.buttonValue=="Update Video"){
      this.videoObj.updateMyVideosListService(title,description,url,this.videoIdPk).subscribe(response => {
          this.addData = response;
          if(this.addData.status==200){
            this.toastr.success('Video Updated successfully', 'Success');
          }
          this.getMyVideosListService();
      },(e) => {
        console.log(e);
        this.toastr.error(e.error.message);
      });
    }
    
  }
  resetForm(){
    this.addVideoForm.reset();
    this.buttonValue="Add Video";
  }
  getSingleVideo(videoId){
    this.videoObj.getSingleVideoListService(videoId).subscribe(response => {
      this.editRecord = response;
      if(this.editRecord.status==200){
        this.buttonValue="Update Video";
        console.log(this.editRecord);
        this.title=this.editRecord.data[0].title;
        this.description=this.editRecord.data[0].description;
        this.url=this.editRecord.data[0].url;
        this.videoIdPk=this.editRecord.data[0]._id;
      }
    },(e) => { 
      console.log(e);
      this.toastr.error(e.error.message);
    });
  }
  deleteVideo(){
    this.videoObj.deleteMyVideoService(this.videoIdPk).subscribe(response => {
      this.addVideoForm.reset();
        this.addData = response;
        if(this.addData.status==200){
          this.toastr.success('Video Deleted successfully', 'Success');
        }
        this.getMyVideosListService();
        let elem = document.getElementById('addVideoLink');
        let evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
        });
        elem.dispatchEvent(evt); 
    },(e) => {
      console.log(e);
      this.toastr.error(e.error.message);
    });
  }
}
