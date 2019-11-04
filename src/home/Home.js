import React from 'react'
// import Radium from 'radium'
// import './Home.scss'
import SimpleSlider from './Slider'


class Home extends React.Component {


    render() {

        // const rug = 10;
        // const style = {
        //     border: '',
        //     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        //     ':hover': {
        //         boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.34)',
        //
        //     }
        // };

        return (
            <div className={'home'}>
                <h1>React практика</h1>
                <SimpleSlider/>

            </div>

        );
    }
}

// export default Radium(Car)
export default Home;


