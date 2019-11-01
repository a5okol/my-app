import React, {Component} from "react";
import Slider from "react-slick";


class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <div className="Slider">
                    <Slider {...settings}>
                        <div><img src="https://okko.tv/static/aa4d/2673/58e8/4ba7/8c50/635e941b905d/output_1138x640.jpg"
                                  alt="Тайна Коко" width={'450px'}/>
                        </div>
                        <div><img src="https://okko.tv/static/fa7d/7e3a/e113/43ba/bf12/92a13d45e313/output_1138x640.jpg"
                                  alt="Марсианин" width={'450px'}/>
                        </div>
                        <div><img src="https://okko.tv/static/e1c6/5657/124d/408d/b134/da840b28ee0a/output_1138x640.jpg"
                                  alt="Марсианин" width={'450px'}/>
                        </div>
                        <div><img src="https://okko.tv/static/aa4d/2673/58e8/4ba7/8c50/635e941b905d/output_1138x640.jpg"
                                  alt="Тайна Коко" width={'450px'}/>
                        </div>
                        <div><img src="https://okko.tv/static/fa7d/7e3a/e113/43ba/bf12/92a13d45e313/output_1138x640.jpg"
                                  alt="Марсианин" width={'450px'}/>
                        </div>
                        <div><img src="https://okko.tv/static/e1c6/5657/124d/408d/b134/da840b28ee0a/output_1138x640.jpg"
                                  alt="Марсианин" width={'450px'}/>
                        </div>
                    </Slider>
                </div>

                <div>
                    <div className="row">
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </div>
                    <div className="row">
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </div>
                </div>
                <h3 className="zagolovok">Col-6 и col-4</h3>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col-6">col-6</div>
                    <div className="col">col</div>
                </div>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col-4">col-4</div>
                    <div className="col">col</div>
                </div>

                <h3 className="zagolovok">Контент переменной ширины. </h3>

                <div className="row justify-content-sm-center">
                    <div className="col col-md-2">col col-md-2</div>
                    <div className="col-sm-auto">col-sm-auto Контент переменной ширины</div>
                    <div className="col col-md-2">col col-md-2</div>

                </div>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col-sm-auto">Контент переменной ширины(подстраивается под размер текста)</div>
                    <div className="col col-md-2">col col-md-2</div>
                </div>

                <h3 className="zagolovok">Мульти-ряд.</h3>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="w-100">w-100</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                </div>

                <h3 className="zagolovok">Бейкпоинты.</h3>
                <div className="row">
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                    <div className="col">col</div>
                </div>
                <div className="row">
                    <div className="col-8 col-md-6">col-8 col-sm-6</div>
                    <div className="col-4 col-md-6">col-4 col-sm-6</div>
                    <div className="col-6 col-md-8">col-6 col-md-8</div>
                    <div className="col-6 col-md-4">col-6 col-md-4</div>
                </div>

                <h3 className="zagolovok">На мобильных устройствах.</h3>
                <div className="row">
                    <div className="col-sm-8">col-sm-8</div>
                    <div className="col-sm-4">col-sm-4</div>
                </div>
                <div className="row">
                    <div className="col-sm">col-sm</div>
                    <div className="col-sm">col-sm</div>
                    <div className="col-sm">col-sm</div>
                </div>
                <div className="row">
                    <div className="col-md">col-md</div>
                    <div className="col-md">col-md</div>
                    <div className="col-md">col-md</div>
                </div>

                <h3 className="zagolovok">Создание сложной комбинированной сетки.</h3>
                <div className="row">
                    <div className="col-md-8">col-md-8</div>
                    <div className="col-6 col-md-4">col-6 col-md-4</div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4">col-6 col-md-4</div>
                    <div className="col-6 col-md-4">col-6 col-md-4</div>
                    <div className="col-6 col-md-4">col-6 col-md-4</div>
                </div>
                <div className="row">
                    <div className="col-6">col-6</div>
                    <div className="col-6">col-6</div>
                    <div className="col-6">col-6</div>
                </div>

                <h2 className="zagolovok">Вертикальное выравнивание</h2>
                <div className="row align-items-start">
                    <div className="col">Вверх</div>
                    <div className="col">Вверх</div>
                    <div className="col">Вверх</div>
                </div>
                <h3 className="zagolovok">середина</h3>

                <div className="row align-items-center">
                    <div className="col">середина</div>
                    <div className="col">середина</div>
                    <div className="col">середина</div>
                </div>
                <h3 className="zagolovok">низ</h3>

                <div className="row align-items-end">
                    <div className="col">низ</div>
                    <div className="col">низ</div>
                    <div className="col">низ</div>
                </div>

                <h3 className="zagolovok">Строки</h3>
                <div className="row align-items-">
                    <div className="col align-self-start">Вверх</div>
                    <div className="col align-self-center">Середина</div>
                    <div className="col align-self-end">Низ</div>
                </div>

                <h2 className="zagolovok">Горизонтальное выравнивание</h2>
                <div className="row justify-content-start">
                    <div className="col col-4">justify-content-start</div>
                    <div className="col col-4">justify-content-start</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-4">justify-content-center</div>
                    <div className="col col-4">justify-content-center</div>
                </div>
                <div className="row justify-content-end">
                    <div className="col col-4">justify-content-end</div>
                    <div className="col col-4">justify-content-end</div>
                </div>
                <div className="row justify-content-around">
                    <div className="col col-4">justify-content-around</div>
                    <div className="col col-4">justify-content-around</div>
                </div>
                <div className="row justify-content-between">
                    <div className="col col-4">justify-content-between</div>
                    <div className="col col-4">justify-content-between</div>
                </div>

                <h2 className="zagolovok">Удаление полей между колонками</h2>
                <div className="row no-gutters">
                    <div className="col-6 col-sm-4">
                        <div>col-6 col-sm-4</div>
                    </div>
                    <div className="col-6 col-sm-4">
                        <div>col-6 col-sm-4</div>
                    </div>
                    <div className="col-6 col-sm-4">
                        <div>col-6 col-sm-4</div>
                    </div>
                    <div className="col-6 col-sm-4">
                        <div>col-6 col-sm-4</div>
                    </div>
                    <div className="col-6 col-sm-4">
                        <div>col-6 col-sm-4</div>
                    </div>
                    <div className="col-6 col-sm-4">
                        <div>col-6 col-sm-4</div>
                    </div>

                </div>

                <h2 className="zagolovok">Классы порядка элементов.</h2>
                <div className="row">
                    <div className="col">
                        <div>Первый элемент в коде. - col</div>
                    </div>
                    <div className="col order-12">
                        <div>Второй элемент в коде. - col order-12</div>
                    </div>
                    <div className="col order-1">
                        <div>Третий элемент в коде. - col order-1</div>
                    </div>

                </div>

                <br/>
                <div className="row">
                    <div className="col">
                        <div>Первый элемент в коде. - col</div>
                    </div>
                    <div className="col order-last">
                        <div>Второй элемент в коде. - col order-last</div>
                    </div>
                    <div className="col order-first">
                        <div>Третий элемент в коде. - col order-first</div>
                    </div>

                </div>

                <h2 className="zagolovok">Классы смещения. (смещение на количество ячеек)</h2>
                <div className="row">
                    <div className="col-md-4">col-md-4</div>
                    <div className="col-md-4 offset-md-1">col-md-4 offset-md-1</div>
                </div>

                <br/>
                <div className="row">

                    <div className="col-md-3 offset-md-3">col-md-3 offset-md-3</div>
                    <div className="col-md-3 offset-md-1">col-md-3 offset-md-1</div>
                </div>
            </div>
        )

    }
}

export default SimpleSlider