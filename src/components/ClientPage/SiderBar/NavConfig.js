// component
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'propuestas',
    path: '/cliente-page/propuestas',
    icon: getIcon('eva:briefcase-fill'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill'),
  // },
  // {
  //   title: 'product',
  //   path: '/abogado-page/products',
  //   icon: getIcon('eva:briefcase-fill'),
  // },
  {
    title: 'documentos',
    path: '/cliente-page/documentos',
    icon: getIcon('eva:briefcase-fill'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  {
    title: 'cuenta',
    path: '/cliente-page/account',
    icon: getIcon('eva:people-fill'),
    // icon: getIcon('eva:lock-fill'),
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
