import {
  useContainer,
  createConnection,
  Connection,
  ConnectionOptions
} from 'typeorm'
import path from 'path'
import 'egg'
//
function handleConfig (config: any, baseDir: string) {
  const keys = ['entities', 'migrations', 'subscribers']
  for (const key of keys) {
    if (config[key]) {
      const newValue = config[key].map((item: string) => {
        item = path.join(baseDir, item)
        return item
        // return item.replace(/\.ts$/, '.js')
      })
      config[key] = newValue
    }
  }
  return config
}
//
async function createTypeORM (config, app) {
  let { baseDir } = app
  config = handleConfig(config, baseDir)
  console.log(app.baseDir, config)
  let connection = await createConnection(config)
  app.typeorm = connection
  return connection
}

export default async function (app) {
  app.coreLogger.log('[goat-plugin-typeorm] installed.')
  app.beforeStart(async () => {
    try {
      createTypeORM(app.config.typeorm, app)
      app.logger.info('[goat-plugin-typeorm]', '数据连接成功')
    } catch (error) {
      app.logger.error('[goat-plugin-typeorm]', '数据连接失败')
      app.logger.error(error)
    }
  })
}
