import { createRoot } from 'react-dom/client';
// Axios
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { QueryClient, QueryClientProvider } from 'react-query';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Apps
import { MetronicI18nProvider } from './components/i18n/Metronici18n';
import './components/assets/sass/style.react.scss';
import './components/assets/fonticon/fonticon.css';
import './components/assets/keenicons/duotone/style.css';
import './components/assets/keenicons/outline/style.css';
import './components/assets/keenicons/solid/style.css';
import './components/assets/sass/style.scss';
import { setupAxios, AuthProvider } from './features/auth';
import { AppRoutes } from './features/AppRoutes';

import { store } from './store/store';

const persistor = persistStore(store);

setupAxios(axios);
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MetronicI18nProvider>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </MetronicI18nProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
