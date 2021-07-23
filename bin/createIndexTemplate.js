import fs from 'fs'
import ejs from 'ejs'
import { fileURLToPath } from 'url'
import path from 'path'
import prettier from 'prettier'


export default (config) => {
    let __dirname = fileURLToPath(import.meta.url)
    let template = fs.readFileSync(path.resolve(__dirname, '../template/index.ejs'))
    let code = ejs.render(template.toString(), {
        framework: config.framework,
        port: config.port
    })
    return prettier.format(code, {parser: "babel"})
}