import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import s from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    prenom:'', nom:'', email:'', tel:'',
    date:'', lieu:'', nb_invites:'', enfants:'',
    budget:'', besoin:'', message:''
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useReveal()

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1200)
  }

  return (
    <main>
      {/* HERO */}
      <section className={s.hero}>
        {/* Botanical déco */}
        <div className={s.heroBotanical} aria-hidden>
          <svg viewBox="0 0 280 500" fill="none">
            <path d="M140 490 Q135 380 110 270 Q85 160 50 30" stroke="#C49A3C" strokeWidth="0.8" opacity="0.4"/>
            <ellipse cx="90" cy="200" rx="32" ry="13" fill="#7A8B63" opacity="0.25" transform="rotate(-35 90 200)"/>
            <ellipse cx="70" cy="270" rx="26" ry="11" fill="#7A8B63" opacity="0.2" transform="rotate(-50 70 270)"/>
            <ellipse cx="115" cy="145" rx="24" ry="10" fill="#7A8B63" opacity="0.18" transform="rotate(-20 115 145)"/>
            <ellipse cx="55" cy="320" rx="28" ry="11" fill="#7A8B63" opacity="0.18" transform="rotate(-62 55 320)"/>
            <ellipse cx="100" cy="230" rx="20" ry="8" fill="#7A8B63" opacity="0.15" transform="rotate(-30 100 230)"/>
            <ellipse cx="130" cy="100" rx="22" ry="9" fill="#7A8B63" opacity="0.14" transform="rotate(-12 130 100)"/>
          </svg>
        </div>

        <div className={s.heroContent}>
          <span className="label" style={{ color:'rgba(196,154,60,0.7)' }}>Parlons de vous</span>
          <h1 className={s.heroTitle}>
            Parlons de<br/><em>votre mariage.</em>
          </h1>
          <p className={s.heroSub}>
            Chaque mariage est unique. Prenons le temps d'échanger pour imaginer ensemble
            une journée fluide, élégante et fidèle à vos envies.
          </p>
        </div>

        <div className={s.heroWave}>
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" fill="#FAF7F2"/>
          </svg>
        </div>
      </section>

      {/* MAIN */}
      <section className={s.main}>
        <div className={s.mainInner}>

          {/* Panneau info */}
          <div className={`${s.infoPanel} reveal`}>
            <div className={s.infoPanelInner}>
              <div className={s.infoLogo}>
                <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
                  <path d="M52 10 A28 28 0 1 1 10 52" stroke="#C49A3C" strokeWidth="1.3" fill="none" opacity="0.75"/>
                  <text x="23" y="40" fontFamily="Cormorant Garamond,serif" fontSize="23" fontWeight="600" fill="#C49A3C">M</text>
                  <text x="26" y="59" fontFamily="Cormorant Garamond,serif" fontSize="20" fontWeight="400" fill="#C49A3C">C</text>
                </svg>
                <div>
                  <p className={s.infoLogoName}>MAISON<br/>CAMELYS</p>
                </div>
              </div>

              <h2 className={s.infoTitle}>Comment ça se passe&nbsp;?</h2>

              <div className={s.infoSteps}>
                {[
                  ['01', 'Vous nous partagez votre projet'],
                  ['02', 'Nous échangeons ensemble, simplement'],
                  ['03', 'Nous vous proposons une formule adaptée'],
                ].map(([n, t]) => (
                  <div key={n} className={s.infoStep}>
                    <span className={s.infoStepNum}>{n}</span>
                    <span className={s.infoStepText}>{t}</span>
                  </div>
                ))}
              </div>

              <div className={s.infoDivider}/>

              <div className={s.infoContact}>
                <p className={s.infoContactLabel}>Ou préférez-vous échanger directement&nbsp;?</p>
                <a href="tel:0600000000" className={s.infoContactLine}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-.52a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  06 00 00 00 00
                </a>
                <a href="mailto:contact@maisoncamelys.fr" className={s.infoContactLine}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contact@maisoncamelys.fr
                </a>
                <p className={s.infoNote}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Vos informations restent confidentielles.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className={`${s.formPanel} reveal`} style={{ transitionDelay:'150ms' }}>
            {sent ? (
              <div className={s.success}>
                <div className={s.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="17" stroke="#C49A3C" strokeWidth="1.2"/>
                    <path d="M11 18l5 5 9-9" stroke="#C49A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={s.successTitle}>Message envoyé.</h3>
                <p className={s.successText}>Merci&nbsp;! Nous reviendrons vers vous sous 48h.</p>
              </div>
            ) : (
              <form onSubmit={submit} className={s.form}>
                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label}>Prénom</label>
                    <input className={s.input} name="prenom" value={form.prenom} onChange={handle} placeholder="Votre prénom" required/>
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Nom</label>
                    <input className={s.input} name="nom" value={form.nom} onChange={handle} placeholder="Votre nom" required/>
                  </div>
                </div>

                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label}>Email</label>
                    <input className={s.input} type="email" name="email" value={form.email} onChange={handle} placeholder="votre@email.fr" required/>
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Téléphone (optionnel)</label>
                    <input className={s.input} name="tel" value={form.tel} onChange={handle} placeholder="06 xx xx xx xx"/>
                  </div>
                </div>

                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label}>Date du mariage</label>
                    <input className={s.input} name="date" value={form.date} onChange={handle} placeholder="JJ/MM/AAAA"/>
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Lieu du mariage</label>
                    <input className={s.input} name="lieu" value={form.lieu} onChange={handle} placeholder="Ville ou domaine"/>
                  </div>
                </div>

                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label}>Nombre d'invités</label>
                    <input className={s.input} name="nb_invites" value={form.nb_invites} onChange={handle} placeholder="Ex : 80"/>
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Présence d'enfants ?</label>
                    <select className={s.input} name="enfants" value={form.enfants} onChange={handle}>
                      <option value="">Choisir...</option>
                      <option>Oui</option>
                      <option>Non</option>
                      <option>Je ne sais pas encore</option>
                    </select>
                  </div>
                </div>

                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label}>Budget approximatif</label>
                    <select className={s.input} name="budget" value={form.budget} onChange={handle}>
                      <option value="">Sélectionner...</option>
                      <option>Moins de 1 500 €</option>
                      <option>1 500 – 2 000 €</option>
                      <option>2 000 – 3 000 €</option>
                      <option>Plus de 3 000 €</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Votre besoin principal</label>
                    <select className={s.input} name="besoin" value={form.besoin} onChange={handle}>
                      <option value="">Sélectionner...</option>
                      <option>Orchestration journée</option>
                      <option>Prise en charge enfants</option>
                      <option>Photo & vidéo</option>
                      <option>Formule complète</option>
                      <option>Je ne sais pas encore</option>
                    </select>
                  </div>
                </div>

                <div className={s.field}>
                  <label className={s.label}>Parlez-nous de votre mariage</label>
                  <textarea
                    className={`${s.input} ${s.textarea}`}
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Votre vision, vos attentes, vos questions..."
                  />
                </div>

                <button
                  type="submit"
                  className={`${s.submit} ${sending ? s.submitSending : ''}`}
                  disabled={sending}
                >
                  {sending ? 'Envoi en cours...' : 'Envoyer votre message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}
