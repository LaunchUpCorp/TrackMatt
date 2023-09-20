import { YStack, Text } from 'tamagui';
import Logo from '../components/Logo';
import MainButton from '../components/MainButton';
import LinkSmall from '../components/LinkSmall';
import type { RootStackParamList } from '../navigation.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>
}

export default function Landing({ navigation }: Props) {
  function navigateSignup() {
    navigation.navigate('Signup');
  }
  function navigateSignin() {
    navigation.navigate('Signin');
  }
  return (
    <YStack fullscreen justifyContent="space-evenly" alignItems="center">
      <Text fontSize="$8" color="black">
        Welcome To TrackMatt
      </Text>
      <Logo />
      <YStack w="full" justifyContent="center" alignItems="center">
        <MainButton message="Create Account" onPress={navigateSignup} />
        <LinkSmall color="blue" message="Sign in" onPress={navigateSignin} />
      </YStack>
    </YStack>
  );
}
