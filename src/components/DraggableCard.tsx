import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? '#74b9ff' : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging
      ? 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
      : 'none'};
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  return (
    <>
      <Draggable key={toDoId} draggableId={toDoId + ''} index={index}>
        {(magic, snapshot) => (
          <Card
            isDragging={snapshot.isDragging}
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {toDoText}
          </Card>
        )}
      </Draggable>
    </>
  );
}
// React.memo : 전체가 리렌던링 되는것을 막아준다. props를 바꾸면 그 item들만 다시 렌더링함
export default React.memo(DraggableCard);
