/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-07 11:59:22
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-07 11:59:30
 */
export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}