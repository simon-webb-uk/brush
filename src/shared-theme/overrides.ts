import { SxProps } from '@mui/material/styles';

export const ButtonOverrideStyle: SxProps = {
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'rgb(232, 224, 213)',
  color: 'rgb(242, 109, 36)',
  '&:hover': {
    backgroundColor: 'rgb(242, 109, 36)',
    color: '#fff',
  },
};

export const ContentButtonOverrideStyle: SxProps = {
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'rgb(232, 224, 213)',
  color: 'rgb(242, 109, 36)',
  '&:hover': {
    backgroundColor: '#ffffff44',
    color: '#fff',
  },
};
