import { makeStyles } from '../../../theme';

type AdjustLayout = 'flex-start' | 'center' | 'flex-end';

export interface FlexBoxStyleProps {
  justify?: AdjustLayout;
  alignItems?: AdjustLayout;
}

const useStyles = makeStyles<FlexBoxStyleProps>()(
  (theme, { justify, alignItems }) => ({
    root: {
      display: 'flex',
      justifyContent: justify || 'flex-start',
      alignItems: alignItems || 'flex-start',
    },
  })
);

export default useStyles;
