// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard: NavItemType = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.DashboardOutlined,
      children: [
        {
          id: 'default',
          title: <FormattedMessage id="default" />,
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'bond-market',
          title: <FormattedMessage id="bond-market" />,
          type: 'item',
          url: '/dashboard/bond-market'
        },
        {
          id: 'commodities',
          title: <FormattedMessage id="commodities" />,
          type: 'item',
          url: '/dashboard/commodities'
        },
        {
          id: 'cpi',
          title: <FormattedMessage id="cpi" />,
          type: 'item',
          url: '/dashboard/cpi'
        },
        {
          id: 'currencies',
          title: <FormattedMessage id="currencies" />,
          type: 'item',
          url: '/dashboard/currencies'
        },
        {
          id: 'markets',
          title: <FormattedMessage id="markets" />,
          type: 'item',
          url: '/dashboard/markets'
        },
        {
          id: 'mortgages',
          title: <FormattedMessage id="mortgages" />,
          type: 'item',
          url: '/dashboard/mortgages'
        },
        {
          id: 'national-data',
          title: <FormattedMessage id="national-data" />,
          type: 'item',
          url: '/dashboard/national-data'
        },
        {
          id: 'us-macro-data',
          title: <FormattedMessage id="us-macro-data" />,
          type: 'item',
          url: '/dashboard/us-macro-data'
        },
        /*{
          id: 'playground',
          title: <FormattedMessage id="playground" />,
          type: 'item',
          url: '/dashboard/playground'
        },*/
        /*{
          id: 'components',
          title: <FormattedMessage id="components" />,
          type: 'item',
          url: '/components-overview/buttons',
          icon: icons.GoldOutlined,
          target: true,
          chip: {
            label: 'new',
            color: 'primary',
            size: 'small',
            variant: 'combined'
          }
        }*/
      ]
    }
  ]
};

export default dashboard;
