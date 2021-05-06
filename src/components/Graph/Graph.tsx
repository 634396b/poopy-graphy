import { distributedCopy } from '$/util/data'
import { Typography } from '@material-ui/core'
import withTheme from '@material-ui/core/styles/withTheme'
import format from 'date-fns/format'
import React from 'react'
import {
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  ResponsiveContainer,
} from 'recharts'

const toDecimal = (value: number) => {
  if (value === 0) return 0
  return value?.toFixed(Math.abs(Math.log10(value)) + 5)
}

function Graph({ theme, trades, symbol }: any) {
  return (
    <ResponsiveContainer>
      <LineChart {...getMargin()} data={trades}>
        {getGrid()}
        {getYAxis()}
        {getXAxis()}
        {getToolTip()}
        <Line
          dataKey="quotePrice"
          dot={false}
          isAnimationActive={false}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

function getToolTip() {
  return (
    <Tooltip
      content={({ active, payload, label }: any) => {
        return (
          <div>
            <Typography color="secondary">
              {format(
                new Date(payload?.[0]?.payload?.timeInterval?.minute || 0),
                'MMM dd p '
              )}
            </Typography>
            <Typography color="primary">
              Min {toDecimal(+payload?.[0]?.payload?.minimum_price)}
            </Typography>
            <Typography color="primary">
              Max {toDecimal(+payload?.[0]?.payload?.maximum_price)}
            </Typography>
            <Typography color="primary">
              Close {toDecimal(+payload?.[0]?.payload?.close_price)}
            </Typography>
            <Typography color="primary">
              Open {toDecimal(+payload?.[0]?.payload?.open_price)}
            </Typography>
            <Typography color="primary">
              Quoted {toDecimal(+payload?.[0]?.payload?.quotePrice)}
            </Typography>
          </div>
        )
      }}
    />
  )
}

function getXAxis() {
  return (
    <XAxis
      dataKey="timeInterval.minute"
      tickFormatter={(x: string) => format(new Date(x), 'MMM dd')}
    />
  )
}
function getYAxis() {
  return (
    <YAxis
    // tickFormatter={toDecimal}
    />
  )
}
function getGrid() {
  return <CartesianGrid strokeDasharray="3 3" />
}
function getMargin() {
  return {
    margin: {
      top: 5,
      right: 20,
      left: 20,
      bottom: 5,
    },
  }
}
function getHeight() {
  return { height: 250 }
}
function getWidth() {
  return { width: 1000 }
}
export default withTheme(Graph)
