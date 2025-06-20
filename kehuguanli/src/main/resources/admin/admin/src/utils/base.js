const base = {
    get() {
        return {
            url : "http://localhost:8080/kehuguanli/",
            name: "kehuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kehuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "客户管理系统"
        } 
    }
}
export default base
