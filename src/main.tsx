import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@styles/index.css'
import { Provider } from 'react-redux'
import { store } from '@store/index.ts'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
