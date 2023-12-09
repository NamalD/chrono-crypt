export interface GameState {
	player: Player;
	era: Era;
}

export interface Player {
	position: Position;
}

export type Era = 'Ancient Greece' | 'Medieval' | 'Industrial Revolution' | 'Modern Day' | 'Future';

export interface Position {
	x: number;
	y: number;
}
