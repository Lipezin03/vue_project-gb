export default {



    state: {
        costsList: [],
        allNumberofPages: 0,
        startListShow: 0,
        frontier: 5,
        endListShow: 5,
        showCurrentList: [],

        itemChangingInCosts: [],

        currentNumberOfPage: 1,

        categoryList: [],


        showFormAddCosts: false,
        showFormAddCategory: false,
        showFormChangeItemInCosts: false,
        showContextMenu: false,



        allFetchPage: 0,
        currentFetchNumberOfPage: 1,

        classIsActivInPagination2: 0,


        autoCostsFood: 200,
        autoCostsTransport: 50,
        autoCostsEntertainment: 2000,



    },

    getters: {
        getCostsList(state) {
            return state.costsList
        },

        getFullCostsValue(state) {
            return state.costsList.reduce((res, cur) => res + cur.value, 0)
        },

        getCostsLength(state) {
            return state.costsList.length;
        },
        getCurrentNumberOfPage(state) {
            return state.currentNumberOfPage;
        },

        getAllNumberOfPages(state) {
            return state.allNumberofPages = Math.ceil(state.costsList.length / 5)
        },

        getShowCurrentList(state) {
            return state.showCurrentList = state.costsList.filter((el, idx) => {
                return idx >= state.startListShow && idx < state.endListShow;
            })
        },

        getStartListShow(state) {
            return state.startListShow;
        },




        getCategoryList(state) {
            return state.categoryList
        },




        getShowFormAddCategory(state) {
            return state.showFormAddCategory;
        },
        getShowFormAddCosts(state) {
            return state.showFormAddCosts;
        },
        getShowFormChangeItemInCosts(state) {
            return state.showFormChangeItemInCosts;
        },
        getShowContextMenu(state) {
            return state.showContextMenu;
        },




        getAllFetchPage(state) {
            return state.allFetchPage;
        },

        getCurrentFetchNumberOfPage(state) {
            return state.currentFetchNumberOfPage;
        },



        getClassIsActivInPagination2(state) {
            return state.classIsActivInPagination2
        },



        getAutoCostsFood(state) {
            return state.autoCostsFood;
        },
        getAutoCostsTransport(state) {
            return state.autoCostsTransport;
        },
        getAutoCostsEntertainment(state) {
            return state.autoCostsEntertainment;
        },


    },

    mutations: {
        setCostsListData(state, data) {
            const currentData = state.costsList.find(el => {
                return el.id === data[1].id
            })
            if (currentData) {
                return
            }
            state.costsList = [...data, ...state.costsList];
        },
        addDataToCostsList(state, data) {
            state.costsList = [...data, ...state.costsList]
        },
        deleteCostsInCostsList(state, data) {
            state.costsList = state.costsList.filter(el => {
                return el.id !== data.id
            })
        },
        cangeItemImCosts(state, data) {
            let currentItem = state.itemChangingInCosts;
            let newData = data;
            Object.assign(currentItem, newData)
        },




        changeCurrentNumberOfPage(state, data) {
            state.currentNumberOfPage = data;
        },



        changeShowMainListAndStartList(state) {
            state.endListShow = 5;
            if (state.currentNumberOfPage === 1) {
                state.startListShow = 0;
                state.endListShow = 5;
            } else {
                state.endListShow = state.endListShow * state.currentNumberOfPage;
                state.startListShow = state.endListShow - state.frontier
            }

        },



        setCategories(state, data) {
            if (!Array.isArray(data)) {
                data = [data]
            }
            state.categoryList.push(...data)
        },



        changeShowFormAddCategory(state, data) {
            state.showFormAddCategory = data;
        },
        changeShowFormAddCosts(state, data) {
            state.showFormAddCosts = data;
        },
        changeShowFormChangeItemInCosts(state, data) {
            state.showFormChangeItemInCosts = data;
        },
        changeShowContextMenu(state, data) {
            state.showContextMenu = data
        },




        setAllFetchPage(state, data) {
            state.allFetchPage = data.length;
        },
        setFetchPage(state, data) {
            state.currentFetchNumberOfPage = data;
        },



        addItemChangingToCosts(state, data) {
            state.itemChangingInCosts = data;
        },



        cangeClassIsActivInPagination2(state, data) {
            state.classIsActivInPagination2 = data;
        }


    },

    actions: {
        fetchData({ commit }, numberOfPage = undefined) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(
                        {

                            "page1": [
                                { "id": 1, "date": "2021-09-23", "category": "Food", "value": 169 },
                                { "id": 2, "date": "2021-08-22", "category": "Navigation", "value": 50 },
                                { "id": 3, "date": "2021-07-21", "category": "Sport", "value": 450 }
                            ],
                            "page2": [
                                { "id": 4, "date": "2021-06-19", "category": "Entertaiment", "value": 969 },
                                { "id": 5, "date": "2021-05-16", "category": "Education", "value": 1500 },
                                { "id": 6, "date": "2021-04-03", "category": "Food", "value": 200 }
                            ],
                            "page3": [
                                { "id": 7, "date": "2021-06-04", "category": "Entertaiment", "value": 969 },
                                { "id": 8, "date": "2020-11-10", "category": "Education", "value": 1500 },
                                { "id": 9, "date": "2020-11-03", "category": "Food", "value": 200 }
                            ],
                        }


                    )
                }, 1000)
            })
                .then(data => {
                    const allFetchPage = Object.keys(data);
                    commit("setAllFetchPage", allFetchPage);
                    if (!numberOfPage) {
                        return;
                    }
                    commit("setCostsListData", data["page" + numberOfPage])
                })
        },

        loadCategories({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Transport', 'Education', 'Entertainment'])
                }, 1000)
            })
                .then(res => {
                    commit('setCategories', res)
                })
        },

    },

    namespaced: true,
}