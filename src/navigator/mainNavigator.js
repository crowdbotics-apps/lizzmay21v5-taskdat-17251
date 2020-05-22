import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings50143Navigator from '../features/Settings50143/navigator';
import Settings50141Navigator from '../features/Settings50141/navigator';
import SignIn250139Navigator from '../features/SignIn250139/navigator';
import UserProfile50122Navigator from '../features/UserProfile50122/navigator';
import Tutorial50121Navigator from '../features/Tutorial50121/navigator';
import NotificationList50093Navigator from '../features/NotificationList50093/navigator';
import Settings50092Navigator from '../features/Settings50092/navigator';
import Settings50084Navigator from '../features/Settings50084/navigator';
import UserProfile50082Navigator from '../features/UserProfile50082/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings50143: { screen: Settings50143Navigator },
Settings50141: { screen: Settings50141Navigator },
SignIn250139: { screen: SignIn250139Navigator },
UserProfile50122: { screen: UserProfile50122Navigator },
Tutorial50121: { screen: Tutorial50121Navigator },
NotificationList50093: { screen: NotificationList50093Navigator },
Settings50092: { screen: Settings50092Navigator },
Settings50084: { screen: Settings50084Navigator },
UserProfile50082: { screen: UserProfile50082Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
