// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill,  } from '@tabler/icons-react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import FolderSharedIcon from '@mui/icons-material/FolderSharedOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonthOutlined';
// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  AccountBoxIcon,
  DashboardIcon,
  DescriptionIcon,
  FolderSharedIcon,
  CalendarMonthIcon
  
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Menu = {
  id: 'Menu',
  title: 'Menu',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Dashboard',
      type: 'item',
      url: '/menu/dashboard',
      icon: icons.DashboardIcon,
      breadcrumbs: false
    },
    {
      id: 'patient',
      title: 'My Patients',
      type: 'item',
      url: '/menu/patient',
      icon: icons.FolderSharedIcon,
      breadcrumbs: false
    },
    {
      id: 'note',
      title: 'My notes',
      type: 'item',
      url: '/menu/note',
      icon: icons.DescriptionIcon,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: 'My calendar',
      type: 'item',
      url: '/menu/calendar',
      icon: icons.CalendarMonthIcon,
      breadcrumbs: false
    },

  ]
};

export default Menu;
