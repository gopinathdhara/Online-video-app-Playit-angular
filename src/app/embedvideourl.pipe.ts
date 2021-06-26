import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embedvideourl'
})
export class EmbedvideourlPipe implements PipeTransform {

  transform(url: string, ...args: unknown[]): unknown {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

}
