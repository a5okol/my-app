import React from 'react'
// import Radium from 'radium'
import './Car.css'


class Car extends React.Component {


    // componentWillReceiveProps(nextProps) {
    //     // console.log('Car componentWillReceiveProps', nextProps);
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log('Car shouldComponentUpdate', nextProps, nextState);
    //     //return nextProps.name.trim() !== this.props.name.trim() // отменяем повторный рендеринг страницы в случае, если к строке добавлен просто пробел
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     // console.log('Car componentWillUpdate', nextProps, nextState);
    // }
    //
    // componentDidUpdate(){
    //     // console.log('Car componentDidUpdate');
    // }

    render() {
        // console.log('Car render');
        const inputClasses = ['input']; // задаем класс input по-умолчанию. (без точки, мы просто указываем название класса)

        if(this.props.name !== '') { // если props.name не равен пустой строке, то:
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
        if(this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
            ':hover': {
                boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.34)',

            }
        };

        return(
            <li className={'Car'} style={style}>
                <h2> Car name: {this.props.name}</h2>
                <h3> Year: {this.props.year}</h3>
                <input
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

// export default Radium(Car)
export default Car
