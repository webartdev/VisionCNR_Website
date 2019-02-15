import React, { Component } from 'react';
import CustomRow from './CustomRow';
/* Table React Component */
// const TABLE_CONFIG = {
//     state: [],
//     sort: { column: "Zone", order: "desc" },
//     columns: {
//       col1: { name: "Zone", filterText: "", defaultSortOrder: "desc" },
//       col2: { name: "Population", filterText: "", defaultSortOrder: "desc" }
//     }


const rows = [];
// this.state.zones.forEach(function(zone) {
//     rows.push(
//       <tr>
//         <td>
//             {/* <SomePopulationComponent /> */}
//             123
//             </td>
//         <td>
//             456
//             {/* <SomeZoneComponent /> */}
//             </td>
//       </tr>
//     );
// }.bind(this));
// const rows = [];


class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Zone</th>
                        <th>Population</th>
                        <th>One</th>
                        <th>Two</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {rows} */}
                    {
                    
                            rows.push(<CustomRow />)
                     
                    }
                </tbody>
            </table>
        );
    }
}



export default Table;
//   const Table = React.createClass({
    // getInitialState: function() {
    //   const tabledata = [];
    //   const length = _.size(testJSON.zones);
    //   for(i = 0; i < length; i++) {

    //     const name = _.keys(testJSON.zones)[i];

    //     const population = testJSON.zones[name].population.value;
    //     if(name == "default") {
    //       population = testJSON.zones[name].population.default.value;
    //     }

    //     tabledata[i] = {name, population};
    //   }
    //   console.log(tabledata);
    //   return {zones: tabledata};
    // },

    // render: function() {
    //   const rows = [];
    //   this.state.zones.forEach(function(zone) {
    //       rows.push(<tr Population={zone.population} Zone={zone.name} />);
    //   }.bind(this));
    //   console.log(rows);


