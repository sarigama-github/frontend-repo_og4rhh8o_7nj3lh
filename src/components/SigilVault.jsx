import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function SigilVault() {
  const [sigils, setSigils] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', intention: '', image_url: '', status: 'active' })

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/sigils`)
      const data = await res.json()
      setSigils(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    await fetch(`${API}/sigils`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    setForm({ name: '', intention: '', image_url: '', status: 'active' })
    load()
  }

  return (
    <section id="grim" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Sigilli-holvi (Tavoitepankki)</h2>
        <form onSubmit={submit} className="grid md:grid-cols-4 gap-3 bg-gray-50 p-4 rounded-lg border">
          <input className="px-3 py-2 border rounded" placeholder="Nimi" value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} />
          <input className="px-3 py-2 border rounded" placeholder="Aikomuslause" value={form.intention} onChange={e=>setForm({ ...form, intention:e.target.value })} />
          <input className="px-3 py-2 border rounded" placeholder="Kuvan URL (valinnainen)" value={form.image_url} onChange={e=>setForm({ ...form, image_url:e.target.value })} />
          <button className="bg-indigo-600 text-white rounded px-4">Tallenna</button>
        </form>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {loading ? (<p>Ladataan...</p>) : sigils.map(s => (
            <div key={s._id} className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                {s.image_url && <img src={s.image_url} alt={s.name} className="w-12 h-12 rounded object-cover" />}
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-gray-600">{s.intention}</p>
                </div>
              </div>
              <p className="mt-2 text-xs uppercase tracking-wide text-gray-500">Tila: {s.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
