import React,{Component} from 'react';
import Star from '../../Star/index'
import './index.less'
export default class CommentItem extends Component{
    render(){
        let {username,star,comment}=this.props.data;
        return (
            <div className="comment-item">
                <div>
                    <i className="iconfont icon-yonghufill"></i>
                    {username}
                </div>
                <Star count={star}></Star>
                <div>
                    {comment}
                </div>
            </div>
        )
    }
}
