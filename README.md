# svgdemo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Steps
```
1. npm install svg-sprite-loader -D
2. src-utils-validate
   在公共方法中创建isExternal函数，根据传来的地址来判断是否为外链
2. src-components-SvgIcon-index.vue 
   创建SvgIcons的组件，包含了内部文件和外链的判断
3. src-icons-svg
   添加静态svg文件
   src-icons-index.js
   利用webpack的require.context语法，将所有svg图片都动态导入，同时注册组件
5. 将上述index.js文件导入main.js文件，直接暴露
4. 在vue.config.js中，或者webpack配置文件中，添加svg-sprite-loader配置
5. 完成
```
