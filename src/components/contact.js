import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Link } from 'react-router-dom';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Chung Nguyen</h3>
            <img
              src='https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/124352152_1727607667401687_5959279737194582379_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=c4SOdorEQhQAX_6Yn5G&_nc_ht=scontent.fsgn2-1.fna&oh=fe4677e67511ef73652cd9a8abaf7de3&oe=5FD0354C'
              alt="avatar"
              className='contact-avatar'
            />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Life is journey, not destination</p>

          </Cell>
          <Cell col={6}>
            <h3>Contact Me</h3>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-phone" aria-hidden="true"/>
                    (+84) 975204552
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-envelope-o" aria-hidden="true"/>
                    chungshaku38@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    chungshaku
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <a href='https://www.linkedin.com/in/chung-nguyen-31a50487/' target='_blank'>https://www.linkedin.com/in/chung-nguyen-31a50487/</a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;