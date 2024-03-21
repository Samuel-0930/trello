// DraggableCard.tsx
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

type Props = {
	// props의 타입 정의
	toDoId: number;
	toDoText: string;
	index: number;
};

const Card = styled.div`
	background-color: #8ccef5;
	width: 100%;
	text-align: center;
	padding: 8px 0;
	color: var(--grayscale-900);
	border-radius: 12px;
`;

const DraggableCard: React.FC<Props> = ({ toDoId, toDoText, index }) => {
	return (
		<Draggable
			draggableId={toDoId + ''}
			index={index}>
			{(magic) => (
				<Card
					ref={magic.innerRef}
					{...magic.draggableProps}
					{...magic.dragHandleProps}>
					{toDoText}
				</Card>
			)}
		</Draggable>
	);
};

export default DraggableCard;
