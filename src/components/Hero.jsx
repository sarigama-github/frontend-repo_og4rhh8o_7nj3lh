import { useEffect, useState } from 'react'

export default function Hero() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const t = new Date()
    setTime(t.toLocaleString())
  }, [])
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Royal Starin Teknomaaginen Toiminta-alusta
          </h1>
          <p className="mt-6 text-lg/relaxed text-indigo-100">
            Yrityksen digitaalinen hermosto purkualan mestareille. Suunniteltu strategiaa, operaatioita ja kasvua varten.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 border border-white/20">
              Pyydä tarjous
            </a>
            <a href="#dashboard" className="px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">
              Avaa hallintapaneeli
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70">Sessio aloitettu: {time}</p>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-2xl flex items-center justify-center text-center p-8">
            <div>
              <p className="text-xl font-semibold">43110 Purkutyöt</p>
              <p className="mt-2 text-indigo-100">Nopea, turvallinen ja vastuullinen purkaminen. Royal Star on kumppanisi teollisuudesta asuinrakentamiseen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
