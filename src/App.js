import './App.css';
import 'fontsource-roboto';
import {Layout, Header, Drawer, Navigation, Textfield, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
    const menus = [
        {path: '/aboutme', title: 'About'}, 
        {path: '/experience', title: 'Experience'}, 
        {path: '/contact', title: 'Contact'}, 
    ];
  return (
    <div >
        <Layout className='appRoot'>
            <div >
                <Header className='container' title="Chung Nguyen" scroll>
                    <Navigation>
                        {menus.map((item, i) => {
                            return <Link key={i} to={item.path}>{item.title}</Link>
                        })}
                    </Navigation>
                </Header>
                <Drawer title="Chung Nguyen">
                    <Navigation>
                    {menus.map((item, i) => {
                            return <Link key={i} to={item.path}>{item.title}</Link>
                        })}
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
