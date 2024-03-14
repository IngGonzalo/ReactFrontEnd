import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AuthLayout } from "../layouts/auth/AuthLayout";
import { CategoriesPage, LoginPage } from "../pages";




export const router = createBrowserRouter([
    {
        element: <App/>,
        path: '/',
        children: [
            // RUTAS DASHBOARD
            {
                path: 'admin',
                children: [
                    {
                        path: 'categories',
                        element: <CategoriesPage/>
                    }
                ]
            },

            // RUTAS AUTH
            {
                path: 'auth',
                element: <AuthLayout/>,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage/>
                    }
                ]
            }
        
        ]

    }
]);