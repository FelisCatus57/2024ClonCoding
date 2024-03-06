import React, { Component, component } from 'react';
import dummyData from './data.json';

import '../CSS/StoryContent.css'

class StoryContent extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        fetch('API') //엔드포인트 URL을 받는 곳
            .then(response => response.json()) //응답성공시 해당 객체를 가져온다.
            .then(data => this.setState({items: data})) //데이터파싱으로 state 업데이트
            .catch(error => console.error("Error fetching data: ", error))
    }
    */

    render() {
        return (
            <div>
                {dummyData.map(item => ( // dummyData 배열을 직접 맵핑
                    <div key={item.id}>{item.name}</div> // 각 아이템의 id와 title 사용
                ))}
            </div>
        )
    }
}

export default StoryContent