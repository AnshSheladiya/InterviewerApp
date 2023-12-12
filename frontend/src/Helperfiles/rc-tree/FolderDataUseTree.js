import React, { useState } from 'react';
import "rc-tree/assets/index.css"
import TreeComponent from './TreeComponent';
let data=[
  {
    key: '0',
    title: 'node 0',
    children: [
      { key: '0-0', title: 'node 0-0' },
      { key: '0-1', title: 'node 0-1' },
      {
        key: '0-2',
        title: 'node 0-2',
        children: [
          { key: '0-2-0', title: 'node 0-2-0' },
          { key: '0-2-1', title: 'node 0-2-1' },
          { key: '0-2-2', title: 'node 0-2-2' },
        ],
      },
      { key: '0-3', title: 'node 0-3' },
      { key: '0-4', title: 'node 0-4' },
      { key: '0-5', title: 'node 0-5' },
      { key: '0-6', title: 'node 0-6' },
      { key: '0-7', title: 'node 0-7' },
      { key: '0-8', title: 'node 0-8' },
      {
        key: '0-9',
        title: 'node 0-9',
        children: [
          { key: '0-9-0', title: 'node 0-9-0' },
          {
            key: '0-9-1',
            title: 'node 0-9-1',
            children: [
              { key: '0-9-1-0', title: 'node 0-9-1-0' },
              { key: '0-9-1-1', title: 'node 0-9-1-1' },
              { key: '0-9-1-2', title: 'node 0-9-1-2' },
              { key: '0-9-1-3', title: 'node 0-9-1-3' },
              { key: '0-9-1-4', title: 'node 0-9-1-4' },
            ],
          },
          {
            key: '0-9-2',
            title: 'node 0-9-2',
            children: [
              { key: '0-9-2-0', title: 'node 0-9-2-0' },
              { key: '0-9-2-1', title: 'node 0-9-2-1' },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '1',
    title: 'node 1',
    // children: new Array(1000)
    //   .fill(null)
    //   .map((_, index) => ({ title: `auto ${index}`, key: `auto-${index}` })),
    children: [
      {
        key: '1-0',
        title: 'node 1-0',
        children: [
          { key: '1-0-0', title: 'node 1-0-0' },
          {
            key: '1-0-1',
            title: 'node 1-0-1',
            children: [
              { key: '1-0-1-0', title: 'node 1-0-1-0' },
              { key: '1-0-1-1', title: 'node 1-0-1-1' },
            ],
          },
          { key: '1-0-2', title: 'node 1-0-2' },
        ],
      },
    ],
  },
];
const FolderDataUseTree = () => {
  // Simulate data retrieval from your server or local file system

  const handleSelect = (selectedKeys, info) => {
    console.log('Selected Keys:', selectedKeys);
    console.log('Node Info:', info);
  };

  return (
    <TreeComponent
      data={data}
      onSelect={handleSelect}
      defaultExpandedKeys={['0', '0-2', '0-9-2']} // You can specify the root key or any other default expanded keys
      defaultSelectedKeys={[]}
    />
  );
};

export default FolderDataUseTree;
