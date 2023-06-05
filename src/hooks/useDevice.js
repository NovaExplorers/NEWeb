import { useSelector } from 'react-redux'

export function useDevice() {
  return useSelector((state) => state.device);
}