import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import pic from './sushi 3.png'
const items = [
  {
    src: pic,
    key: '1'
  },
  {
    src: pic,
    key: '2'
  },
  {
    src: pic,
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;