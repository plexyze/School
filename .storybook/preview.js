import React from 'react';
import '../source/styles/global.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#eee',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
}
