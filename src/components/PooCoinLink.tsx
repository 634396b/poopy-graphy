import React from 'react'
import Link from '@material-ui/core/Link'

export function PooCoinLink({ contractAddress }: { contractAddress: string }) {
  return (
    <Link
      target="_blank"
      href={`https://poocoin.app/tokens/${contractAddress}`}
      rel="noreferrer"
    >
      {contractAddress}
    </Link>
  )
}
