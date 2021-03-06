import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile192405Navigator from '../features/UserProfile192405/navigator';
import Tutorial192404Navigator from '../features/Tutorial192404/navigator';
import NotificationList192376Navigator from '../features/NotificationList192376/navigator';
import Settings192375Navigator from '../features/Settings192375/navigator';
import Settings192367Navigator from '../features/Settings192367/navigator';
import UserProfile192365Navigator from '../features/UserProfile192365/navigator';
import UserProfile192334Navigator from '../features/UserProfile192334/navigator';
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
UserProfile192405: { screen: UserProfile192405Navigator },
Tutorial192404: { screen: Tutorial192404Navigator },
NotificationList192376: { screen: NotificationList192376Navigator },
Settings192375: { screen: Settings192375Navigator },
Settings192367: { screen: Settings192367Navigator },
UserProfile192365: { screen: UserProfile192365Navigator },
UserProfile192334: { screen: UserProfile192334Navigator },
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
