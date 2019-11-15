import React from 'react'
// import Radium from 'radium'
import PropTypes from 'prop-types'
import './Car.css'
import {withRouter} from 'react-router-dom'


class Car extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.focus()
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('Car componentWillReceiveProps', nextProps);
    // } // данный метод необходим для того, чтобы оаколизировать некоторый локальный state (если он есть) с локальными свойствами. (метод редко используется)

    shouldComponentUpdate(nextProps, nextState) {

        return nextProps.name.trim() !== this.props.name.trim() // отменяем повторный рендеринг страницы в случае, если к строке добавлен просто пробел
    } // это единственный метод, который должен что-то вернуть (true или false)

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Car componentWillUpdate', nextProps, nextState);
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //
    //     return prevState // (тут мы сожем вернуть различные данные) // return необходим для преобразования и синхронизации со свойством, нам необходимо просто вкрнуть новый объект. Return по сути является результирующим стейтом для нашего компонента.
    //
    // } // данный жизненный цикл создан для того для замены метода componentWillUpdate, применяется для того, чтобы обезопасить работу с react. Метод применяется для того, чтобы запретить работу с преобразавание state на прямую и позволяет делоть это немного по другому.

    componentDidUpdate() {
    }

    getSnapshotBeforeUpdate() {
    } // данный метод позволяет получить еще не измененные Dom-дерево до обновления.

    // componentWillUnmount(){
    //     console.log('Car componentWillUnmount');
    // } // данный метод вызывается тогда, когда идет разрешение нашего компонента и он удаляется у нас из DOM дерева. Тут мы можем очищать различные таймеры, подписки и другие вещи, что позволяет очистить данные при удалении компонента.

    render() {
        if (Math.random() < 0.03) {
            throw new Error('Car random failed (тестируем componentDidCatch)')
        }

        const inputClasses = ['input']; // задаем класс input по-умолчанию. (без точки, мы просто указываем название класса)

        if (this.props.name !== '') { // если props.name не равен пустой строке, то:
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
            ':hover': {
                boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.34)',

            }
        };

        return (
            <li
                className={'Car'}
                style={style}
            >
                <h2
                    onClick={() => this.props.history.push('/products/' + this.props.name.toLowerCase())}
                > Click: {this.props.name}</h2>
                <h3> Year: {this.props.year}</h3>

                <input
                    ref={(inputRef) => this.inputRef = inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')} // в свойство className мы должны передавать строку для того, чтобы все правильно конвертировалось в обычные атрибуты (массивы данные параметры не понимают), поэтому передаем сюда массив и превращаем его в строку при помощи метода .join
                />
                <button onClick={this.props.onChangeTitle}>Click</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </li>
        );
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
};

// export default Radium(Car)
export default withRouter(Car)
