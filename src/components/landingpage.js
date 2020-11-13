import { Component } from 'react';
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '10O%', height: '100%' }}>
                <Grid className='landing-grid gradient-background'>
                    <Cell col={3} phone={0}></Cell>
                    <Cell col={6} phone={12}>
                        <img src='https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/53327544_1201427780019681_7002745916142649344_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=JdoNgvSBl_8AX_rtnjJ&_nc_ht=scontent.fsgn5-7.fna&oh=ef0a13428338ac6549bc78168cfeb790&oe=5FCACDDE' 
                            alt='avatar' 
                            className='avatar-img'/>
                        <div className='banner-text' >
                            <h1>Software Engineer</h1>
                            <hr />
                            <p>Java | SpringBoot | Kafka | Micro services | Event driven architecture | Event sourcing | ReactJS | Material UI</p>
                            <div className='social-links'>
                                <a href="https://www.linkedin.com/in/chung-nguyen-31a50487/" target='_blank' ref='noopener noreferer' >
                                    <i className="fa fa-linkedin" aria-hidden='true' />
                                </a>
                                <a href="https://www.facebook.com/chungshaku" target='_blank' ref='noopener noreferer' >
                                    <i className="fa fa-facebook" aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                    <Cell col={3} phone={0}></Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;