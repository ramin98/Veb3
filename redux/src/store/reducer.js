let intialState = {
    goods: [],
    cartGoods: []
}

export function getFetch() {
    return function(dispatch) {
        fetch('./data.json')
        .then((res) => res.json())
        .then((data) => dispatch({type:'GET DATA', payload:data}))
    } 
}

function reducer(state = intialState, action) {
    if (action.type === 'ADD TO CART') {
        return { ...state, cartGoods: [...state.cartGoods, action.payload] }
    }
    else if(action.type === 'GET DATA'){
        return { ...state, goods: action.payload }

    }
    return { ...state }
}

export default reducer