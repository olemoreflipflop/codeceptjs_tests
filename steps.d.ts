/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type logIn = typeof import('./pages/LogIn.js');
type history = typeof import('./pages/History.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, logIn: logIn, history: history, current: any }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
