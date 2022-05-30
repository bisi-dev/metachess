import { connect } from 'react-redux';
import { FlexRow, Text } from 'ui/es';
import { Menu } from '~/components';
import { ONLINE } from '~/presets';
import { joinNetworkGame } from '~/store/actions';

function mapStateToProps({
  general: { lastSaved },
  network: { connected, peerId },
  ingame: { past },
}) {
  return { past, connected, peerId, lastSaved };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  // const noUndoYet = stateProps.past.length === 0;
  const isConnected = stateProps.connected;
  // const lastSaved = stateProps.lastSaved
    // ? `/ ${toLocaleDate(stateProps.lastSaved)}`
    // : '';
  const { dispatch } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    ingameMenu: [
      // {
      //   key: ActionTypes.UNDO,
      //   title: 'Undo',
      //   disabled: noUndoYet || isConnected,
      //   onClick: () => dispatch(undo()),
      // },
      // {
      //   key: ActionTypes.REDO,
      //   title: 'Redo',
      //   disabled: future.length === 0,
      // },
    ],
    mainMenu: [
      //Touched By Babs
      // {
      //   key: ONE_VS_ONE,
      //   title: '1 vs 1',
      //   disabled: isConnected,
      //   onClick: () => dispatch(updateMatchType(ONE_VS_ONE)),
      // },
      // {
      //   key: ONE_VS_CPU,
      //   title: '1 vs CPU',
      //   disabled: true,
      // },
      // {
      //   key: SAVE,
      //   title: `Save ${lastSaved}`,
      //   disabled: noUndoYet || isConnected,
      //   onClick: () => dispatch(saveGame()),
      // },
      // {
      //   key: IMPORT,
      //   title: 'Import',
      //   disabled: isConnected,
      //   onClick: () => dispatch(importGame()),
      // },
      // {
      //   key: EXPORT,
      //   title: 'Export',
      //   disabled: noUndoYet || isConnected,
      //   onClick: () => dispatch(exportGame()),
      // },
      {
        key: ONLINE,
        title: 'Host',
        disabled: isConnected,
        onClick: () => alert("Please Share your Chess-Id with friend ↗"),
      },
      {
        key: ONLINE,
        title: 'Join',
        disabled: isConnected,
        onClick: () => dispatch(joinNetworkGame()),
        children: () => {
          return (
            <FlexRow paddingLeft={10} paddingRight={10} fontSize="80%">
              <Text marginBottom={5} fontWeight="bold" flexBasis={60}>
                Chess-Id:
              </Text>
              {stateProps.peerId && (
                <Text flex="1" wordBreak="break-all">
                  {stateProps.peerId}
                </Text>
              )}
            </FlexRow>
          );
        },
      },
    ],
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Menu);