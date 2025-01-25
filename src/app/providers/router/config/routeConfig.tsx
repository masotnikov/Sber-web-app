import {RouteProps} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {SavingsPage} from "@/pages/SavingsPage";
import PaymentsPage from "@/pages/PaymentsPage/ui/PaymentsPage";
import {HistoryPage} from "@/pages/HistoryPage";
import {AppRoutes} from "@/shared/const/router";

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.SAVINGS]: '/savings',
    [AppRoutes.PAYMENTS]: '/payments',
    [AppRoutes.HISTORY]: '/history',
    [AppRoutes.NOT_FOUND]: '*',
}

export const RouteConfig: RouteProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    {
        path: RoutePath[AppRoutes.SAVINGS],
        element: <SavingsPage/>
    },
{
        path: RoutePath[AppRoutes.PAYMENTS],
        element: <PaymentsPage/>
    },
    {
        path: RoutePath[AppRoutes.HISTORY],
        element: <HistoryPage/>
    },

]