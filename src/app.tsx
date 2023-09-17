import './app.scss'
import { withProviders } from '@/app/hocs'
import { Routing } from '@/pages'
import { Loader, LoadingError, MainLayout } from '@/components'

function Component() {
  const isUserReady = true
  const errorGame = ''
  const hasError = errorGame

  return (
    <MainLayout>
      {hasError && (
        <LoadingError>
          <p>Some error occurred in the contract :(</p>
          <pre>
            <small>Message:</small> <code>{errorGame}</code>
          </pre>
        </LoadingError>
      )}

      {!hasError && isUserReady && <Routing />}
      {!hasError && !isUserReady && <Loader />}
    </MainLayout>
  )
}

export const App = withProviders(Component)
