import React, {Component} from 'react'
import Car from './product/Car/Car'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Home from "./home/Home";
import ArticleAboutUs from './Articles/AboutUs'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import CarDetail from './product/Car/CarDetail/CarDetail'
import {connect} from 'react-redux' // подключаем функцию connect, которая работает примерно как hoc
import Counter from './redux/Counter'

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
        isLoggedIn: false
    };

    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        })
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


        // if (this.state.showCars) {
        //     homepage = null;
        //     cars = this.state.cars.map((car, index) => {
        //         return (
        //             <Route path="/products" exact render={() =>
        //                 <ErrorBoundary key={index}>
        //                     <Car
        //                         name={car.name}
        //                         year={car.year}
        //                         index={index}
        //                         onChangeName={(event) => this.onChangeName(event.target.value, index)}
        //                         onChangeTitle={() => this.ChenButt(car.name)}
        //                         onDelete={this.deleteHandler.bind(this, index)}
        //
        //                     />
        //                 </ErrorBoundary>
        //             }/>
        //         )
        //     })
        // }

        // if (this.state.showHome) {
        //     homepage = <Route path="/" exact render={() => <Home/>}/>
        // }
        // if (this.state.showAboutUs) {
        //     aboutus = <Route path="/aboutus" component={ArticleAboutUs} />
        // }

        return (
            <div className={'App'} style={divStyle}>
                <header className={'Appheader'}>
                    <div className="row">
                        <div className="head col-md-3">
                            <h2 className="titleTop">{this.state.pageTitle}</h2>
                        </div>
                        <div className="head col-md-7">
                            <ul>
                                <li
                                    className={'AppButton'}
                                    onClick={this.toggleHomeHandler}>
                                    <NavLink
                                        to="/"
                                        exact
                                        activeClassName={'AppButtonActive'}
                                    >Home</NavLink></li>
                                <li
                                    className={'AppButton'}
                                    onClick={this.toggleCarsHandler}><NavLink
                                    to="/products"
                                    activeClassName={'AppButtonActive'}
                                >Products</NavLink>
                                </li>
                                <li
                                    className={'AppButton'}
                                    onClick={this.toggleAboutUsHandler}>
                                    <NavLink
                                        to={{
                                            pathname: '/aboutus',
                                            search: '?a=1',
                                            hash: 'hash-test'
                                        }}
                                        activeClassName={'AppButtonActive'}
                                        activeStyle={{background: 'yellow'}}
                                    >About us
                                    </NavLink>
                                </li>
                                <li
                                    className={'AppButton'}>
                                    <a href="https://github.com/a5okol/my-app"
                                       className={'link'}>GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div className="head col-md-2">
                            <button onClick={() => this.setState({isLoggedIn: true})} className={'login'}>Login</button>

                            {this.state.isLoggedIn
                                ? <Route render={() =>
                                    <button onClick={() => this.setState({isLoggedIn: false})} className={'login'}>Log
                                        out</button>
                                }/>
                                : null
                            }
                        </div>
                    </div>
                </header>
                <div className={'mainBlock'}>
                    <ul>
                        {cars
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

                    {/* Компонет Switch выдает нам первый попавшийся url, который полностью совподает с url адресом в браузере. То есть, по сути это аналог команды  "exact" */}
                    <Switch>
                        <Route path="/products" exact render={() =>
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
                        }/>

                        <Route path="/" exact component={Home}/>
                        <Route path="/aboutus" exact component={ArticleAboutUs}/>
                        <Route path="/products/:name" exact component={CarDetail}/>
                        {/*Роут для 404 ошибки должен всегда идти последним*/}
                        {/*Вариант 1:
                        <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />*/}
                        {/*Вариант 2:*/}
                        <Route path="/404" exact
                               render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>
                        {/*Редирекст со страницы на страницу (работает только при загрузке страницы):*/}
                        {/*<Redirect from ={'/cars'} to={'/aboutus'}/>*/}
                        {/*<Redirect from ={'/cars'} to={'/aboutus'}/>*/}
                        <Redirect to={'/404'}/>
                    </Switch>

                    <Route path="/products" exact render={() =>
                        <div style={{
                            margin: 20,
                        }}>
                            <button onClick={this.goToHomePage} style={{
                                marginTop: 20
                            }}>Go to home page
                            </button>
                            <br/>
                            <br/>
                            <NavLink
                                to="/cars"
                                activeClassName={''}
                            >
                                <button>Ссылка на /cars с редиректом на aboutus</button>
                            </NavLink>
                            <h3 style={{margin: 20}}>Счетчик Redux <strong>{this.props.counter}</strong></h3>
                            <div className={'Actions'}>
                                <button onClick={this.props.onAdd}>Добавит 1</button>
                                <button onClick={this.props.onSub}>Вычесть 1</button>
                            </div>
                            <div className={'Actions'}>
                                <button onClick={() => this.props.onAddNumber(15)}>Добавит 15</button>
                                <button onClick={() => this.props.onAddNumber(-25)}>Вычесть 25</button>
                                {/*Второй способ передачи данных: можно просто забайндить и передать число*/}
                                <Counter/>
                            </div>
                        </div>

                    }/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) { // функция принимает в себя общий state, который характерен для всего нашего приложения (в нашем случае это объект initialState (из rootReducer.js))

    return {
        counter: state.Counter1.counter // тут мы говорим, что поле state.counter будет равнятся названию counter, И ТЕПЕР, counter мы можем исползоват в данном компоненте не как state, а как props.

    } // эту функцию мы определяем для того, чтобы мы могли вернут новый js объект, где мы изменим и трансформируем какие-то данные из state, для того, чтобы они стали обычными параметрами для компонента, который мы соединяем.
}

function mapDispatchToProps(dispatch) { // эта функция необходима для того, чтобы вернут некоторый объект
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUB'}),
        onAddNumber: number => dispatch({type: 'ADD_NUMBER', payload: number})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App); // вызываем функцию connect и после того, как она будет вызвана, она нам вернет новую функцию, в которую мы уже должны положит тот компонент, с которым мы уже хотим работат. То ест мы вызываем функцию и после этого она нам что-то вернет и эту функцию мы уже вызовим с нашим компонентом.
