import React from 'react'
import SortableList from './SortComponents/SortableContainer'
import DragSortableContainer from './SortComponents/DragSortableContainer'
import HorizontalSortableContainer from './SortComponents/HorizontalSort/HorizontalSortableContainer'
import CenterScreen from '../styled-components/CenterScreen'
import TitleComponent from '../styled-components/TitleComponent'
import BoxComponent from '../styled-components/BoxComponent'

const SortableIndex = () => {
  return (
    <div>
      <CenterScreen>
        <TitleComponent>Sortable Components</TitleComponent>
        <BoxComponent><SortableList data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']}/></BoxComponent>
        <BoxComponent><DragSortableContainer data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']}/></BoxComponent>
        <BoxComponent><HorizontalSortableContainer data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']}/></BoxComponent>
        
        
        
      </CenterScreen>

    </div>
  )
}

export default SortableIndex