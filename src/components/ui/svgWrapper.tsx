import React from 'react';

/**
 * svg画像を表示するラッパー
 * @param children svg画像
 * @returns
 */
export default function svgWrapper(
  callbk: () => React.ReactNode,
): React.ReactNode {
  return (
    <div
    // style={{
    //   width: '100%',
    //   height: '100%',
    //   display: 'block',
    //   fill: 'currentcolor',
    // }}
    >
      {callbk()}
    </div>
  );
}
