import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CategoriesPage, LoginPage } from "../pages";
import { AuthLayout } from "../layouts";
import { RootLayout } from "../layouts/root/RootLayout";



export const router = createBrowserRouter([
    {
        element: <App/>,
        path: '/',
        children: [
            // RUTAS DASHBOARD
            {
                path: 'admin',
                element: <RootLayout/>,
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