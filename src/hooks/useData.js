import { useSelector } from 'react-redux'

export function useData() {
  return useSelector((state) => state.data);
}