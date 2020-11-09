import { useState } from "react";
import { Cell, Grid, Tab, Tabs, Card, CardText, CardTitle, CardActions, Button, IconButton, CardMenu, List, ListItem, ListItemContent } from "react-mdl";

function Experiences() {
    const [activeTab, setActiveTab] = useState(0);
    const exps = [
        {
            imageUrl: 'https://bgasparotto.com/wp-content/uploads/2017/12/spring-boot-logo.png',
            label: 'Backend',
            items: [
                {
                    icon: 'done',
                    title: 'Spring Boot'
                },
                {
                    icon: 'done',
                    title: 'Spring Cloud'
                }
            ]
        },
        {
            imageUrl: 'https://atix.de/wp-content/uploads/apache-kafka-300x300.png',
            label: 'Backend',
            items: [
                {
                    icon: 'done',
                    title: 'Deep knowledege about Apache Kafka'
                },
                {
                    icon: 'done',
                    title: 'Design & integrate application with Kafka'
                }
            ]
        },
        {
            imageUrl: 'https://miro.medium.com/max/960/1*7LOWVelUHYS1iqeX34Whzg.png',
            label: 'Frontend',
            items: [
                {
                    icon: 'done',
                    title: 'ReactJS'
                },
                {
                    icon: 'done',
                    title: 'Material UI'
                }
            ]
        },
        {
            imageUrl: 'http://allvectorlogo.com/img/2019/04/logi-analytics-logo.png',
            label: 'Reporting and data visualization',
            items: [
                {
                    icon: 'done',
                    title: 'Logi Analytics'
                },
                {
                    icon: 'done',
                    title: 'ETL for transforming data'
                }
            ]
        },
        {
            imageUrl: 'https://cdn2.iconfinder.com/data/icons/business-process-1/512/api-512.png',
            label: 'Integration',
            items: [
                {
                    icon: 'done',
                    title: 'LDAP'
                },
                {
                    icon: 'done',
                    title: 'Stripe'
                }
            ]
        },
        {
            imageUrl: 'https://miro.medium.com/max/1024/1*KH-i7gZC9UEUELeMhnAugg.jpeg',
            label: 'Architecture design',
            items: [
                {
                    icon: 'done',
                    title: 'Experienced with micro services'
                },
                {
                    icon: 'done',
                    title: 'Event sourcing & event driven architecture'
                }
            ]
        },
        {
            imageUrl: 'https://webdriver.io/img/webdriverio.png',
            label: 'Test Automation ',
            items: [
                {
                    icon: 'done',
                    title: 'NodeJS, Typescript, WebdriverIO'
                },
                {
                    icon: 'done',
                    title: 'Page object model'
                },
                {
                    icon: 'done',
                    title: 'Saucelabs'
                },
            ]
        }
    ];

    function toggleCategories() {
        if (activeTab === 0) {
            return (
            <div className="card-container">
                {
                <Grid>
                    {exps.map((ex) => {
                        return <Cell col={3}>
                                    <div className='cell-border'>
                                        <h4 className='tag'>{ex.label}</h4>
                                        <img src={ex.imageUrl} className='card-content-img' />
                                        <List>
                                            {
                                                ex.items.map(item => { 
                                                    return <ListItem>
                                                                <ListItemContent icon={item.icon} > {item.title} </ListItemContent>
                                                            </ListItem>
                                                })
                                            }
                                        </List>
                                    </div>
                                </Cell>
                    })}
                </Grid>}
                
            </div>)
        }
    }

    return (
        <div className='category-tabs'>
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)}>
                <Tab>Experience Technologies</Tab>
                <Tab>Knowledge Domain</Tab>
            </Tabs>
            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12} >
                        <div className="content">{toggleCategories()}</div>
                    </Cell>
                </Grid>
            </section>
        </div>
    );
}

export default Experiences;