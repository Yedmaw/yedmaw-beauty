import { useState } from 'react';
export default function En(){
const [l,setL]=useState('en');
return (
<div style={{fontFamily:'system-ui', background:'#fffaf5', minHeight:'100vh', padding:'20px'}}>
<header style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'1000px', margin:'0 auto 40px'}}>
<b style={{fontSize:'22px', letterSpacing:'2px'}}>YEDMAW</b>
<div><button onClick={()=>window.location.href='/fr'} style={{marginRight:10}}>FR</button><b>EN</b></div>
</header>
<main style={{maxWidth:'1000px', margin:'0 auto', textAlign:'center'}}>
<h1 style={{fontSize:'42px', lineHeight:'1.1'}}>Natural Beauty,<br/>Crafted by YEDMAW</h1>
<p style={{color:'#666', margin:'20px 0 30px'}}>Handmade shea & botanical care from Benin. Pure, luxurious, sustainable.</p>
<a href="https://wa.me/2290167000000" style={{background:'black', color:'white', padding:'16px 32px', borderRadius:'30px', textDecoration:'none', fontWeight:'bold'}}>Order on WhatsApp</a>
<div style={{marginTop:'50px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
<div style={{background:'white', padding:'20px', borderRadius:'16px', boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}}><h3>Shea Butter Pure</h3><p>100% natural</p></div>
<div style={{background:'white', padding:'20px', borderRadius:'16px', boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}}><h3>Black Soap</h3><p>With moringa</p></div>
</div>
<p style={{marginTop:'60px', color:'#999', fontSize:'12px'}}>© YEDMAW Beauty - yedmaw.com</p>
</main>
</div>
)}
