import withTheme from '@material-ui/core/styles/withTheme'
import format from 'date-fns/format'
import React from 'react'
import * as V from 'victory'

const width = 500

const toDecimal = (value: number) =>
  value.toFixed(Math.abs(Math.log10(value)) + 5)

function Graph({ theme, trades, symbol }: any) {
  const [zoomDomain, setZoomDomain] = React.useState({})
  const [brushDomain, setBrushDomain] = React.useState({})
  return (
    <div>
      <V.VictoryChart
        width={width}
        height={400}
        scale={{ x: 'time', y: 'linear' }}
        // padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <V.VictoryZoomContainer
            responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={setZoomDomain}
          />
        }
      >
        <V.VictoryLine
          style={{
            data: { stroke: 'tomato' },
          }}
          y="y"
          x="x"
          data={trades.map((t: any) => ({ ...t, x: new Date(t.x) }))}
        />
      </V.VictoryChart>
      <V.VictoryChart
        width={width}
        height={90}
        scale={{ x: 'time' }}
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <V.VictoryBrushContainer
            responsive={false}
            brushDimension="x"
            brushDomain={brushDomain}
            onBrushDomainChange={setBrushDomain}
          />
        }
      >
        <V.VictoryAxis tickFormat={(x) => format(new Date(x), 'MMM dd')} />
        <V.VictoryLine
          style={{
            data: { stroke: 'tomato' },
          }}
          data={distributedCopy(trades, 9)}
        />
      </V.VictoryChart>
    </div>
  )
}
function distributedCopy(items, n) {
  var elements = [items[0]]
  var totalItems = items.length - 2
  var interval = Math.floor(totalItems / (n - 2))
  for (var i = 1; i < n - 1; i++) {
    elements.push(items[i * interval])
  }
  elements.push(items[items.length - 1])
  return elements
}
export default withTheme(Graph)
