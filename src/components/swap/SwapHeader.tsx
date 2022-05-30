import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'
import { ThemedText } from '../../theme'
import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 1rem 1.25rem 0.5rem 1.25rem;
  width: 100%;
  color: ${({ theme }) => theme.text2};
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  const { chainId } = useActiveWeb3React()

  let warningT = ''
  if (chainId !== 80001) {
    warningT = ' - Please use Mumbai Polygon TestNet'
  }
  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed>
          <ThemedText.Black fontWeight={500} fontSize={16} style={{ marginRight: '8px' }}>
            {/* Touched By Babs */}
            <Trans>Chess Engine {warningT}</Trans>
          </ThemedText.Black>
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader>
  )
}
