import React, {Component} from 'react'
import Car from './product/Car/Car'
import './App.scss'
import Home from "./home/Home";
import ArticleAboutUs from './Articles/AboutUs'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

// import SimpleSlider from './home/Slider';


class App extends Component {
    constructor(props) {
        super(props);

        /*this.state = {

            cars: [
                {name: 'Porsche', year: 2019},
                {name: 'Lexus', year: 2019},
                {name: 'Lamborghini', year: 2019}
            ],
            pageTitle: 'React components',
            pageTitle2: 'React components',
            showCars: false

        }*/// часто бывает, что state определяется именно в конструкторе, поэтому, если мы захотим это все переписать, то в методе конструктор мы можем определить state через ключевое слово this
    };

    state = { // специально свойство, state - это обычный JS объект, которые описывает состояние, в котором сейчас находится данный компонент.
        cars: [
            {name: 'Porsche', year: 2019},
            {name: '', year: 2019},
            {name: 'Lamborghini', year: 2019},
            {name: 'Porsche', year: 2019},
            {name: 'Lexus', year: 2019},
            {name: 'Lamborghini', year: 2019}
        ],
        pageTitle: 'React практика',
        pageTitle2: 'React components',
        showHome: true,
        showCars: false,
        showAboutUs: false,

    };

    ChenButt = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    };

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars]; // важно понимать, что мы не можем менять старый state, мы должны создавать клоны и менять на новый state
        cars[index] = car;
        this.setState({
            cars: cars
        })
    }

    // Еще вариант метода:
    // toggleCarsHandler = pageTitle => { his.setState({ pageTitle: newTitle }) }

    toggleCarsHandler = () => {
        this.setState({
            showHome: false,
            showAboutUs: false,
            showCars: true
        })
    };

    toggleHomeHandler = () => {
        this.setState({
            showCars: false,
            showAboutUs: false,
            showHome: true
        })
    };
    toggleAboutUsHandler = () => {
        this.setState({
            showCars: false,
            showHome: false,
            showAboutUs: true

        })
    };

    deleteHandler(index) {
        const cars = this.state.cars.concat(); // метод concat - создаст новую копию данного массива.
        cars.splice(index, 1); // указываем что удалить и в каком количестве
        this.setState({cars}) // переопределяем массив oldcars c уже удаленным элементом.
    }

    // componentWillMount() {
    //     console.log('App componentWillMount')
    // }
    //
    // componentDidMount() {
    //     console.log('App componentDidMount')
    // }


    render() {
        const divStyle = {
            borderTop: '1px solid'
        };

        let cars = null;
        let homepage = null;
        let aboutus = null;


        if (this.state.showCars) {
            homepage = null;
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                            onChangeTitle={() => this.ChenButt(car.name)}
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        if (this.state.showHome) {
            homepage = <Home/>
        }
        if (this.state.showAboutUs) {
            aboutus = <ArticleAboutUs/>
        }

        return (
            <div className={'App'} style={divStyle}>
                <header className={'Appheader'}>
                    <div className="row">
                        <div className="head col-md-3">
                            <h2 className="titleTop">{this.state.pageTitle}</h2>
                        </div>
                        <div className="head col-md-9">
                            <ul>
                                <li className={'AppButton'} onClick={this.toggleHomeHandler}>Home</li>
                                <li className={'AppButton'} onClick={this.toggleCarsHandler}>Products</li>
                                <li className={'AppButton'} onClick={this.toggleAboutUsHandler}>About us</li>
                                <li className={'AppButton'}><a href="https://github.com/a5okol/my-app"
                                                               className={'link'}>GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className={'mainBlock'}>
                    <ul>
                        {
                            cars

                            // второй вариант:
                            /*{this.state.showCars
                            ? this.state.cars.map((car, index) => {
                                return (
                                    <Car
                                        key={index}
                                        name={car.name}
                                        year={car.year}
                                        onChangeTitle={() => this.ChenButt(car.name)}
                                    />
                                )
                            })
                            : null
                            // Мы спрашиваем у нашего состояния (применяя тернарную операцию):
                            // Если true, то выдавай нам списки, если false, то нет.}*/
                        }
                    </ul>
                    {homepage}
                    {aboutus}
                </div>
            </div>
        );
    }
}

export default App;
