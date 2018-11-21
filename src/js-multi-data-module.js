/*!
 * JS MULTI_DATA_MODULE (JavaScript Library)
 *   js-multi-data-module.js
 * Version 0.0.5
 * Repository https://github.com/yama-dev/js-multi-data-module
 * Author yama-dev
 * Licensed under the MIT license.
 */

import Promise from 'es6-promise';

export class MULTI_DATA_MODULE {

  constructor(options={}){

    // Set Version.
    this.Version = '0.0.5';

    // Use for discrimination by URL.
    this.CurrentUrl = location.href;

    // Set config, options.
    this.Config = {
      elem      : options.elem||null,
      data_type : options.data_type||null,
      data_list : options.data_list||null,
      order     : options.order||'up', // 'down'
      jsonpCallback : options.jsonpCallback||'callback',
      fetch_timeout: 10000
    }

    // Data obj.
    this.DataFix = [];

    // Set callback functions.
    if(!options.on){
      options.on = {}
    }
    this.on = {
      Complete : options.on.Complete||'',
    }

    // Debug-Mode
    if(this.CurrentUrl.search(/localhost/) !== -1
      || this.CurrentUrl.search(/192.168/) !== -1)
    {
      this.DebugMode();
    }

    // For Jsonp data.
    if(this.Config.data_type === 'jsonp'){
      this.GetDataJsonp(this.Config.data_list);
    }

  }

  DebugMode(){
    console.log(this);
  }

  GetDataJsonp(dataAry){

    let count = 0;
    let countMax = dataAry.length;

    let param_ramd = new Date().getTime();

    let getDataFunc = ()=>{

      let promise = new Promise((resolve, reject)=>{
        let _script = document.createElement('script');
        if(dataAry[count].url.match(/\?.*$/)){
          _script.src = `${dataAry[count].url}&callback=${this.Config.jsonpCallback}&_=${param_ramd}`;
        } else {
          _script.src = `${dataAry[count].url}?callback=${this.Config.jsonpCallback}&_=${param_ramd}`;
        }
        document.body.appendChild(_script);
        window.callback = (response)=>{
          resolve(response);
        };
        setTimeout(()=>{ reject('error') }, this.Config.fetch_timeout);
      });

      promise
        .then((data)=>{
          // Success.

          let _data = eval('data' +'.'+ dataAry[count].hierarchy);

          let _func = dataAry[count].customFunction;

          let _data_array = this.CreateData(_data, _func)
          if(_data_array) this.DataFix = this.DataFix.concat(_data_array);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.OnComplete();
          }

        })
        .catch((err)=>{
          // Error.
          console.log(err);
        });
    }

    getDataFunc();

  }

  CreateData(data, func){
    return func(data);
  }

  OnComplete(){

    // Sort Data.
    if(this.Config.order === 'up'){
      this.DataFix.sort(function(a,b){
        a = new Date(a.date.replace(/\./g,'/'));
        b = new Date(b.date.replace(/\./g,'/'));
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
      });
    }
    if(this.Config.order === 'down'){
      this.DataFix.sort(function(a,b){
        a = new Date(a.date.replace(/\./g,'/'));
        b = new Date(b.date.replace(/\./g,'/'));
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
      });
    }

    if(this.on.Complete && typeof(this.on.Complete) === 'function') this.on.Complete(this.DataFix);

  }

}
