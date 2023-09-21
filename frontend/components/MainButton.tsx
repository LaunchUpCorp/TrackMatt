import { Button } from 'tamagui';

type Props = {
  message: string;
  onPress?: (e: any) => void;
};

const MainButton: React.FC<Props> = ({ message, onPress }) => {
  return <Button themeInverse size='$6' my='$4' onPress={onPress}>{message}</Button>;
};

export default MainButton;
