import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import Landing from './pages/Landing';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Landing />
    </TamaguiProvider>
  );
}
