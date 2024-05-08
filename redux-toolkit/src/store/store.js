import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './reducer'

const store = configureStore({
    reducer: {
        goods: goodsSlice

    }
})

export default store