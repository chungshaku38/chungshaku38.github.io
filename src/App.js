import './App.css';
import 'fontsource-roboto';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
    const menus = [
        {path: '/about', title: 'About'}, 
        {path: '/experience', title: 'Experience'}, 
        {path: '/contact', title: 'Contact'}, 
    ];
  return (
    <div >
        <Layout className='appRoot'>
            <div >
                <Header className='container' title="Chung Nguyen" scroll>
                    <Navigation>
                        {menus.map(item => {
                            return <Link to={item.path}>{item.title}</Link>
                        })}
                    </Navigation>
                </Header>
                {/* <Drawer title="Chung Nguyen">
                    <Navigation>
                            {menus.map(item => {
                                return <Link to={item.path}>{item.title}</Link>
                            })}
                        </Navigation>
                </Drawer> */}
                <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
            </div>
            
            <Content>
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
