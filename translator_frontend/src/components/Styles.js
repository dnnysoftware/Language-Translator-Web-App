import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';


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
          height: '5rem', 
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
      }
    };
});

  
  
  
  
  

// export const useStyles = makeStyles({
//     swap: {
//         color: '#fff', 
//         border: 2, 
//         borderRadius: '50%', 
//         borderColor: '#fff', 
//         backgroundColor: '#000'
//     },
//     langBar: {
//         backgroundColor: '#ABE3FF', 
//         height: '10vh', 
//         border: '1px solid', 
//         borderRadius: '6px',
//         borderColor: '#000'
//     },
//     langChoice: {

//     }
// });