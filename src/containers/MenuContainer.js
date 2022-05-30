import { connect } from 'react-redux';
import { FlexRow, Text } from 'ui/es';
import { Menu } from '~/components';
import { ONLINE } from '~/presets';
import { joinNetworkGame } from '~/store/actions';
import contract from "~/utils/contract.ts";

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

// function GetContractBalance() {
//   contract.methods.getContractBalance().call().then( function( result ) {
//     console.log("balance: ", result);
//   });
// }

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
  const isConnected = stateProps.connected;
  const { dispatch } = dispatchProps;
  
  function ConnectAsClient() {
    contract
    .methods.
    joinAsClient()
    .send( {from: id})
    .catch((error) => {
      alert('User Rejected Transaction. Please, retry to join the MetaChess community')
      if (error?.code !== 4001) {
        alert('Please, retry to join the MetaChess community')
      }
    })
  }
  
  function  host(){
    var exit = false

    if(id == null || id == "Connect_Wallet"){
      alert('Please Connect Wallet')
      exit = true
    } else {
      ConnectAsClient()
    }

    setTimeout(
      function(){
        if (exit == false){
          alert("Please Share your Chess-Id with friend ↗")
        }
      }
    ,10000);
  }
  
  function  join(){
    var exit = false

    if(id == null || id == "Connect_Wallet"){
      alert('Please Connect Wallet')
      exit = true
    } else {  
      ConnectAsClient()
    }

    setTimeout(
      function(){
        if (exit == false){
          dispatch(joinNetworkGame())
        }
      }
    ,30000);
  }

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,

    ingameMenu: [
    ],
    mainMenu: [
      {
        key: ONLINE,
        title: 'Host',
        disabled: isConnected,
        onClick: () => host(),
      },
      {
        key: ONLINE,
        title: 'Join',
        disabled: isConnected,
        onClick: () => join(),
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