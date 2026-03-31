import { useSearchParams } from 'react-router-dom'

export type TrafficTemp = 'c' | 'w' | 'h'

const VALID_TEMPS: TrafficTemp[] = ['c', 'w', 'h']
const DEFAULT_TEMP: TrafficTemp = 'c'

export function useTrafficTemp(): TrafficTemp {
  const [searchParams] = useSearchParams()
  const param = searchParams.get('t')

  if (param && VALID_TEMPS.includes(param as TrafficTemp)) {
    return param as TrafficTemp
  }

  return DEFAULT_TEMP
}
