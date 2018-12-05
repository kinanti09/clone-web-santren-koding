import React , {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div>
                <h1>hello {this.props.nama}</h1>
                <h1>alamat: {this.props.alamat}</h1>
                <h1>cita-cita: {this.props.cita}</h1>
            </div>
        )
    }
}

export default Header;