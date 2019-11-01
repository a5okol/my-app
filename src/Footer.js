import React, {Component} from 'react'
import './Footer.scss'

class Footer extends Component {

    constructor(props) {

        super(props);
    }

    state = {
        cars: [
            {name: 'Porsche', year: 2019},
            {name: 'Lexus', year: 2019},
            {name: 'Lamborghini', year: 2019}
        ],
        list: [
            {name: 'СПИСОК УСТРОЙСТВ'},
            {name: 'КАРЬЕРА В OKKO'},
            {name: 'АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ'},
            {name: 'КОНТАКТЫ'},
            {name: 'ВОПРОСЫ И ОТВЕТЫ'},
        ],
        pageTitle: 'React components',
        pageTitle2: 'React components',
        showCars: false
    };


    render() {
        const divStyle = {
            borderTop: '1px solid'
        };

        let lists = null;


        return (
            <div className={'Footer'} style={divStyle}>
                <footer className={'Appfooter'}>
                    <div className="row">
                        <div className={'AppFooterLists col-lg-4 col-md-6 col-sm-12'}>
                            <ul>
                                <li>СПИСОК УСТРОЙСТВ</li>
                                <li>КАРЬЕРА В OKKO</li>
                                <li>АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</li>
                                <li>КОНТАКТЫ</li>
                                <li>ВОПРОСЫ И ОТВЕТЫ</li>
                            </ul>
                        </div>
                        <div className={'AppFooterLists col-lg-4 col-md-6 col-sm-12'}>
                            <ul>
                                <li>СПИСОК УСТРОЙСТВ</li>
                                <li>КАРЬЕРА В OKKO</li>
                                <li>АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</li>
                                <li>КОНТАКТЫ</li>
                                <li>ВОПРОСЫ И ОТВЕТЫ</li>
                            </ul>
                        </div>
                        <div className={'AppFooterLists col-lg-4 col-md-6 col-sm-12'}>
                            <ul>
                                <li>СПИСОК УСТРОЙСТВ</li>
                                <li>КАРЬЕРА В OKKO</li>
                                <li>АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</li>
                                <li>КОНТАКТЫ</li>
                                <li>ВОПРОСЫ И ОТВЕТЫ</li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <ul>
                    {
                        lists
                    }
                </ul>

            </div>
        );
    }


}

export default Footer;

