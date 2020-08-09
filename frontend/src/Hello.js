import React, { Component } from 'react'
import axios from 'axios' ;


export default class Hello extends Component {   


  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/hello-view")
      .then(res => {
        const persons = res;
        console.log(persons.data);
      })
  }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
