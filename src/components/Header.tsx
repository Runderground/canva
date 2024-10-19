import { useEffect, useRef } from 'react'

export default function Header() {
  const timer = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let tempo: number = 3600
    if(timer.current) {
      setInterval(() => {
        const minutos = Math.floor(tempo / 60)
        const segundos = tempo % 60;

        tempo--

        timer.current.textContent = `${minutos}:${segundos < 10 ? '0'+segundos : '' +segundos}`
      }, 1000)
    }
  },[])
  return (
    <header style={{width: "100%", textAlign: 'center', background: 'rgba(255, 40 , 50)', fontWeight: '400', letterSpacing: '1px', padding: '.5rem 0'}}>
      <span style={{color: 'white', fontWeight: 'bold'}}>OFERTA POR POUCO TEMPO!! - <span ref={timer}>60:00</span></span>
    </header>
  )
}