import {Suspense, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import { I18nProvider } from './components/i18n/i18nProvider'
import { LayoutSplashScreen, LayoutProvider } from './components/layout/core'
import { MasterInit } from './components/layout/MasterInit'
import { ThemeModeProvider } from './components/partials'
import { socketService } from './socket/socket.service'

const App = () => {

  useEffect(() => {
    socketService.setupSocketConnection();
  }, []);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
              <Outlet />
              <MasterInit />
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
