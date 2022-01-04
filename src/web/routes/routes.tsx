
import type {Route} from "react-location";
import { HomeLanding } from "../modules/home/pages";

const routes:Route[] = [
    {
        path:'/',
        element: <HomeLanding/>
    }
];

export default routes;