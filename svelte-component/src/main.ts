// import './app.css'
// import App from './App.svelte'

// const app = new App({
//     target: document.getElementById('app'),
// })

// export default app

// export is not required based on the configuration
// export const Counter = import('./components/Counter.svelte');
const Counter = import('./components/Counter.svelte');
const Hi = import('./components/h1.svelte');

// import to global and not registry again

// another way
// customElements.define('alf-counter', Counter.element);
// customElements.define('alf-h1', H1.element);

// another way
// export * as Counter from './components/Counter.svelte'
// export * as H1 from './components/h1.svelte'