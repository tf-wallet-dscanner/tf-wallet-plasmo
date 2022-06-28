import React from 'react';
import 'react-devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MemoryRouter } from 'react-router-dom';

import { Routing } from '~pages';
import { disableReactDevTools } from '~scripts/disableReactDevTools';
import '~utils/disable-console';

import './styles/global.scss';

const queryClient = new QueryClient();

// react devtool disable
if (process.env.NODE_ENV === 'production') disableReactDevTools();

function IndexPopup() {
  return (
    <React.StrictMode>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <div className="w-[360] h-[600]">
            <Routing />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MemoryRouter>
    </React.StrictMode>
  );
}

export default IndexPopup;
