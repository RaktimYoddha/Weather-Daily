import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
import zIndex from '@mui/material/styles/zIndex';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '30%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px',
    zIndex: "9999",
    borderLeft:"700px"
})

const Home = () => {
    const [result, setResult] = useState({})

    return (
        <Component style={{"background":""}}>
            <Image></Image>
            <Box style={{ width: '73%', height: '80%' }}>
                <Form setResult={setResult} />
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default Home;