import { config, GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import Landing from './pages/Landing';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Landing />
    </GluestackUIProvider>
  );
}
