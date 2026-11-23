import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/root';
import Png from '../pages/converters/PNG';
import Jpg from '../pages/converters/JPG';
import Webp from '../pages/converters/WebP';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/PNG",
                element: <Png />,
            },{
                path: "/JPG",
                element: <Jpg />,
            },{
                path: "/WebP",
                element: <Webp />,
            },
        ]
    },
]);

export default router