import React, {Component} from 'react'
import './style.less'
import {Carousel} from 'antd-mobile';

export default class HouseDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            data: ['1', '2', '3'],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        this.initData();
    }

    initData = async () => {
        let objectId = window.util.getSearchByName('objectId')
        let result = await window.bmob.Query('RentHouseEntity').get(objectId);
        console.log(result)
        if (result != null) {
            this.setState({
                result
            })
        }

    }

    render() {
        let {result} = this.state;
        return (
            <div id="house-detail-root">
                <Carousel className="space-carousel"
                          autoplay={true}
                          infinite
                          frameOverflow="visible"
                          cellSpacing={10}
                          slideWidth={0.8}
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {(result.houseImg || []).map((item, index) => (
                        // <a
                        //     key={val}
                        //     href="http://www.alipay.com"
                        //     style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                        // >
                        <img
                            src={item}
                            style={{width: '100%', height: '160px', verticalAlign: 'top'}}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({imgHeight: 'auto'});
                            }}
                        />
                        // </a>
                    ))}
                </Carousel>

                <div id='house-detail-info'>
                    <span>{result.housePrice}元/月</span>
                    <span>{result.houseSpecial}</span>
                </div>
                <span id='house-detail-title'>{result.houseTitle}</span>
                <span id='house-detail-desc'>{result.houseDesc}</span>
                {
                    (result.houseImg || []).map((item, index) => (
                        <img src={item}/>
                    ))
                }
            </div>
        )

    }

}