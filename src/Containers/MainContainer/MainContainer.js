import React from 'react';
import BackgroundImage from '../../source/bg__main.jpg';
import Header from '../../Headers/Header/Header';

class MainContainer extends React.Component {

    render(){
        return (
            <Header
                image={BackgroundImage}
            />            
        )
    }

}

export default MainContainer;