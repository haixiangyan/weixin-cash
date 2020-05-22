import theme from '../theme'
import {TRecordType} from '../hooks/useRecordList'

export const barChart = (xData: any[], yData: any[], type: TRecordType, unit: string) => {
  const color = type === 'expense' ? theme.$success : theme.$warning
  const name = type === 'expense' ? '支出' : '收入'

  return {
    tooltip: {
      show: true,
      trigger: 'item',
      axisPointer: {
        type: 'shadow',
        axis: 'auto',
      },
      padding: 5,
      textStyle: {
        color: '#eee'
      },
    },
    xAxis: {
      axisLabel: {
        formatter: `{value}\n${unit}`,
        textStyle: {
          color: theme.$subText
        }
      },
      data: xData
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'bar',
        name,
        data: yData,
        label: {
          show: true,
          position: 'top',
          color,
          formatter: (data: any) => data.value === 0 ? '' : `￥${data.value.toFixed(2)}`
        },
        itemStyle: {
          color,
        },
        barMinHeight: 4
      }
    ]
  }
}
