import { YStack, Text } from 'tamagui';
import Logo from '../components/Logo';
import MainButton from '../components/MainButton';
import LinkSmall from '../components/LinkSmall';

export default function Landing() {
  return (
    <YStack fullscreen justifyContent="space-evenly" alignItems="center">
      <Text fontSize='$8' color="black">Welcome To TrackMatt</Text>
      <Logo />
      <YStack w='full' justifyContent='center' alignItems='center'>
        <MainButton message="Create Account" />
        <LinkSmall color='blue' message="Sign in" />
      </YStack>
    </YStack>
  );
}
