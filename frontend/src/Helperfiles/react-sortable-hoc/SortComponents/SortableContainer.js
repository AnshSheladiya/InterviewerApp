import React from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const SortableList = ({ data }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    // Handle sorting logic here
  };

  return (
    <SortableContainer onSortEnd={onSortEnd} >
      {data.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </SortableContainer>
  );
};

export default SortableList;
