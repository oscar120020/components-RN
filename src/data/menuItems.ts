import {MenuItem} from '../interfaces/menuItemInterface';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'phone-landscape-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slide Screen',
    icon: 'exit-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Change Theme',
    icon: 'color-palette-outline',
    component: 'ChangeThemeScreen',
  },
];
