import React, { useState, useRef, useEffect } from 'react';
import { Provider } from 'rc-motion';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';
import TitleComponent from '../styled-components/TitleComponent';

const TreeComponent = ({ data, defaultExpandedKeys, enableVirtual }) => {
  const treeRef = useRef();

  useEffect(() => {
    if (treeRef.current && defaultExpandedKeys) {
      treeRef.current.scrollTo({ key: defaultExpandedKeys[defaultExpandedKeys.length - 1] });
    }
  }, [defaultExpandedKeys]);

  return (
    <div>
      <TitleComponent>Tree Structured Folders Data</TitleComponent>
      <Tree
        ref={treeRef}
        defaultExpandAll={false}
        defaultExpandedKeys={defaultExpandedKeys}
        treeData={data}
        style={{ border: '1px solid #000' }}
        itemHeight={20}
      />
    </div>
  );
};

export default TreeComponent;
