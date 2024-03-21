// Board.tsx
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { IToDo } from '../atoms';
import DraggableCard from './DraggableCard';
import { v4 as uuidv4 } from 'uuid';

type Props = {
	// props의 타입 정의
	boardId: string;
	toDos: IToDo[];
};

const Wrapper = styled.div`
	width: 200px;
	padding: 12px;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
`;
const Title = styled.h2`
	font-weight: 200;
	padding: 4px 0;
	border-bottom: 1px solid;
`;

const Content = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-grow: 1;
	width: 100%;
	align-items: center;
	font-weight: 400;
`;

const Board: React.FC<Props> = ({ boardId, toDos }) => {
	return (
		<Wrapper>
			<Title>{boardId}</Title>
			<Droppable droppableId={boardId}>
				{(magic) => (
					<Content
						ref={magic.innerRef}
						{...magic.droppableProps}>
						{toDos.map((toDo, index) => (
							<DraggableCard
								key={toDo.id}
								index={index}
								toDoId={toDo.id}
								toDoText={toDo.text}
							/>
						))}
						{magic.placeholder}
					</Content>
				)}
			</Droppable>
		</Wrapper>
	);
};

export default Board;
