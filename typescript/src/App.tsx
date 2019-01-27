import React, { ReactNode, Component } from 'react';
import './style.css';
import { array } from 'prop-types';

interface IPerson {
  name: string,
  lastname: string,
  [key:string]: any,
}

const person1: IPerson = {
  name: "peter",
  lastname: "meier",
}

const person2: IPerson = {
  name: "hans",
  lastname: "müller",
  fast: true,
}

interface IAppState {
  person: IPerson[]
}

interface IAppProps {
  testprop: string,
}

interface IPow {
  x: number,
  y: number,
}

type MyArray = [number?, string?, boolean?];

class App extends Component<IAppProps, IAppState> {

  public readonly state: IAppState = {
    person : []
  }

  public render(): ReactNode {
    return <div className="app" onClick={this.onClick}>app</div>;
  }

  private pow = ({x,y}:IPow): string => {
    return Math.pow(x,y).toString();
  }

  private pushArray = (): any => {
    const arr:MyArray = [];
    arr.push(4);
    arr.push("asdf");
    arr.push(true);
    return arr;
  }


  
  private onClick = (e: React.MouseEvent<HTMLInputElement>): void => {
    this.setState({
      person : [
        ...this.state.person,
        person1,
        person2,
      ]
    })
    this.pow({x: 23,y: 234});
    this.pushArray();
    console.log(this.state);
  }
}

export default App;


// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';

// interface IPerson {
//   name: string,
//   lastname: string,
// }

// class App extends Component {
//   state = {
//     person : []
//   }

//   onClick = (e: React.MouseEvent<HTMLInputElement>) => {
//     this.setState({
//       person : [
//         ...this.state.person,
//         { name : "peter", lastname: "meier", }
//       ]
//     })
//     console.log(this.state);
//   }

//   render(){
//     return <div className="app" onClick={this.onClick}>app</div>;
//   }
// }

// export default App;