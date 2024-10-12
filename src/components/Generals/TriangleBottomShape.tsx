import * as React from 'react';
const TriangleBottomShape = (props: {
  svgProps: React.HTMLAttributes<SVGElement>;
  fill: string;
}) => {
  const { svgProps, fill } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      preserveAspectRatio='none'
      viewBox='0 0 1200 120'
      {...svgProps}
    >
      <path
        fill={fill}
        d='M892.25 114.72 0 0v120h1200V0L892.25 114.72z'
        className='shape-fill'
      />
    </svg>
  );
};
export default TriangleBottomShape;
