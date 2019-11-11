import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'fa fa-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Subscribers',
    icon: 'fa fa-users',
    link: '/pages/subscribers',
  },
  {
    title: 'Files',
    link: '/pages/files/file-list',
    icon: 'fa fa-film',
  },
  {
    title: 'Payments',
    link: '/pages/payments',
    icon: 'fa fa-money-bill-alt',
  },
  {
    title: 'Analytics',
    icon: 'fa fa-chart-bar',
    link: '/pages/analytics',
  },
  {
    title: 'Security',
    icon: 'fa fa-shield-alt',
    children: [
      {
        title: 'Activity Logs',
        link: '/pages/security/activity-log',
        icon: 'fa fa-user-secret',
      },
      {
        title: 'Sessions',
        link: '/pages/security/sessions',
        icon: 'fa fa-id-card',
      },
    ],
  },
  {
    title: 'Support',
    icon: 'fa fa-life-ring',
    children: [
      {
        title: 'Feedbacks',
        link: '/pages/support/feedback',
        icon: 'fa fa-comment',
      },
      {
        title: 'Tickets',
        link: '/pages/support/tickets',
        icon: 'fa fa-ticket-alt',
      },
    ],
  },
  {
    title: 'Log out',
    icon: 'fa fa-sign-out-alt',
    link: '/pages/logout',
  },
];
