export default () => {
    return {
        type: 'input',
        name: 'packageName',
        message: '设置项目名称',
        validate(val) {
            if(val) return true
            return '请输入项目名称'
        }
    }
}