import React from "react"
import "react-devtools"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { MemoryRouter } from "react-router-dom"

import { Routing } from "~pages"
import { disableReactDevTools } from "~scripts/disableReactDevTools"

import "./styles/global.css"

const queryClient = new QueryClient()

function IndexPopup() {
  // react devtool disable
  if (process.env.NODE_ENV === "production") disableReactDevTools()

  return (
    <React.StrictMode>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Routing />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MemoryRouter>
    </React.StrictMode>
  )
}

export default IndexPopup
