import {combineReducers} from 'redux' // данная функция вернет нам один новый Reducer, который будет включат в себя все редюсы, которые мы тут перечислим.

import Counter1 from './reducers/Counter1'
import Counter2 from './reducers/Counter2'

export default combineReducers({
    Counter1, Counter2
})