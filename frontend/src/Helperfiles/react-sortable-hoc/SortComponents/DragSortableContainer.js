import React, { useState, useEffect } from 'react';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import { arrayMoveMutable as arrayMove } from 'array-move';

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement(({ value }) => (
  <li>
    <DragHandle />
    {value}
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const DragSortableContainer = ({ data }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    
  };

  return (
    <SortableContainer onSortEnd={onSortEnd} useDragHandle>
      {data.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </SortableContainer>
  );
};

export default DragSortableContainer;
