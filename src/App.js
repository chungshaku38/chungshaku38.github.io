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

    function hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
  return (
    <div >
        <Layout className='appRoot'>
            <Header className='container' title="Chung Nguyen" scroll>
                <Navigation>
                    {menus.map(item => {
                        return <Link to={item.path}>{item.title}</Link>
                    })}
                </Navigation>
            </Header>
            <Drawer title="Chung Nguyen">
                <Navigation>
                        {menus.map(item => {
                            return <Link to={item.path} onClick={hideToggle}>{item.title}</Link>
                        })}
                    </Navigation>
            </Drawer>
            
            <Content>
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
