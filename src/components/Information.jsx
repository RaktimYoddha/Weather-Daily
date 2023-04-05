
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: '#111',
    fontSize:"25px",
    marginTop: 200,
    marginLeft:34,
    padding: 20
})

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ?
            <Box style={{
                
                "width": "615px",
                "height":"533px",
                "border": "2px solid white",
                "border-radius": "20px",
                "background-color": "#1111",
               
            } }>
                <Box style={{
                "width":"370px",
                "margin-left": "130px",
                "margin-top": "75px",
                "border": "2px solid white",
                "border-radius": "20px",
                "background-color":"#5555"
            }}>
                    <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
                    <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
                    <Row><Opacity />Humidity: {result.main.humidity}</Row>
                    <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
                    <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
                    <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
                    <Row><Cloud />Clouds: {result.clouds.all}%</Row>
                </Box>
            </Box>
            :
            <Box style={{
                
                "width": "615px",
                "height":"533px",
                "border": "2px solid white",
                "border-radius": "20px",
                "background-color": "#1111",
               
            } }>
                <Error>Please enter the city/location to check weather</Error>
            </Box>
    )
}

export default Information;