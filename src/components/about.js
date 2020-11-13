const { Grid, Cell, List } = require("react-mdl")

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-grid'>
                <Grid>
                    <Cell col={4} className='about-content'>
                        
                        <h4>Love writing code, passionated technical problem solving and software architecture designing</h4>
                        <p>I have more than 10 years working in software development, for both outsourcing and product company. Interested in working in backend, frontend, database, data visualization... </p>
                        <br></br>
                        
                    </Cell>
                    
                </Grid>
            </div>
        </div>
    )
}

export default About;