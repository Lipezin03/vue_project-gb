// import AddCosts from "@/pages/AddCosts"
import AddCostsForm from "@/components/AddCostsForm"
// import Page404 from "@/pages/Page404"

import { createRouter } from "vue-router"
import { createWebHashHistory } from "vue-router"




const routes = [
    {
        path: "/add/payment/Food?value=:value",
        name: "AddCostsForm",
        component: AddCostsForm
    },



    // Почему не работает при этом знаке "*" Я сделал как в метедиче??

    // {
    //     path: '*',
    //     name: "Page404",
    //     component: Page404
    // },



]


const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router