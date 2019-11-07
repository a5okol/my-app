import React from 'react'

class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

        render() {
            if (this.state.hasError) {
                const style = {
                    border: '',
                    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
                    ':hover': {
                        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.34)',

                    }
                };
                return (
                <li className={'Car'}  style={style}>
                    <h3 style={{color: 'red'}}>Random failed (тестируем componentDidCatch)</h3>
                    <h5>Вероятность ошибки 10%</h5>
                </li>
                )
            }

            return this.props.children
    } // данный метод будет вызван в том случае, если данный компонент поймет, что его дети словили некоторые exception. Данный метод оборачивает другие компоненты в себя и ловит какие-то ошибки и их выводит.
}

export default ErrorBoundary