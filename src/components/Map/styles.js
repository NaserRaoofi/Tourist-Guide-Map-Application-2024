export const styles = {
  mapContainer: {
    height: '85vh',
    width: '100%',
    position: 'relative',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  paper: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  typography: {
    textAlign: 'center',
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  pointer: {
    cursor: 'pointer',
    width: '30px', // Adjust width
    height: '30px', // Adjust height
    transition: 'transform 0.3s ease',
    '& img': {
      width: '100%', // Make the image cover the container
      height: '100%',
      objectFit: 'cover', // Ensure the image covers the container
      borderRadius: '20%', // Optional: make it round
    }},
  mapes: {
    color: '#E53935',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '20px 0',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  markerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: '#007BFF',
    },
  },
};
