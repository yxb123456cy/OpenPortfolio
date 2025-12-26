import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import router from './routers'
import './styles/global.scss'
// import './index.css' // We use global.scss instead

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          fontSize: 16,
          borderRadius: 8,
        },
        components: {
          Button: {
            controlHeight: 40,
            controlHeightLG: 48,
          },
          Card: {
            borderRadiusLG: 12,
          }
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
