import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await fetch('./data.json')
      const data = await res.json()
      return data
    }
  )

const goodsSlice = createSlice({
    initialState:{
        goods: [],
        cartGoods: [],
        isLoading:null,
        error: false
    },
    name:'goods',
    reducers:{
        addToCart:(state,action) => {
            return { ...state, cartGoods: [...state.cartGoods, action.payload] }
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
          state.goods = action.payload
          state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state) => {
          state.isLoading = false
          state.error = true
        })
      },
})


export const {addToCart} =  goodsSlice.actions

export default goodsSlice.reducer