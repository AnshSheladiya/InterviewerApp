import React from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import './HorizontalSortableContainer.css'; // Import the CSS file

const SortableItem = sortableElement(({ value }) => <li className='li-horizontal-scroll'>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul className='ul-horizontal-scroll'>{children}</ul>;
});

const HorizontalSortableContainer = ({ data }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    // Handle sorting logic here
  };

  return (
    <SortableContainer axis="x" onSortEnd={onSortEnd}>
      {data.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </SortableContainer>
  );
};

export default HorizontalSortableContainer;
