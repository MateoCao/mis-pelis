import { useContext } from 'react';
import CarrouselContext from '../context/CarrouselContext';

export const useCarrouselContext = () => {
  return useContext(CarrouselContext);
};
