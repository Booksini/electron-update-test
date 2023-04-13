

let components = [

    "APISetting",
    "OneSetting",
    "PurchaseRecord",
    "IncomeStatistics",
    "AdvancedSettings"
    

]

let components2 = [

    "OperationLog",
    "AssetStatus"
]



//重新定义路由，实现多路由，可同时显示两个视图
//类型定义为any不然下面push会报错，因为下面的data属性与现在定义的属性不同
let routes:any = [

    {
        path: "/",
        component: () => import("../components/Main/AssetStatus.vue")

    },
    {
        path: "/OperationLog",
        component: () => import("../components/Main/OperationLog.vue")

    },
    {
        path: "/AssetStatus",
        component: () => import("../components/Main/AssetStatus.vue")

    },

]


//拼接出组合视图的路由
components2.forEach((item) => {

    components.forEach((item2) => {


        let data={} ;

        data["path"] = `/${item}-${item2}`

        data["components"] = {

            default: () => import(`../components/Main/${item}.vue`),

            "J": () => import(`../components/Main/${item2}.vue`),


        }

        routes.push(data)


    })

})


export default routes