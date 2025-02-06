import './App.css';
import Router from './config/router';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Router />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
