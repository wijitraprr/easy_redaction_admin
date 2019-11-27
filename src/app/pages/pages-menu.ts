import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'fa fa-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Vessels',
    icon: 'fa fa-ship',
    link: '/pages/vassels',
  },
  {
    title: 'Ports',
    link: '/pages/ports',
    icon: 'fa fa-flag',
  },
  {
    title: 'Maps',
    icon: 'fa fa-map-marked-alt',
    link: '/pages/maps/searchmap',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Report',
    icon: 'fa fa-file-alt',
    link: '/pages/reports',
  },
   {
    title: 'Log out',
    icon: 'fa fa-sign-out-alt',
    link: '/pages/logout',
  },
];
