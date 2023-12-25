'use client'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SideDrawer from '@/components/common/side-drawer';
import SearchResult from './search-result';
import { useSearch } from './hooks/use-search';
import Box from '@mui/material/Box';
import ReactPagination from '@/components/react-pagination';
import { TextField } from '@mui/material';


export default function SearchItem() {

  const [activePage, setActivePage] = React.useState(1);

  const [term, setTerm] = React.useState('');

  let [open, setOpen] = React.useState(false);

  const { data } = useSearch(term, activePage);

  const handlePageChange = (pageNumber: any) => {
    setActivePage(pageNumber)
  }

  const handleChange = (evt: any) => {
    setTerm(evt.target.value);
    setOpen(true)
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px',  maxWidth: 400, m: 1 }}
      action={"/search"}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a waqf to support"
        inputProps={{ 'aria-label': 'search waqf' }}
        name='term'
        onClick={handleChange}

      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
      {open && <SideDrawer searchCallback={setOpen} >
        <Box textAlign={'center'}>
          <TextField
            sx={{ ml: 3, mr: 3, width: 300 }}
            fullWidth
            placeholder="Search a waqf to support"
            inputProps={{ 'aria-label': 'search waqf' }}
            name='term'
            type='search'
            onChange={handleChange}
          />
        </Box>
        <SearchResult waqfs={data} />
        <Box marginTop={4} display={"flex"} justifyContent={'center'}>
          <ReactPagination
            activePage={activePage}
            itemsCountPerPage={5}
            totalItemsCount={100}
            pageRangeDisplayed={4}
            onchangeCallback={handlePageChange} />
        </Box>
      </SideDrawer>}
    </Paper>
  );
}