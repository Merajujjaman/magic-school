import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs';
import AuthProvider from './Providers/AuthProvider';
import  { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router}></RouterProvider>

      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
