import { createStore } from "vuex"
import expenses from "./modules/expenses.js"



export default createStore({

    modules: {
        expenses: expenses
    }


})