import React from 'react'
import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import router from '@/router'
import Layout from '@/components/Layout'
import { App } from 'antd';
import { BrowserRouter } from "react-router-dom";
import 'normalize.css'
import '@/assets/fonts/fonts.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    // <RouterProvider router={router}/>
    // <Layout/>
    <BrowserRouter>
        <App>     
            <Layout />
        </App>
    </BrowserRouter>
    
)
