import { atom } from 'recoil';

export interface IToDo {
	id: number;
	text: string;
}

interface IToDoState {
	[key: string]: IToDo[];
}

const defaultValue = JSON.parse(localStorage.getItem('toDoList')!);

export const toDoState = atom<IToDoState>({
	key: 'toDoState',
	default: defaultValue
		? defaultValue
		: {
				Todo: [
					{ id: 1, text: '리액트 공부하기' },
					{ id: 2, text: '넥스트 공부하기' },
				],
				Doing: [
					{ id: 3, text: '토이 프로젝트 진행하기' },
					{ id: 4, text: '이력서 작성하기' },
				],
				Done: [
					{ id: 5, text: 'KDT 수료하기' },
					{ id: 6, text: '목표 정하기' },
				],
		  },
});
