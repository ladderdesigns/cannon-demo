/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Component {...pageProps} />
);

export default MyApp;
