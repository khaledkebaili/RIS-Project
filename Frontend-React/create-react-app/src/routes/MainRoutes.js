import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// dashboard routing
const DashboardRIS = Loadable(lazy(() => import('views/DashBoardRIS/MyPatients')));

// utilities routing
const MenuDashboard = Loadable(lazy(() => import('views/DashBoardRIS/Typography')));
const Diagnostic = Loadable(lazy(() => import('views/DashBoardRIS/Diagnostic')));
const UtilsColor = Loadable(lazy(() => import('views/DashBoardRIS/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/DashBoardRIS/Shadow')));
const PatientDetails = Loadable(lazy(() => import('views/DashBoardRIS/PatientDetails')));
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
      path: 'dashboard',
      element: <MenuDashboard />
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
    },
    {
      path: '/patient-details/:patientName',
      element: <PatientDetails/>
    },
    {
      path: '/patient-details/:patientName/diagnostic/:id',
      element: <Diagnostic/>
    }
  ]
};

export default MainRoutes;