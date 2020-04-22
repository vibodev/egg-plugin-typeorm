# goat-plugin-typeorm

## 安装
在egg项目目录执行
```js
yarn add goat-plugin-typeorm typeorm mysql
```

## 配置
plugin.ts
```ts
import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  typeorm: {
    enable: true,
    package: 'egg-plugin-typeorm'
  }
}

export default plugin

```