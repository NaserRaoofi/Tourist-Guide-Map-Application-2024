import { width } from "@mui/system";

// styles.js
export const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3f51b5', // MUI primary color
      padding: '0 16px',
    },
    title: {
      color: 'white',
      fontSize: '1.5rem',
    },
    searchContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end', // Align label to the right
      width:'600px',
      gap:'20px'
    },
    searchLabel: {
      color: 'white',
      marginBottom: '4px', // Space between the label and search box
    },
    search: {
      position: 'relative',
      borderRadius: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      width: '100%',
      maxWidth: '300px',
    },
    searchIcon: {
      padding: '0 16px',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    inputBase: {
      color: 'inherit',
      width: '100%',
      padding: '8px 8px 8px 48px',
      transition: 'width 300ms',
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: '1rem',
    },
  };
  