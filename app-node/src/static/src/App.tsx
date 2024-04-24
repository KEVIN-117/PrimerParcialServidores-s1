import React from 'react';
import { Button } from '@tremor/react';
import { RiRefreshLine } from '@remixicon/react';
import { Books } from './components/Books'
function App() {
  return (
      <body className="relative dark:bg-slate-900 h-screen set-box-shadow-mix-blend-mode-2 flex justify-center items-center overflow-hidden">


          <main className="relative flex-1">
              <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                   aria-hidden="true">
                  <div
                      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] set-clip-path"
                  >
                  </div>
              </div>
              <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl "
                   aria-hidden="true">
                  <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-violet-500
                           sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] set-clip-path"></div>
              </div>
              <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  aria-hidden="true">
                  <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#06b6d4] to-[#0c4a6e]
                          sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] set-clip-path"></div>
              </div>
              <Books/>
          </main>
      </body>
  );
}

export default App;
