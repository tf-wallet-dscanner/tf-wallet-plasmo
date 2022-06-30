import PortStream from 'extension-port-stream';
import React from 'react';
import 'react-devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MemoryRouter } from 'react-router-dom';
import browser from 'webextension-polyfill';

import { Routing } from '~pages';
import { disableReactDevTools } from '~scripts/disableReactDevTools';
import '~utils/disable-console';

import './styles/global.scss';

const queryClient = new QueryClient();

// react devtool disable
if (process.env.NODE_ENV === 'production') disableReactDevTools();

function IndexPopup() {
  // setup stream to background
  const extensionPort = browser.runtime.connect({ name: 'popup' });
  const connectionStream = new PortStream(extensionPort);
  
  console.log('UI browser.runtime.sendMessage');
  browser.runtime.sendMessage(extensionPort).then(function () {
    console.log('sendMessage callback');
  });

  console.log('UI extensionPort : ', extensionPort);
  console.log('UI connectionStream : ', connectionStream);

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
