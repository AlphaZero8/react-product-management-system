import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const MyTooltip = ({ WrappedComponent, placement, tooltip }) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip>{tooltip}</Tooltip>}
    >
      <WrappedComponent />
    </OverlayTrigger>
  );
};

export default MyTooltip;
