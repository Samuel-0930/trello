// App.tsx
import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { toDoState } from './atoms';
import { useRecoilState } from 'recoil';
import Board from './components/Board';
import { v4 as uuidv4 } from 'uuid';

type Props = {
	// props의 타입 정의
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: rgb(254, 190, 152);
	background: linear-gradient(
		129deg,
		rgba(254, 190, 152, 1) 0%,
		rgba(221, 221, 221, 1) 100%
	);
`;

const Boards = styled.div`
	display: flex;
	width: 90%;
	max-width: 800px;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	background-color: var(--grayscale-50);
	border: 1px solid var(--grayscale-700);
	border-radius: 8px;
	box-shadow: 0 3px 10px rgb(0, 0, 0, 0.3);
`;

const App: React.FC<Props> = () => {
	const [toDos, setTodos] = useRecoilState(toDoState);
	const onDragEnd = ({ destination, source }: DropResult) => {
		if (!destination) return;
		if (destination.droppableId === source.droppableId) {
			setTodos((allBoards) => {
				const boardCopy = [...allBoards[source.droppableId]];
				const taskObj = boardCopy[source.index];
				boardCopy.splice(source.index, 1);
				boardCopy.splice(destination.index, 0, taskObj);

				localStorage.setItem(
					'toDoList',
					JSON.stringify({
						...allBoards,
						[source.droppableId]: boardCopy,
					})
				);

				return {
					...allBoards,
					[source.droppableId]: boardCopy,
				};
			});
		}
		if (destination.droppableId !== source.droppableId) {
			setTodos((allBoards) => {
				const sourceBoard = [...allBoards[source.droppableId]];
				const taskObj = sourceBoard[source.index];

				const destinationBoard = [...allBoards[destination.droppableId]];
				sourceBoard.splice(source.index, 1);
				destinationBoard.splice(destination.index, 0, taskObj);

				localStorage.setItem(
					'toDoList',
					JSON.stringify({
						...allBoards,
						[source.droppableId]: sourceBoard,
						[destination.droppableId]: destinationBoard,
					})
				);

				return {
					...allBoards,
					[source.droppableId]: sourceBoard,
					[destination.droppableId]: destinationBoard,
				};
			});
		}
	};

	return (
		<Wrapper>
			<DragDropContext onDragEnd={onDragEnd}>
				<Boards>
					{Object.keys(toDos).map((boardId) => (
						<Board
							key={boardId}
							boardId={boardId}
							toDos={toDos[boardId]}
						/>
					))}
				</Boards>
			</DragDropContext>
		</Wrapper>
	);
};

export default App;
