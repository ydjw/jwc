import './style.less'
import React, {Component} from 'react'

export default class EnglishStroy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            englishRedingEntity: {},
            englishContentArray: [],
            chineseContentArray: [],
            timeStr: ""
        }
    }

    componentDidMount() {
        let objectId = window.util.getSearchByName('objectId');
        const query = window.bmob.Query("EnglishReadingEntity");
        query.get(objectId).then(res => {
            this.formatTimeStr(res.createdAt)
            this.setState({
                englishRedingEntity: res,
                englishContentArray: res.englishContent.split('\\'),
                chineseContentArray: res.chieseContent.split('\\')
            })
        }).catch(err => {
            console.log(err.toString());
        });
    }

    showPictureDetail(url) {
        if (window.zhuandian) {
            try {
                window.zhuandian.showPictureDetail(url)
            } catch (e) {
            }
        }
    }


    formatTimeStr(timeStr) {
        let timeArray = timeStr.split(" ")[0].split("-");
        let monthStr = '';
        switch (timeArray[1]) {
            case "01":
                monthStr = "Jan.";
                break;
            case "02":
                monthStr = "Feb.";
                break;
            case "03":
                monthStr = "Mar.";
                break;
            case "04":
                monthStr = "Apr.";
                break;
            case "05":
                monthStr = "May.";
                break;
            case "06":
                monthStr = "Jun.";
                break;
            case "07":
                monthStr = "Jul.";
                break;
            case "08":
                monthStr = "Aug.";
                break;
            case "09":
                monthStr = "Sep.";
                break;
            case "10":
                monthStr = "Oct.";
                break;
            case "11":
                monthStr = "Nov.";
                break;
            case "12":
                monthStr = "Dec.";
                break;
        }

        this.setState({
            timeStr: monthStr + timeArray[2] + " · " + timeArray[0]
        })
    }

    render() {
        let {englishRedingEntity, timeStr, chineseContentArray, englishContentArray} = this.state;
        console.log(englishContentArray, 222);

        return (
            <div id='english-root'>
               <span id='time'>
                {timeStr}
               </span>
                <span id='english-title'>
               {englishRedingEntity.englishTitle}
               </span>
                <span id='chinese-title'>
               {englishRedingEntity.chineseTitle}
               </span>

                <img id='english-content-img' src={englishRedingEntity.imgUrl}
                     onClick={() => this.showPictureDetail(englishRedingEntity.imgUrl)}/>

                <span id='english-content'>
               {
                   (englishContentArray).map((item, index) => {
                       return <p>{item}</p>
                   })
               }
               </span>

                <span id='chinese-content'>
                {
                    (chineseContentArray || []).map((item, index) => {
                        return <p>{item}</p>
                    })
                }
               </span>
            </div>
        )
    }
}