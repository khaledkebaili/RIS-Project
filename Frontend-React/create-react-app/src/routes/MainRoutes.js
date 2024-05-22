import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardRIS = Loadable(lazy(() => import('views/DashBoardRIS/MyPatients')));

// utilities routing
const MenuDashboard = Loadable(lazy(() => import('views/DashBoardRIS/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/DashBoardRIS/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/DashBoardRIS/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/DashBoardRIS/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/DashBoardRIS/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'menu',
      children: [
        {
          path: 'dashboard',
          element: <MenuDashboard />
        }
      ]
    },
    {
      path: 'menu',
      children: [
        {
          path: 'note',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'menu',
      children: [
        {
          path: 'calendar',
          element: <DashboardRIS />
        }
      ]
    }
    ,
    {
      path: 'menu',
      children: [
        {
          path: 'patient',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;