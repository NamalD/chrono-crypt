#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

meow(
	`
	Usage
	  $ chrono-crypt

	Examples
	  $ chrono-crypt --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
	},
);

render(<App />);
