import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,distance,price,number,id}=this.props.data;
        return (
        <Link to={"/detail/"+id}>
            <div className="list-item">
                <img src={img} alt=""/>
                <div className="list-item-content">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <div>
                        <strong>￥{price}</strong>
                        <span>{number}</span>
                    </div>
                    <span className="distance">{distance}</span>
                </div>
            </div>
        </Link>
        )
    }
}