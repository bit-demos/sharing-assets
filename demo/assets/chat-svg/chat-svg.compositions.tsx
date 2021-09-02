import React from 'react';
import { chatSvg } from './index';

export function SvgExample() {
  return (
    <img
      src={chatSvg}
      style={{ width: 50, height: 50, backgroundColor: '#6b5de7', padding: 8 }}
    />
  );
}
