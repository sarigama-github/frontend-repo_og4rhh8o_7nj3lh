import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function LeadForm(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', message:'', service:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`${API}/leads`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(form) })
      setSent(true)
      setForm({ name:'', email:'', phone:'', company:'', message:'', service:'' })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Tarjouspyyntö</h2>
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3 bg-white p-4 border rounded-lg">
          <input required placeholder="Nimi" className="px-3 py-2 border rounded" value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} />
          <input required type="email" placeholder="Sähköposti" className="px-3 py-2 border rounded" value={form.email} onChange={e=>setForm({ ...form, email:e.target.value })} />
          <input placeholder="Puhelin" className="px-3 py-2 border rounded" value={form.phone} onChange={e=>setForm({ ...form, phone:e.target.value })} />
          <input placeholder="Yritys" className="px-3 py-2 border rounded" value={form.company} onChange={e=>setForm({ ...form, company:e.target.value })} />
          <input placeholder="Palvelu/avainsana" className="px-3 py-2 border rounded sm:col-span-2" value={form.service} onChange={e=>setForm({ ...form, service:e.target.value })} />
          <textarea placeholder="Viesti" className="px-3 py-2 border rounded sm:col-span-2" rows={4} value={form.message} onChange={e=>setForm({ ...form, message:e.target.value })} />
          <button disabled={loading} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-2 sm:col-span-2">
            {loading? 'Lähetetään...' : 'Lähetä pyyntö'}
          </button>
          {sent && <p className="sm:col-span-2 text-emerald-700">Kiitos! Otamme pian yhteyttä.</p>}
        </form>
      </div>
    </section>
  )
}
