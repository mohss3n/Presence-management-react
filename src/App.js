import { useState,useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const jso=[]
  const [st,setst]=useState('')
  const [ser,setser]=useState('')
  const [namex,setname]=useState('')
  const [prename,setprename]=useState('')
  const [age,setage]=useState('')
  const [dt,setdt]=useState(jso)
 const rr=useRef();

 const devowf1=[{
  id:1,
  state: st,
  name: "hasna",
  prename: "yan",
  age: 27},
  {
  id:2,
  state: st,
  name: "hamid",
  prename: "azz",
  age: 35,
  },{
  id:3,
  state: st,
  name: "nora",
  prename: "ddd",
  age: 25}
]

const devowf2=[
{id:1,
state: st,
name: "lamyae",
prename: "yan",
age: 27},
{
id:2,
state: st,
name: "jack",
prename: "nor",
age: 35
},
{  
id:3,
state: st,
name: "yara",
prename: "ddd",
age: 25}

]
const Devinfographie=[ 
   {id:1,
  state: st,
name: "nora",
prename: "yan",
age: 27},
{
id:2,
state: st,
name: "lola",
prename: "azz",
age: 35},
{  
id:3,
state: st,
name: "kamal",
prename: "ddd",
age: 25}]

const DevMobile=[  {id:1,
  state: st,
name: "meryem",
prename: "yan",
age: 27},
{
id:2,
state: st,
name: "safae",
prename: "azz",
age: 35
},
{  
id:3,
state: st,
name: "hasna",
prename: "ddd",
age: 25}]

  function show(){
    const rv=rr.current.value

if(rv=="Devowf1"){
  setdt(devowf1)
}
else if(rv=="Devowf2"){
  setdt(devowf2)
  }
  else if(rv=="Devinfographie"){
  setdt(Devinfographie)
  }
  else if(rv=="DevMobile"){
  setdt(DevMobile)
  }
}
  function add(){
    const hh=[{
      id: parseInt(Math.random()*10),
      stat: st ,
      name:namex,
      prename: prename,
      age: age,
    },]
 
 setdt((jso)=>{ return jso.concat(hh)})

  } 

  function abs(id){
    const ss=dt.filter((e)=>{
      if (e.id==id){
        return e.id=id+" (Present)"

      }
    })
    setdt(ss)
   }

 function del(id){
const de=dt.filter((f)=>
  f.id!==id);
 setdt(de)
 }
  return (
    <div className="App text-center">
      <header className="App-header">
        <label>name : </label>
        <input className="form-control-sm" type="text" onChange={(e)=>setname(e.target.value)}/> 
        <br></br>
        <br></br>
        <label>prename : </label>

        <input className="form-control-sm"  type="text" onChange={(e)=>setprename(e.target.value)}/> 
        <br></br>
        <br></br>
        <label>age : </label>

        <input  className="form-control-sm" type="text" onChange={(e)=>setage(e.target.value)}/>
        <br></br>
        <br></br>


        <input className="btn btn-success m-3"type="button" value="add" onClick={add}/> 
   
    <br></br>

   <select classname="m-4" onChange={show} ref={rr}>
  <option>Devowf1</option>
  <option>Devowf2</option>
   <option>DevMobile</option>
  <option>Devinfographie</option>
  
 </select>
 <br></br>

        <input className="btn btn-success m-3 "type="button" value="show" onClick={show}/> 
        <br></br>
<label>chercher :</label>
<br></br>

        <input className="btn btn-info m-3" type="text"  onChange={(e)=>{setser(e.target.value)}}/> 
<table border="2px"  className="table">
<tr>
  <td>id</td>
  <td>name</td>
  <td>prename</td>
  <td>age</td>
  <td>statue</td>
  <td>actions</td>
</tr>
   { dt.filter((p)=>{
return (p.name.includes(ser))

}).map((it)=>( 
    <tr>
   <td>{it.id}</td>
   <td>{it.name}</td>
   <td>{it.prename}</td>
   <td>{it.age}</td>
   <td> <input  className="btn btn-danger active" value="absent" type="button" onClick={()=>abs((it.id))}/>
   <input  className="btn btn-info active m-2" value="present" type="button" onClick={()=>abs((it.id))}/></td>
   <td> <input  className="btn btn-danger active" value="delete" type="button" onClick={()=>del((it.id))}/></td>
   </tr>

   ))
  }
</table>
      </header>
    </div>
  );
}

export default App;
