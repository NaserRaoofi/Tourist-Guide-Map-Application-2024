import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { styles } from './styles'; // Assuming you have defined your styles in styles.js

function Header() {
  return (
    <AppBar position="static">
      <Toolbar style={styles.header}>
        <Typography variant="h6" style={styles.title}>
          Sirwan agency
        </Typography>
        <Box style={styles.searchContainer}>
          <Typography variant="subtitle1" style={styles.searchLabel}>
            Explore more places
          </Typography>
          <Box style={styles.search}>
            <Box style={styles.searchIcon}>
              <SearchIcon />
            </Box>
            <input
              style={styles.inputBase}
              placeholder="...Search"
              aria-label="search"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
