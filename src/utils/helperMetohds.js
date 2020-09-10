import { toast } from 'react-toastify';

export const showError = (error) => {
  if (error && error.length > 0) {
    toast.error('Something wrong happend, please try again later!');
  }
};
