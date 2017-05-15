/**
 * Created by julian.zelayeta on 15/5/2017.
 */
import React from 'react';
import './login.css'
var User = React.createClass({
    render: function () {
        return  <input type="text"  className = "userInput" placeholder="email" />
    }
});

var Password = React.createClass({
    render: function () {
        return   <input type="text"  className="passwordInput" placeholder="password" />
    }
});

var LoginButton = React.createClass({
    render:function () {
        return  <button type="button" className="loginButton">Login</button>
        //return <input type="button" value="Login" className="loginButton"/>
    }
});

var RegistrarseLink = React.createClass({
    render:function () {
        return <a href="https://www.google.com.ar" className="registrar">Registrarse</a>
    }
});


var SimpleOfferLogo =  React.createClass({
    render:function () {

    }
});

var BottomImages = React.createClass({
    render: function () {
        return <div className="bottomImages">
            <img src={require('../images/house_login.png')} className="images"/>
            <img src={require('../images/person_login.png')} className="images"/>
        </div>
    }
})

var Form = React.createClass({
    render:function () {
        return  <div className="form-style-8">
                <form>
                    {this.props.children}
                 </form>
                 </div>
    }
});

var FormBuilder = React.createClass({
    render: function () {
        return <Form>
            <User/>
            <Password/>
            <LoginButton/>
            <RegistrarseLink/>
            <BottomImages/>
        </Form>
    }
})

export default FormBuilder;