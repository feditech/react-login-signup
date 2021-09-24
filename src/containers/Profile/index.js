import AppBar from '../../components/AppBar'
import dp from '../../assets/images/dp.jfif'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
function Profile() {

    return (
        <div>
            <AppBar title="Profile" />
            <div>

                <Container>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} s={4} lg={2} md={6}>
                            <h1>Professor</h1>
                        </Grid>
                        <Grid item xs={12} s={4} lg={3} md={6}>
                            <img src={dp} alt="professordp" />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} s={4} lg={5} md={6}>
                        
“In this world, everything is governed by balance. There’s what you stand to gain and what you stand to lose. And when you think you’ve got nothing to lose, you become overconfident.”   
                           
                        </Grid>
                    </Grid>
                </Container>

            </div>
        </div>
    )
}

export default Profile;