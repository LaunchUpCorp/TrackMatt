import { Button } from 'tamagui';

type Props = {
  message: string;
  color?: string;
  onPress?: (e: any) => void;
};

const LinkSmall: React.FC<Props> = ({ message, color, onPress }) => {
  return (
    <Button color={color} unstyled onPress={onPress}>
      {message}
    </Button>
  );
};

export default LinkSmall;
