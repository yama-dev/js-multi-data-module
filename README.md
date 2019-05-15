# MULTI DATA MODULE

<br>

## Feature

Get multi data library.

<br>

## Demo

- DemoPage -> [https://yama-dev.github.io/js-multi-data-module/examples/](https://yama-dev.github.io/js-multi-data-module/examples/)

## Installation,Download

- npm -> [https://www.npmjs.com/package/js-multi-data-module](https://www.npmjs.com/package/js-multi-data-module)

- Standalone(CDN) -> [https://cdn.jsdelivr.net/gh/yama-dev/js-multi-data-module@v0.4.9/dist/js-multi-data-module.js](https://cdn.jsdelivr.net/gh/yama-dev/js-multi-data-module@v0.4.9/dist/js-multi-data-module.js)

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
      Update: function(data){
        console.log(data);
      },
      Complete: function(data, list){
        console.log(data, list);
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

___

**For Developer**

## Contribution

1. Fork it ( https://github.com/yama-dev/js-multi-data-module/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

<br>

## Develop

### at Development

Install node modules.

``` bash
$ npm install
```

Run npm script 'develop'

``` bash
$ npm run develop
```

Run npm script 'production'

``` bash
$ npm run production
```

<br>

## Licence

[MIT](https://github.com/yama-dev/js-multi-data-module/blob/master/LICENSE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)

