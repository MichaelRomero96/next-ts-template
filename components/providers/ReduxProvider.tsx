import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import store from '../../store';

interface ProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<ProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
