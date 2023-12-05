import {configureStore} from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})
// Create configStore func() with reducer