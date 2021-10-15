
import AddCostsAuto from "@/pages/AddCostsAuto"
import Main from "@/pages/Main"
import Page404 from "@/pages/Page404"

import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router"




const routes = [


    {
        path: "/",
        name: "Main",
        component: Main,
        children: [
            {
                path: "/add/payment/Food",
                name: "Food",
                component: AddCostsAuto
            },
            {
                path: "/add/payment/Transport",
                name: "Transport",
                component: AddCostsAuto
            },
            {
                path: "/add/payment/Entertainment",
                name: "Entertainment",
                component: AddCostsAuto
            },

            {
                path: '/:pathMatch(.*)*',
                name: "Page404",
                component: Page404
            },
        ]
    },

    {
        path: '/Calculator',
        name: "Calculator",
        component: () => import("@/components/Calculator")
    },


    {
        path: '/:pathMatch(.*)*',
        name: "Page404",
        component: Page404
    },



]


const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router