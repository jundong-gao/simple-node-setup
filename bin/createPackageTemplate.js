import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'url'
import path from 'path'

export default (config) => {
    let __dirname = fileURLToPath(import.meta.url)
    let template = fs.readFileSync(path.resolve(__dirname, '../template/package.ejs'))
    const code = ejs.render(template.toString(), {
        packageName: config.packageName,
        framework: config.framework
    })
    return code
}