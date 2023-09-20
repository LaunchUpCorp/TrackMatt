import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import Landing from './pages/Landing';
import Signup from './pages/Signup';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Landing />
    </TamaguiProvider>
  );
}
