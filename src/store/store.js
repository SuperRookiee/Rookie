import { configureStore } from "@reduxjs/toolkit";
import MusicSlice from './slices/MusicSlice';

const store = configureStore({
    reducer: {
        music: MusicSlice
    },

    // 비동기 미들웨어 추가 (Ajax처리가 필요한 경우만 설정)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
});

export default store;