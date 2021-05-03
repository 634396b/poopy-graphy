import React from 'react'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Icon from '@material-ui/icons/AttachMoney'

interface Props {
  contractAddress: string
  symbol: string
}
export function PooCoinLink({ contractAddress, symbol }: Props) {
  return (
    <Typography align="center" color="primary">
      <Chip
        icon={<Icon />}
        label={symbol}
        color="primary"
        clickable
        component="a"
        target="_blank"
        rel="noreferrer"
        href={`https://poocoin.app/tokens/${contractAddress}`}
      />
    </Typography>
  )
}
