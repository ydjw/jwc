import React, {Component} from 'react'
import './style.less'

export default class RentHouse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            bannerUrl: "http://pic.3h3.com/up/2019-4/201904131049369108.png"
        }
    }

    componentDidMount() {

        this.initData();
    }

    async initData() {
        let result = await window.bmob.Query('RentHouseEntity').find();
        if (result != null) {
            this.setState({
                result: result
            })
        }


        let i = 0;
        let bannerUrlArray = ["http://pic.3h3.com/up/2019-4/201904131049369108.png",
            "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00464-2238.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1061560214,3153100919&fm=26&gp=0.jpg"
        ];
        setInterval( ()=> {
            this.setState({
                bannerUrl: bannerUrlArray[i++ % 3],
            })
        }, 3000)

    }

    render() {
        let {result, bannerUrl} = this.state
        return (
            <div id='rent-house-root'>
                <span id='rent-house-title'>热门房子出租</span>
                <img id='top-img' src={bannerUrl}/>
                <p>精品房源</p>
                {
                    (result || []).map((item, index) => {
                        return (
                            <div id="rent-house-item">
                                <img id="house-item-img" src={result[index].houseImg[0]}/>
                                <div id="house-info">
                                    <span>{result[index].houseTitle}</span>
                                    <span>{result[index].houseDesc}</span>
                                    <span>{result[index].houseSpecial}</span>
                                    <span>{result[index].housePrice}/月</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}