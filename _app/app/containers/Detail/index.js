import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import Info from './subpage/Info';
import Comment from './subpage/Comment';
import Buy from '../../components/Buy/index';
import {connect} from 'react-redux';
import * as Actions from '../../actions/store';
import {bindActionCreators} from 'redux';
 class Detail extends Component{
     constructor(){
         super();
         this.state={
             isStore:false
         }
     }
    render(){
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore}/>
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
       let id=this.props.match.params.id;
        //数组的some  如果登录返回true 未登录返回false
        let flag=this.props.store.some(item=>item===id);
        if(flag){
            this.setState({
                isStore:flag
            })
        }
    }
    checkLogin(){
        if(this.props.userInfo.username){
            return true;
        }
        return false
    }
    buy(){
        let flag=this.checkLogin();
        if(flag){
            this.props.history.push('/user');
        }else {
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
    }
    store(){
        let flag=this.checkLogin();
        if(!flag){
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
        let id=this.props.match.params.id;
        if(this.state.isStore){
            this.props.storeActions.remove(id);
        }else {
            this.props.storeActions.add(id);
        }
        this.setState({
            isStore:!this.state.isStore
        })
    }
}
export  default connect(
    state=>{
        return {
            userInfo:state.userInfo,
            store:state.store
        }
    },
    dispatch=>{
        return{
            storeActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Detail)