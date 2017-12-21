import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr=["el1","el2","el3"];
  text ="abcdefghij";
  text1="Blue Whale";
  //pattern = "defg";
  pattern="";
  pattern2="";
  pattern3="";
  number = 0;
  result1;
  result2;
  result3;
  pos;

index1(){
  this.pattern = prompt('Introduce parametro de busqueda ');
  this.result1 = 'Blue Whale'.indexOf(this.pattern); // 3
/*   this.result1=this.text1.indexOf('Blute'); // -1
  this.result1=this.text1.indexOf('Blue');  // 0 */
  //
}

index2(){
  this.pattern2 = prompt('Introduce parametro de busqueda ');
  this.result2 = indexOf2(this.text1,this.pattern2);

  function indexOf2(str, query) {
    for(var i = 0; i < str.length; i++) {
      console.log("i-->",i);

      for(var j = 0; j < query.length; j++) {
        console.log("query[j]->",query[j]);
        console.log("j-->",j);
        console.log("str[i+j] !== query[j]  ----  "+str[i+j]+"!=="+(query[j]));
        if (str[i+j] !== query[j]) {
          console.log("break");
          break;
        }
        console.log("no break");

        console.log("j === query.length - 1  ----  "+j+"==="+(query.length-1));
        if (j === query.length - 1) {
          return i;
        }
      }
    }
     return -1;
  }

/*   let searchParam = ""
  this.pattern = prompt('Introduce parametro de busqueda');
  indexOf2(this.pattern);

  function indexOf2(pattern) {
    let length = this.text.length() - this.pattern.length();

    for (int index = 0; index <= length; index++) {
        if (patternMatch(string, index, pattern)) {
            return index;
        }
    }

    return -1;
    }



  function patternMatch(index) {
    let i = index;
    for (let j = 0; j < this.text.length(); j++) {
        if (this.text.charAt(i) != this.text.charAt(j)) {
            return false;
        }
        i++;
    }

    return true;
    }  */

}

index3(){
  this.pattern3 = prompt('Introduce parametro de busqueda ');
  this.result3 = password(this.pattern3); // 3

  function password(text){
    let character="";
    let sol=[];
    let final_sol=[];
    console.log(text);

    for(let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if(isLetter(char)){
        character=character+char;
      }else{
        sol.push(character);
        character="";
      }
    }
    if(character!=""){
      sol.push(character);
    }

    //Descarto soluciones sin uppercase
    for (let i = 0; i < sol.length; i++) {
      let element = sol[i];
      if(countUpperCaseChars(element)>0){
        final_sol.push(sol[i]);
      }
    }

    //Compruebo longuitudes
    let max_len=0;
    for (let i = 0; i < final_sol.length; i++) {
      if(final_sol[i].length>max_len){
        max_len=final_sol[i].length;
      }
    }

    console.log(final_sol);

    if(final_sol.length<=0){
        return -1;
    }
    else{
      return max_len;
    }
  }

  function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

  function countUpperCaseChars(str) {
    var count=0,len=str.length;
    for(var i=0;i<len;i++) {
      if(/[A-Z]/.test(str.charAt(i))) count++;
    }
    return count;
  }
}


/* MyString myString = new MyString();

System.out.println(myString.indexOf(string, pattern));

pattern = "ghij";
System.out.println(myString.indexOf(string, pattern));

pattern = "asdf";
System.out.println(myString.indexOf(string, pattern));
}

public int indexOf(String string, String pattern) {
int length = string.length() - pattern.length();
for (int index = 0; index <= length; index++) {
    if (patternMatch(string, index, pattern)) {
        return index;
    }
}

return -1;
}

private boolean patternMatch(String string, int index, String pattern) {
int i = index;
for (int j = 0; j < pattern.length(); j++) {
    if (string.charAt(i) != pattern.charAt(j)) {
        return false;
    }
    i++;
}

return true;
} */


}
