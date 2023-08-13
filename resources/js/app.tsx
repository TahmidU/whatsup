import { createInertiaApp } from '@inertiajs/react'
import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.tsx');
    return pages[`./Pages/${name}.tsx`]();
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <Fragment>
        <ToastContainer />
        <App {...props} />
      </Fragment>
    )
  },
})