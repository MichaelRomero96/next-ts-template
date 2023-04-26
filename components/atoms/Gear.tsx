import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../theme';

const Gear = () => {
  const { colors } = useTheme();
  return (
    <FontAwesomeIcon
      color={colors.base.primary}
      spin
      icon={solid('cog')}
      size="5x"
    />
  );
};

export default Gear;
