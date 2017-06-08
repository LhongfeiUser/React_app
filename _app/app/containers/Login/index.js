import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';//拿到所有actionCreator的对象
import {bindActionCreators} from 'redux';
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false//默认没登录过，写一个方法检验是否登录
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
    login(username){
        let info =this.props.userInfo;
        info.username=username;
        this.props.userActions.update(info);
        console.log(this.props.match.params.route);
        if(this.props.match.params.route){
            this.props.history.push(decodeURIComponent(this.props.match.params.route))
        }else {
            this.props.history.push('/user')
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){//检查是否登录，在redux中state.userInfo 是否有username，有就登录过
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({
            login:true,//显示组件
        })
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)
