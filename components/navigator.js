import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import Champions from '../screens/Champions';
import MainMenu from '../screens/MainMenu';
import FreeRotation from '../screens/Rotation';
import RankLoL from '../screens/RankLoL';
import RankTFT from '../screens/RankTFT';
import ChampionDescription from '../screens/ChampionDescription';

const Stack = createStackNavigator(
  {
    Main: {screen: MainMenu},
    Champions: {screen: Champions},
    ChampionDescription: {screen: ChampionDescription},
    Rotation: {screen: FreeRotation},
    RankLoL: {screen: RankLoL},
    RankTFT: {screen: RankTFT},
  },
  {
    headerMode: 'none',
  },
);
const Navigator = createAppContainer(
  createSwitchNavigator(
    {
      App: Stack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default Navigator;
