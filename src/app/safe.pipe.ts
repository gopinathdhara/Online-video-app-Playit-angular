import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {

constructor(private sanitizer: DomSanitizer) { }
transform(url) { 
     let videoUrlArray=url.split("=");
     var embeddedUrl = "https://www.youtube.com/embed/"+videoUrlArray[1];
     return this.sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }
}