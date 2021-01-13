import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial192333Navigator from '../features/Tutorial192333/navigator';
import NotificationList192305Navigator from '../features/NotificationList192305/navigator';
import Settings192304Navigator from '../features/Settings192304/navigator';
import Settings192296Navigator from '../features/Settings192296/navigator';
import UserProfile192294Navigator from '../features/UserProfile192294/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial192333: { screen: Tutorial192333Navigator },
NotificationList192305: { screen: NotificationList192305Navigator },
Settings192304: { screen: Settings192304Navigator },
Settings192296: { screen: Settings192296Navigator },
UserProfile192294: { screen: UserProfile192294Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
