import logo from './logo.png';
import './App.css';
import Ai from "./ai.png";
import person from "./imgperson.png";
import left from "./left.png";
import right from "./right.png";
import p from "./p.png";
import p1 from "./p1.png";
import p2 from "./p2.png";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import p3 from "./p1.png";
import s5 from "./s5.png";
import s6 from "./s6.png";
import s7 from "./s7.png";
import s8 from "./s8.png";
import social from "./social.png";
import { useState } from 'react';
import about from "./about.png";
function App() {
  const [page,setpage]=useState("home");
  return (<>
  {page=="home"?
    <div className="App">
      <div className='trianglediv'>

      
      <nav>
        <img src={logo}className='leftnav'/>
        <div className='rightnav'>
          <p onClick={()=>setpage('home')}>Home</p>
          <p onClick={()=>setpage('About')}>Who we are</p>
          <p onClick={()=>setpage('services')}>What we do</p>
          <p onClick={()=>setpage('Career')}>Careers</p>
          <p onClick={()=>setpage('Reach')}>Reach us</p>
          <button onClick={()=>setpage('price')}>Pricing</button>
        </div>
      </nav>
      <div className='imgdiv'>
        <p className='t1'>Empowering</p>
 <p className='t1'>Your Business Growth</p>
 <div className='colordiv'></div>
 <p className='t2'>Unlocking Potential Through Exceptional Services</p>
 <button>Know more</button>
<div className='overlay'></div>
      </div>
</div>

      <p className='t3'>Key Services</p>
      <p className='t4'>Website content is information that is hosted on your website, presented through a variety of media. This can include bite-sized information like contact details, your company’s value propositions, and mission statment.It can also incorporate long form content like blog post that educate vistors and establish you as an authority</p>
    
    <div className='servicesimg'>
<div className='divfull'>
<div className='divleft'>
  <div className='divimg1'>
    <div className='img1'>
    <img  src={s1}/>
    <p>Team Building</p>
    </div>
    <div className="img2">

      <p>Office Setup</p>
    <img src={s2}/>
</div>
  </div>
  <div className='divimg1'>
    <div className='img3'>
    <img  src={s3}/>
    <p>Extended Team Setup</p>
    </div>
    <div className="img4">

      <p>Recruitment Services</p>
    <img src={s4}/>
</div>
  </div>
  <div className='divimg1'>
    <div className='img5'>
    <img  src={s5}/>
    <p>Payroll Management</p>
    </div>
    <div className="img6">

      <p>Branding & Advertising</p>
    <img src={s6}/>
</div>
  </div>
</div>
<div className='divright'>
<div className='img7'>
    <img  src={s7}/>
    <p>Leadership Hiring</p>
    </div>
    <div className='img8'>
    <img  src={s8}/>
    <p>Consultancy Services</p>
    </div>
</div>
</div>
    </div>
    
    <p className='t5'>Why Choose ABD Solutions</p>
    <p className='t4'>Website content is information that is hosted on your website, presented through a variety of media. This can include bite-sized information like contact details, your company’s value propositions, and mission statment.It can also incorporate long form content like blog post that educate vistors and establish you as an authority</p>
<div className='reasonswhyabd'>
<div className='reasonimg'>
  <img src={person}/>
</div>
<div className='reason'>
  <div className='r1'>
<div>Expert Team with Industry Experience</div>
<div>
Solutions For Every Business Size
</div></div>
<div className='r2'>
<div className='d1'>Cost Effective Strategies</div>
<div>Scalable Services for Future Growth</div>
</div></div>
</div>
<p className='t5'>Client Success Stories</p>
<div className='clientstory'>

  <div className='storydiv'>
    <img src={left}/>
    <p className='t6'>Website content is information that is hosted on your website, presented through a variety of media. This can include bite-sized information like contact details, your company’s value propositions, and mission statment.It can also incorporate long form content like blog post that educate vistors and establish you as an authority</p>
    <img src={right}/>
  </div>
  <div className='imgcarousel'> 
<button>{"<"}</button>
<img src={p}/>
<img src={p1}/>
<img src={p2}/>
<img src={p3}/>
<button>{">"}</button>
  </div>
</div>
<footer>
  <div className='logodiv'>
    <div>
      <img src={logo}/>
     
    </div>
    <div >
      <img className='aimg' src={Ai}/>
    </div>
  </div>
  <div className='optiondiv'>
<div className='option1'>
  <ul>
    <li>Home</li>
    <li>Who we are</li>
    <li>What we do</li>
    <li>Pricing</li>
    <li>Careers</li>
  </ul>
</div>
<div className='option2'>
<ul>
    <li><b>More Info</b></li>
    <li>Privacy Policy</li>
    <li>Terms of use</li>
    <li>Legal</li>
    
  </ul>
</div>
<div className='option3'>
<ul>
    <li><b>Reach us</b></li>
    <li>Customer Support</li>
    <li>info@abs.com</li>
    
    
  </ul>

 </div>
 <div className='option2'>
<ul>
    <li><img src={social}/></li>
   
    
  </ul></div>
 
  </div>
</footer>
    </div>
:
<div className="App">



<nav className='nav'>
  <img src={logo}className='leftnav'/>
  <div className='rightnav'>
    <p onClick={()=>setpage('home')}>Home</p>
    <p onClick={()=>setpage('About')}>Who we are</p>
    <p onClick={()=>setpage('services')}>What we do</p>
    <p onClick={()=>setpage('Career')}>Careers</p>
    <p onClick={()=>setpage('Reach')}>Reach us</p>
    <button onClick={()=>setpage('price')}>Pricing</button>
  </div>
</nav>
{
  page=="About"?<div>
    <p className='intro'>Who we are</p>
  <div className='aboutdiv'>
  
    <div><p>Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum malesuada.Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum malesuada.Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum malesuada Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum malesuada Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum malesuada Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum malesuada</p></div>
    <div><img src={about}/></div>
    </div></div>
:page=="Reach"? <div>
<p className='intro'>Reach to us</p><div className='contactdiv'>
 
<div><p>Lorem ipsum dolor sit amet consectetur.</p>
<input type="text" placeholder='Enter first name'></input>
<input type="text" placeholder='Enter last name'></input>

<input type="text" placeholder='Enter email id'></input>
<button onClick={()=>alert("Your Message is submitted.Our team will reach out to you soon.")}>Submit</button>
</div>
<div><img src={about}/></div>
</div></div>:
page=="Career"?
<div>
<p className='intro'>Current Openings</p><div className='carrerdiv'>
 
<div className='div1'><p>Lorem ipsum dolor sit amet consectetur.</p>
<p>Filter 1 </p>
<p>Filter 2 </p>
<p>Filter 3 </p>
<p>Filter 4 </p>

<button onClick={()=>alert("Your Message is submitted.Our team will reach out to you soon.")}>Submit</button>
</div>
<div>
  <div className='div3'>
    <img></img>

    <div className='div2'>
      <p><b>Position Name</b></p>
      <p>Description</p>
      <button className='apbtn'onClick={()=>alert("Successfully applied for the position")}>Apply</button>
    </div>
  </div>
  <div className='div3'>
    <img></img>

    <div className='div2'>
      <p><b>Position Name</b></p>
      <p>Description</p>
      <button className='apbtn'onClick={()=>alert("Successfully applied for the position")}>Apply</button>
    </div>
  </div>
  <div className='div3'>
    <img></img>

    <div className='div2'>
      <p><b>Position Name</b></p>
      <p>Description</p>
      <button className='apbtn' onClick={()=>alert("Successfully applied for the position")}>Apply</button>
    </div>
  </div>
  <div className='div3'>
    <img></img>

    <div className='div2'>
      <p><b>Position Name</b></p>
      <p>Description</p>
      <button className='apbtn'onClick={()=>alert("Successfully applied for the position")}>Apply</button>
    </div>
  </div>
  </div>
</div>

</div>:page=="price"?<div>
<p className='intro'>Our Services</p>
<table>
  <tr>
    <th>S.No</th>
    <th>Product Name</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Software1</td>
    <td>10000$</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Software2</td>
    <td>11000$</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Software3</td>
    <td>12000$</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Software4</td>
    <td>120040$</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Software5</td>
    <td>1000$</td>
  </tr>
</table>
</div> :<div>
<p className='intro'>Our Services</p>
<div className='servicesdiv'>
<p>Setup office</p>
<p>
Product Development</p>
<p>
Payroll management</p>
<p>
Third-party arrangement - vendors, cafeteria etc</p>
<p>
Consultancy - optimize cost, execution strategy, streamlining business</p>
<p>
Raising Funds</p>
<p>
Leadership Hiring - hiring leaders</p> <p>
Building Extended Team - hiring and setting up teams in different locations</p>
<p>
Hiring Candidates for Clients
</p>
 
</div>
</div>}



<footer>
<div className='logodiv'>
<div>
<img src={logo}/>

</div>
<div >
<img className='aimg' src={Ai}/>
</div>
</div>
<div className='optiondiv'>
<div className='option1'>
<ul>
<li>Home</li>
<li>Who we are</li>
<li>What we do</li>
<li>Pricing</li>
<li>Careers</li>
</ul>
</div>
<div className='option2'>
<ul>
<li><b>More Info</b></li>
<li>Privacy Policy</li>
<li>Terms of use</li>
<li>Legal</li>

</ul>
</div>
<div className='option3'>
<ul>
<li><b>Reach us</b></li>
<li>Customer Support</li>
<li>info@abs.com</li>


</ul>

</div>
<div className='option2'>
<ul>
<li><img src={social}/></li>


</ul></div>

</div>
</footer>
</div>}</>
  );
}

export default App;
