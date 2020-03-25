import React from 'react';
import './App.css';

const navcont = [
  {
    name:'Home',
    ref:'https://www.home.com/',
  },
  {
    name:'Service',
    ref:'https://www.service.com/',
    drop :[
      {
        name:'For entrepreneurs',
        ref:'https://ent.com/'
      },
      {
        name:'For student',
        ref:'https://ent.com/'
      },
      {
        name:'For hobbyists',
        ref:'https://ent.com/'
      }
    ]
  },
  {
    name:'Contact',
    ref:'https://www.contact.com/',
  },
  
]


function Fill(props){
  const navecontent = props.navcontent
  let newarr=[]
  for (let i of navecontent)
     {
       // eslint-disable-next-line
     {i.drop ? (newarr.push(
         <li key={i} className="navkey" ID="drop"><a href={i.ref} className="navkey">{i.name}</a>
        <ul className="dropdown-menu">{i.drop? i.drop.map((el,j) =><li key={j} className="dropdownkey"><a href={el.ref} className="dropdownkey1">{el.name}</a></li>): null}</ul>
        </li>))
    
      
       : newarr.push(
          <li key={i} className="navkey" ID="nodrop"><a href={i.ref} className="navkey">{i.name}</a></li>)
       }
      }
     
    
return newarr;
}
function Navmenu(){
  return(
  <div className="test">
    <ul className="navbar">
    <Fill navcontent={navcont} />
    </ul>
  </div>
  )
}




function App() {
  return (
    <Navmenu />
  );
}

export default App;
