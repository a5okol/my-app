import React from 'react'
// import Radium from 'radium'
// import './Home.scss'
import SimpleSlider from './Slider'
import Counter from '../Counter/Counter'

export const ClickedContex = React.createContext(false)

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        clicked: false
    };


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
                <ClickedContex.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContex.Provider>
                <button onClick={() => this.setState({clicked: true})}>Change clicked</button>
            </div>
        );
    }
}

// export default Radium(Car)
export default Home;


