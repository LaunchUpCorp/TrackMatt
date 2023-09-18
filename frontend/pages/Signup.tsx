import { YStack, Text } from 'tamagui';
import Inputbox from '../components/Inputbox';
import MainButton from '../components/MainButton';
import GoogleButton from '../components/GoogleButton';

export default function Signup() {
  return (
    <YStack
      theme='light'
      fullscreen
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Text fontSize='$8'>Sign Up</Text>
      <YStack width='75%' justifyContent='center' alignItems='center'>
        <Inputbox placeholder='Name' width='100%' />
        <Inputbox placeholder='Email' width='100%' />
        <Inputbox placeholder='Password' secureTextEntry width='100%' />
        <Inputbox placeholder='confirm Password' secureTextEntry width='100%' />
        <MainButton message='Create Account' />
      </YStack>
      <YStack justifyContent='center' alignItems='center'>
        <Text my='$4'>Or sign up with</Text>
        <GoogleButton />
      </YStack>
    </YStack>
  );
}
