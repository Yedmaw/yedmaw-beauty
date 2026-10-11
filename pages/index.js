import { useState } from 'react';
export default function Home() {
  const [added, setAdded] = useState(false);
  const handleBuy = () => {
    setAdded(true);
    window.location.href = "https://flutterwave.com/pay/yedmaw-del";
  };
  return (
    <div style={{fontFamily:'Arial', background:'white', minHeight:'100vh'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'15px', borderBottom:'1px solid #eee'}}>
        <span style={{color:'#f8a4b8', fontWeight:'bold'}}>YEDMAW | Beauté</span>
        <span>❤️ 🛒</span>
      </div>

      <div style={{background:'#fce7f3', padding:'40px', textAlign:'center', position:'relative'}}>
        <span style={{position:'absolute', top:'15px', right:'15px', background:'#f8a4b8', color:'white', padding:'10px 18px', borderRadius:'30px', fontWeight:'bold', fontSize:'14px', lineHeight:'1.2'}}>ECONOMISEZ<br/><span style={{fontSize:'22px'}}>54%</span></span>
        <img src="https://m.media-amazon.com/images/I/61j3F5a5G+L._AC_SL1500_.jpg" style={{width:'100%', maxWidth:'300px', borderRadius:'30px', margin:'0 auto', display:'block'}} alt="Appareil DEL"/>
      </div>

      <div style={{padding:'20px'}}>
        <h1 style={{fontSize:'24px', fontWeight:'bold', margin:'0'}}>une peau radieuse à la maison</h1>
        <h2 style={{color:'#f8a4b8', fontSize:'20px', marginTop:'5px'}}>Appareil DEL</h2>
        <div style={{marginTop:'12px'}}>⭐⭐⭐⭐⭐ <b>4.9/5</b> <span style={{color:'gray'}}>(2 341+ avis)</span></div>
        <div style={{marginTop:'16px', display:'flex', gap:'15px', alignItems:'baseline'}}>
          <span style={{fontSize:'36px', fontWeight:'bold', color:'#f8a4b8'}}>79,99$</span>
          <span style={{fontSize:'22px', textDecoration:'line-through', color:'gray'}}>129,99$</span>
        </div>
        <p style={{color:'#f8a4b8', fontSize:'14px'}}>Économisez 50,00$ aujourd'hui</p>
        <button onClick={handleBuy} style={{width:'100%', background:'#f8a4b8', color:'white', fontWeight:'bold', padding:'18px', borderRadius:'15px', marginTop:'20px', fontSize:'18px', border:'none'}}>
          {added ? "✓ AJOUTÉ !" : "AJOUTER AU PANIER"}
        </button>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'20px', fontSize:'12px', textAlign:'center', color:'#555'}}>
          <div>🚚<br/>livraison gratuite</div>
          <div>🔒<br/>paiement sécurisé</div>
          <div>📅<br/>garantie 30 jours</div>
        </div>
      </div>
    </div>
  );
}
