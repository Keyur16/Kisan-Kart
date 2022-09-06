export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return { ...state, sort: action.payload };
        case 'FILTER_BY_STOCK':
            return { ...state, byStock: !state.byStock };
        case 'FILTER_BY_SEARCH':
            return { ...state, searchQuery: action.payload };
        case 'CLEAR_ALL_FILTERS':
            return {
                byStock: false,
                searchQuery: "",
            };
        case 'SORT_BY_CATEGORY':
            return { ...state, byCategory: action.payload }

        default:
            return state;
    }

}