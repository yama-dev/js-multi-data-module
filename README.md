# MULTI DATA MODULE

<br>

## Feature

Get multi data library.

<br>

## Demo

- DemoPage -> [https://yama-dev.github.io/js-multi-data-module/examples/](https://yama-dev.github.io/js-multi-data-module/examples/)

## Installation,Download

- npm -> [https://www.npmjs.com/package/js-multi-data-module](https://www.npmjs.com/package/js-multi-data-module)

- Standalone(CDN) -> [https://cdn.jsdelivr.net/gh/yama-dev/js-multi-data-module@v0.5.0/dist/js-multi-data-module.js](https://cdn.jsdelivr.net/gh/yama-dev/js-multi-data-module@v0.5.0/dist/js-multi-data-module.js)

- Zip -> [yama-dev/js-multi-data-module](https://github.com/yama-dev/js-multi-data-module/releases/latest)

<br>

## Using

### NPM Usage

``` bash
# install npm.
npm install --save js-multi-data-module
```

``` javascript
// import.
import MULTI_DATA_MODULE from 'js-multi-data-module';
```

### Basic Standalone Usage

``` html
<script src="./js-multi-data-module.js"></script>
<script>
  let MDM =  new MULTI_DATA_MODULE({
    data_type: 'jsonp',
    data_list: [
      {
        url:'./sample.json',
        hierarchy: 'items'
      }
    ],
    on: {
      Complete: function(data,list){
        console.log(data,list);
      }
    }
  });
</script>
```

### Advanced Usage

``` html
<script src="./js-multi-data-module.js"></script>
<script>
  let MDM =  new MULTI_DATA_MODULE({
    order: 'down',
    orderProperty: 'pubDate',
    filter: true,
    jsonpCallback : 'callback',
    fetch_timeout : 10000,
    data_type: 'jsonp',
    data_list: [
      {
        url:'./sample.json',
        hierarchy: 'items'
      },
      {
        url:'./sample.object.json',
        hierarchy: 'items.list', // items = { list: [...] }
      },
      {
        url:'./sample.array.json',
        hierarchy: 'items.0', // items[0]
      }
    ],
    on: {
      Update: function(data, count){
        console.log(data, count);
      },
      Complete: function(data, list){
        console.log(data, list);
      },
      Fail: function(err){
        console.log(err);
      }
    }
  });
</script>
```

<br>

## API

### Options

| Parameter | Type   | Default      | Description |
| :---      | :---:  | :---:        | :---        |
| data_type | string | - ※省略不可 |             |
| data_list | object | - ※省略不可 |             |

<br><br><br>

## Dependencies

none

<br><br><br>

## Licence

[MIT](https://github.com/yama-dev/js-multi-data-module/blob/master/LICENSE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)

