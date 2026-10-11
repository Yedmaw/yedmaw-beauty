export default function Home(){
  if(typeof window !== 'undefined'){
    const lang = navigator.language.startsWith('fr') ? '/fr' : '/en';
    window.location.href = lang;
  }
  return <div style={{textAlign:'center',padding:'50px',fontFamily:'sans-serif'}}>YEDMAW BEAUTÉ - Redirection...</div>
}
