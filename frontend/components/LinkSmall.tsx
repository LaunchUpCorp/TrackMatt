import { Button } from 'tamagui';

// type Props = {
//   message: string;
//   color?: string;
//   onPress?: (e: any) => void;
// };
type Props = React.ComponentProps<typeof Button>

const LinkSmall: React.FC<Props> = ({children,...props}) => {
  return (
    <Button unstyled {...props}>
      {children}
    </Button>
  );
};

export default LinkSmall;
