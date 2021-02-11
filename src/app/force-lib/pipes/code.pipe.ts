import { Pipe, PipeTransform } from '@angular/core';

const keyWords: String[] = ['import','export','class','from'];

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(text) {
    let arrayWords = text.split(' ');
    let newWord = '';
    let newText = '';
    console.log(arrayWords)
    for(var i=0;i<arrayWords.length;i++){
      for(var j=0; j< keyWords.length; j++){
        if (arrayWords[i].includes(keyWords[j])){
          newWord = arrayWords[i].replace(keyWords[j],`<span class="primary bold">${keyWords[j]}</span>`);
          break;
        }

        newWord = arrayWords[i];
      }

      if (arrayWords[i].includes('\'')){
        let start = arrayWords[i].indexOf('\'',0);
        let end = arrayWords[i].indexOf('\'',start + 1);
        newWord = arrayWords[i].replace(arrayWords[i].substring(start,end+1),`<span class="string bold">${arrayWords[i].substring(start,end+1)}</span>`);
      }

      if (i == 0){
        newText = newWord;
      }
      else{
        newText = newText + '&nbsp;' + newWord;
      }
    }

    
    return newText;
  }

}
