import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Rotas/Header'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0; 
  box-sizing:border-box;
  }
  body{
    background-color:black;
  }

  ` 
   
export default class App extends React.Component {
  render() {
    return (
     
      <div> 
         <GlobalStyle/>   
            <Header/>          
          
              
       </div>
    );
  }
}
