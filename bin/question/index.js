import inquirer from 'inquirer'
import packageName from './packageName.js'
import port from './port.js'
import framework from './framework.js'


export default () => {
    return inquirer.prompt([
        packageName(),
        port(),
        framework()
    ])
}