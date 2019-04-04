/*eslint no-console: "off"*/

import Promise from 'es6-promise';

export default class MULTI_DATA_MODULE {

  constructor(options={}){

    let configDefault = {
      data_type     : 'jsonp', // 'jsonp' 'json' 'html' 'xml'
      data_list     : null,
      order         : 'up', // 'down'
      orderProperty : 'date',
      filter        : false,
      empty         : false,
      jsonpCallback : 'callback',
      fetch_timeout : 10000
    };

    if(!options.data_list || !Array.isArray(options.data_list)){
      try {
        throw new Error('Not config "data_list"');
      } catch (e) {
        console.log(e.name + ': ' + e.message);
      }
      return false;
    }

    // Merge Config Settings.
    this.Config = Object.assign(configDefault, options);

    // Set Version.
    this.Version = process.env.VERSION;

    // Data obj.
    this.DataFix = [];
    this.DataList = {};

    // Set callback functions.
    if(!options.on){
      options.on = {};
    }
    this.On = {
      Update   : options.on.Update||'',
      Complete : options.on.Complete||''
    };

    // For Jsonp data.
    if(this.Config.data_type === 'jsonp'){
      this.GetDataJsonp(this.Config.data_list);
    }

    // For Json data.
    if(this.Config.data_type === 'json'){
      this.GetDataJson(this.Config.data_list);
    }

    // For Html data.
    if(this.Config.data_type === 'html' || this.Config.data_type === 'xml'){
      this.GetDataDocument(this.Config.data_list);
    }
  }

  GetDataJsonp(dataAry){

    let count = 0;
    let countMax = dataAry.length;

    let param_ramd = new Date().getTime();

    let getDataFunc = ()=>{

      let promise = new Promise((resolve, reject)=>{
        if(dataAry[count].url){

        let _script = document.createElement('script');
        if(dataAry[count].url.match(/\?.*$/)){
          _script.src = `${dataAry[count].url}&callback=${this.Config.jsonpCallback}&_=${param_ramd+count}`;
        } else {
          _script.src = `${dataAry[count].url}?callback=${this.Config.jsonpCallback}&_=${param_ramd+count}`;
        }

        document.body.appendChild(_script);
        window.callback = (response)=>{
          resolve(response);
        };
        setTimeout(()=>{ reject('error'); }, this.Config.fetch_timeout);

        } else {
          reject('error:not found data.');
        }
      });

      promise
        .then((data)=>{
          // Success.
          let _data = data;

          // Select data hierarchy.
          dataAry[count].hierarchy.split('.').map((item)=>{
            _data = _data[item];
          });

          // Set function to format data.
          if(dataAry[count].customFunction){
            _data = this.CreateData(_data, null, dataAry[count].customFunction);
          }

          if(_data){
            this.DataFix = this.DataFix.concat(_data);
            this.DataList[count] = _data;
          } else if(this.Config.empty){
            this.DataFix = this.DataFix.concat(['']);
            this.DataList[count] = [];
          }

          this.OnUpdate(this.DataList[count]);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.FormatData();
          }

        })
        .catch((err)=>{
          // Error.
          console.log(err);

          this.DataFix = this.DataFix.concat(['']);
          this.DataList[count] = [];

          this.OnUpdate(this.DataList[count]);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.FormatData();
          }
        });
    };

    getDataFunc();

  }

  GetDataJson(dataAry){

    let count = 0;
    let countMax = dataAry.length;

    let param_ramd = new Date().getTime();

    let getDataFunc = ()=>{

      let promise = new Promise((resolve, reject)=>{

        if(dataAry[count].url){

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status == 200) {
              resolve(JSON.parse(xhr.responseText));
            }

          }
        };

        let _url = '';
        if(dataAry[count].url.match(/\?.*$/)){
          _url = `${dataAry[count].url}&_=${param_ramd+count}`;
        } else {
          _url = `${dataAry[count].url}?_=${param_ramd+count}`;
        }
        xhr.onload = function() { };
        xhr.open('GET', _url, true);
        xhr.send(null);

        setTimeout(()=>{ reject('error'); }, this.Config.fetch_timeout);

        } else {
          reject('error:not found data.');
        }
      });

      promise
        .then((data)=>{
          // Success.
          let _data = data;

          // Select data hierarchy.
          dataAry[count].hierarchy.split('.').map((item)=>{
            _data = _data[item];
          });

          // Set function to format data.
          if(dataAry[count].customFunction){
            _data = this.CreateData(_data, null, dataAry[count].customFunction);
          }

          if(_data){
            this.DataFix = this.DataFix.concat(_data);
            this.DataList[count] = _data;
          } else if(this.Config.empty){
            this.DataFix = this.DataFix.concat(['']);
            this.DataList[count] = [];
          }

          this.OnUpdate(this.DataList[count]);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.FormatData();
          }

        })
        .catch((err)=>{
          // Error.
          console.log(err);

          this.DataFix = this.DataFix.concat(['']);
          this.DataList[count] = [];

          this.OnUpdate(this.DataList[count]);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.FormatData();
          }
        });
    };

    getDataFunc();

  }

  GetDataDocument(dataAry){
    let _that = this;

    let count = 0;
    let countMax = dataAry.length;

    let param_ramd = new Date().getTime();

    let getDataFunc = ()=>{

      let promise = new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status == 200) {

              let _obj;
              let _doc;

              if(_that.Config.data_type === 'html'){
                _obj = {
                  html: xhr.responseXML.body.innerHTML,
                  title: xhr.responseXML.title,
                  head: xhr.responseXML.head,
                  body: xhr.responseXML.body
                };
                _doc = xhr.responseXML.body;
              }

              if(_that.Config.data_type === 'xml'){
                _obj = {
                  html: xhr.responseXML,
                  title: null,
                  head: null,
                  body: xhr.responseXML
                };
                _doc = xhr.responseXML;
              }

              resolve([_doc, _obj]);
            }

          }
        };

        let _url = '';
        if(dataAry[count].url.match(/\?.*$/)){
          _url = `${dataAry[count].url}&_=${param_ramd+count}`;
        } else {
          _url = `${dataAry[count].url}?_=${param_ramd+count}`;
        }
        xhr.onload = function() { };
        xhr.open('GET', _url, true);
        xhr.responseType = 'document';
        xhr.send(null);

        setTimeout(()=>{ reject('error'); }, this.Config.fetch_timeout);
      });

      promise
        .then((data)=>{
          // Success.
          let _data = data[0];
          let _obj = data[1];

          // Set function to format data.
          if(dataAry[count].customFunction){
            _data = this.CreateData(_data, _obj, dataAry[count].customFunction);
          }

          if(_data){
            this.DataFix = this.DataFix.concat(_data);
            this.DataList[count] = _data;
          } else if(this.Config.empty){
            this.DataFix = this.DataFix.concat(['']);
            this.DataList[count] = [];
          }

          this.OnUpdate(this.DataList[count]);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.FormatData();
          }

        })
        .catch((err)=>{
          // Error.
          console.log(err);

          this.DataFix = this.DataFix.concat(['']);
          this.DataList[count] = [];

          this.OnUpdate(this.DataList[count]);

          count++;
          if(count < countMax){
            getDataFunc();
          } else {
            this.FormatData();
          }
        });
    };

    getDataFunc();

  }

  CreateData(data, obj, func){
    if(obj !== undefined){
      return func(data, obj);
    } else {
      return func(data);
    }
  }

  FormatData(){
    let _that = this;

    if(!Array.isArray(this.DataFix)){
      this.OnComplete();
      return false;
    }

    if(this.Config.filter){
      let _dataFix = [];
      this.DataFix.map((item)=>{
        if(item[_that.Config.orderProperty]) _dataFix.push(item);
      });
      this.DataFix = _dataFix;
    }

    // Sort Data.
    if(this.Config.order === 'up'){
      this.DataFix.sort(function(a,b){
        if(!a[_that.Config.orderProperty]) return 1;
        if(!b[_that.Config.orderProperty] ) return -1;
        a = new Date(a[_that.Config.orderProperty].replace(/\./g,'/'));
        b = new Date(b[_that.Config.orderProperty].replace(/\./g,'/'));
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
      });
    }
    if(this.Config.order === 'down'){
      this.DataFix.sort(function(a,b){
        if(!a[_that.Config.orderProperty]) return 1;
        if(!b[_that.Config.orderProperty] ) return -1;
        a = new Date(a[_that.Config.orderProperty].replace(/\./g,'/'));
        b = new Date(b[_that.Config.orderProperty].replace(/\./g,'/'));
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
      });
    }
    this.OnComplete();
  }

  OnUpdate(data){
    // Callback function.
    if(this.On.Update && typeof(this.On.Update) === 'function'){
      this.On.Update(data);
    }
  }

  OnComplete(){
    // Callback function.
    if(this.On.Complete && typeof(this.On.Complete) === 'function'){
      this.On.Complete(this.DataFix, this.DataList);
    }
  }

}
