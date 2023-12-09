import React from 'react';
import {Text, Newline} from 'ink';

export default function App() {
	return (
		<Passage length={10}/>
	);
}

function Passage({ length}: { length: number }) {
	return (
		<Text>
			<Wall length={length}/>
			<Newline />

			<Wall length={1}/>
			<Room length={length - 2}/>
			<Wall length={1}/>
			<Newline />

			<Wall length={length}/>
		</Text>
	)
}

function Wall({ length}: { length: number }) {
	return (
		<Text>
			{'='.repeat(length)}
		</Text>
	);
}

function Room({ length}: { length: number }) {
	return (
		<Text>
			{' '.repeat(length)}
		</Text>
	);
}
