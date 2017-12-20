import { Component, OnInit} from '@angular/core';
import  $ from 'jquery';
@Component({
  selector: 'app-test-wrapper',
  templateUrl: './test-wrapper.component.html',
  styleUrls: ['./test-wrapper.component.css']
})
export class TestWrapperComponent implements OnInit  {


  msg4: any;

  result1: any;
  result2: any;
  array: any = [];

  msg3: any;

  modulo: any = (function () {
    // Public
    return {
      setMessage: function () {
        this.message = prompt('Introduce un mensaje');
      },

      getMessage: function () {
        return this.message;
      },

      alertMsg: function () {
        return alert(this.message);
      },

      getDefaultMsg: function () {
        return "Mensaje de JQuery";
      },

      getMsgJqueryAlert: function () {
        return alert("Mensaje de JQuery");
      }
    }
  }());

  constructor() {}

  ngOnInit() {

/*     $("#BtnPrueba").click(function(){
      console.log(this.modulo);
      this.modulo.alertJQueryMsg();
  }); */
  }

open1() {
  let numbers1 = [];
  let numbers2 = [];

  for (var i = 0; i < 3; i++) {
    numbers2.push(prompt('Introduce 3 números. Entra un número ' + (i + 1)));
  }
  this.array = numbers2;

  let numbers = [34, 2, -3, 42, 7, 8];
  this.result1 = Math.max.apply(null, numbers); // 42
  this.result2 = Math.max.apply(null, numbers2);

}

open2() {
  let myWindow = window.open("", "_blank", "width=500, height=500");
}

open3() {
  this.modulo.setMessage();
  this.modulo.alertMsg();
  this.msg3 = this.modulo.getMessage();
}

open4() {
}


}

