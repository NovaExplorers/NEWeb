import { useSelector } from 'react-redux'

export function useUI() {
  return useSelector((state) => state.ui);
}