//<reference types="typescript" />
import { Connection, ConnectionOptions } from 'typeorm'
import 'egg'
// 定义
export declare module 'egg' {
  // 扩展 app
  interface Application {
    typeorm: Connection
  }
  // 扩展 context
  interface Context {

  }
  // 扩展你的配置
  interface EggAppConfig {
    typeorm: ConnectionOptions
  }
}
