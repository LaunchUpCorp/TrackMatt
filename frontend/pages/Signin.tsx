import { Text, YStack } from "tamagui";
import Inputbox from "../components/Inputbox";
import MainButton from "../components/MainButton";
import GoogleButton from "../components/GoogleButton";
import Logo from "../components/Logo";

export default function Signin () {
  return (
    <YStack
      theme='light'
      fullscreen
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Text fontSize='$10'>Sign In</Text>
      <Logo />
      <YStack width='75%' justifyContent='center' alignItems='center'>
        <Inputbox placeholder='Email' width='100%' />
        <Inputbox placeholder='Password' secureTextEntry width='100%' />
        <MainButton message='Login' />
      </YStack>
      <YStack justifyContent='center' alignItems='center'>
        <Text my='$4'>Or sign in with</Text>
        <GoogleButton signin />
      </YStack>
    </YStack>
  );
} 
