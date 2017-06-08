import React, {Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="back header-component">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <sapn>
                    {this.props.title}
                </sapn>
            </div>
        )
    }

    back() {
        if (this.props.back) {
            this.props.history.push(this.props.back);
        } else {
            this.props.history.go(-1);
        }
    }
}
