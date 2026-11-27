import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/root';
import Converter from "../pages/Converter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/PNG",
                element: <Converter display="PNG" type="image/png"/>,
            },{
                path: "/JPEG",
                element: <Converter display="JPEG" type="image/jpeg"/>,
            },{
                path: "/WebP",
                element: <Converter display="WebP" type="image/webp"/>,
            },
        ]
    },
]);

export default router