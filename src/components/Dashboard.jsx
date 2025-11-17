import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard(){
  const [sigils, setSigils] = useState([])
  const [leads, setLeads] = useState([])
  const [projects, setProjects] = useState([])
  const [tickets, setTickets] = useState([])

  const load = async () => {
    try {
      const [a,b,c,d] = await Promise.all([
        fetch(`${API}/sigils`).then(r=>r.json()),
        fetch(`${API}/blog`).then(r=>r.json()),
        fetch(`${API}/projects`).then(r=>r.json()),
        fetch(`${API}/tickets`).then(r=>r.json()),
      ])
      setSigils(a)
      setLeads(b) // using blog as placeholder list for demo cards; could be leads endpoint if needed
      setProjects(c)
      setTickets(d)
    } catch (e) { console.error(e) }
  }

  useEffect(()=>{ load() }, [])

  return (
    <section id="dashboard" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Virtuaalinen Alttari (Hallintapaneeli)</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Card title="Aktiiviset sigillit" value={sigils.filter(s=>s.status==='active').length} />
          <Card title="Projektit käynnissä" value={projects.filter(p=>p.status==='active').length} />
          <Card title="Avoimet tiketit" value={tickets.filter(t=>t.status==='open').length} />
          <Card title="Julkaistut artikkelit" value={leads.filter(l=>l.published).length} />
        </div>
      </div>
    </section>
  )
}

function Card({ title, value }){
  return (
    <div className="rounded-lg border p-6 bg-gradient-to-br from-gray-50 to-white">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  )
}
