import React, { Component } from 'react';
import './App.css';

class AjaxTest4 extends Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            item:{},
            id:"",
            address:""
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.id);
        console.log(this.state.address);
    }
    handleSubmit = (e) => {
        //전송방지
        e.preventDefault();
        console.log("handleSubmit");
        if(!this.state.id){
            alert("id를 입력하세요");
            return;
        }
        console.log("http://jeunsong.dothome.co.kr/ajaxDB3.php?id="+this.state.id);


        fetch("http://jeunsong.dothome.co.kr/ajaxDB3.php?id="+this.state.id)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    item: result
                });
                console.log(result);
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        );
    }

    handleSubmit2 = (e) => {
        //전송방지
        e.preventDefault();
        console.log("handleSubmit");
        if(!this.state.address){
            alert("주소를 를 입력하세요");
            return;
        }
        console.log("http://jeunsong.dothome.co.kr/ajaxDB5.php?address="+this.state.address);


        fetch("http://jeunsong.dothome.co.kr/ajaxDB5.php?address="+this.state.address)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    item: result
                });
                console.log(result);
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        );
    }


    render(){
        const {item} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='id' onChange={this.handleChange}></input>
                    <input type="submit" value="search"></input>
                </form>
                <form onSubmit={this.handleSubmit2}>
                    <input type='text' name='address' onChange={this.handleChange}></input>
                    <input type="submit" value="search"></input>
                </form>
                <div>
                    <table id="td">
                        <th>아이디</th>
                        <th>이름</th>
                        <th>주소</th>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default AjaxTest4;