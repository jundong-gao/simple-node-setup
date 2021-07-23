#! /usr/bin/env node

import fs from 'fs'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'
import question from './question/index.js'
import { createConfig } from './config.js'
import execa from 'execa'
import chalk from 'chalk'

const answer = await question()


let config = createConfig(answer)


// 1. 创建目录
console.log(chalk.blue(`1. 创建目录 >>>>>>> ${config.packageName}`))
fs.mkdirSync(rootPath())
// 2. 创建入口文件 index.js
console.log(chalk.blue(`2. 创建入口文件 >>>>>>> index.js`));
fs.writeFileSync(`${rootPath()}/index.js`, createIndexTemplate(config))
// 3. 创建package.json
console.log(chalk.blue(`3. 创建package.json`));
fs.writeFileSync(`${rootPath()}/package.json`, createPackageTemplate(config))
// 4. 安装依赖
console.log(chalk.blue(`4. 安装依赖`));
execa.sync('npm', ['install'], {
    cwd: rootPath(),
    stdio: [2, 2, 2]
})
console.log(chalk.blue(`
    安装成功，执行以下命令

    cd ./${config.packageName}
    node index.js
`));




function rootPath () {
    return `./${config.packageName}`
}






