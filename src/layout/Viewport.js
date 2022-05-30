import PropTypes from 'prop-types';
import { memo } from 'react';
import { FlexRow } from 'ui/es';
import useTheme from '~/styles/useTheme';

function Viewport({ children }) {
  const { diagram, sidebar, fh } = useTheme();
  const minMaxWidth = diagram.width + sidebar.width;

  return (
    <FlexRow id ="game" height={fh} minWidth={minMaxWidth} maxWidth={minMaxWidth}>
      {children}
    </FlexRow>
  );
}

Viewport.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Viewport);