import { Side, Snapshot, Turn } from 'chess/es';
import { batch } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import peerNetwork from '../../networkSupport';
import {
  CLOSE_NETWORK_GAME, CONNECTED_PEER_NETWORK, DECIDE_SIDE, JOIN_NETWORK_GAME, OPEN_NETWORK_GAME, TOGGLE_AWAITING
} from '../actionTypes';
import {
  removeCheck, removeMovableTiles, removeSelectedCode, removeSheetData, updateSnapshot, updateTurn
} from './ingame';

export function openNetworkGame(ownId) {
  return {
    type: OPEN_NETWORK_GAME,
    payload: ownId,
  };
}

export function closeNetworkGame() {
  return {
    type: CLOSE_NETWORK_GAME,
  };
}

export function decideSide(side) {
  return {
    type: DECIDE_SIDE,
    payload: side,
  };
}

export function toggleAwaiting() {
  return {
    type: TOGGLE_AWAITING,
  };
}

export function connectedPeerNetwork() {
  return (dispatch) => {
    batch(() => {
      dispatch(updateSnapshot(Snapshot));
      dispatch(removeSelectedCode());
      dispatch(removeMovableTiles());
      dispatch(removeCheck());
      dispatch(removeSheetData());
      dispatch(updateTurn(Turn.w));
      dispatch(ActionCreators.clearHistory());

      dispatch({
        type: CONNECTED_PEER_NETWORK,
      });
    });
  };
}

export function joinNetworkGame() {
  return (dispatch) => {
    const id = window.prompt('please input friend peer-id');

    if (id) {
      batch(() => {
        dispatch(updateSnapshot(Snapshot));
        dispatch(removeSelectedCode());
        dispatch(removeMovableTiles());
        dispatch(removeCheck());
        dispatch(removeSheetData());
        dispatch(updateTurn(Turn.w));
        dispatch(ActionCreators.clearHistory());
        dispatch(decideSide(Side.white));

        peerNetwork.join(id);

        dispatch({
          type: JOIN_NETWORK_GAME,
        });
      });
    }
  };
}
