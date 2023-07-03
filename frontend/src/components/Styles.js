import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

/**
 * MaterialUI styles configuration
 */
export const useStyles = makeStyles(() => {
    
    return {
      swap: {
          color: '#fff', 
          border: 2, 
          borderRadius: '50%', 
          borderColor: '#fff', 
          backgroundColor: '#000'
      },
      langBar: {
          backgroundColor: '#ABE3FF', 
          height: '4.6rem', 
          border: '1px solid', 
          borderRadius: '6px',
          borderColor: '#000'
      },
      iconStyle: {
        color: grey[900]
      },
      iconPosition: {
        position: 'absolute',
        bottom: 30, 
        left: 0
      },
      textColor: {
        color: '#000'
      }
    };
});
