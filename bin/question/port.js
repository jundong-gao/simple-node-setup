export default () => {
    return {
        type: 'input',
        name: 'port', 
        default() {
            return 8989
        },
        message: '设置端口号'
    }
}