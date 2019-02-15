import React, { Component } from 'react';

class CustomRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.Population} 7</td>
                <td>{this.props.Zone}8</td>
                <td>{this.props.One} 7</td>
                <td>{this.props.Two}8</td>
            </tr>
        );
    }
}

export default CustomRow