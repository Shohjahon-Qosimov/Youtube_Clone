import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import ChannelDetail from './components/ChannelDetail'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import Videos from './components/Videos'
import VideoCard from './components/VideoCard'
import ChannelCard from './components/ChannelCard'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App