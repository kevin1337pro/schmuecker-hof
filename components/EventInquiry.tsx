"use client";

import { FormEvent, useState } from "react";

export function EventInquiry() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-grid"><label>Name<input name="name" required /></label><label>E-Mail<input name="email" type="email" required /></label><label>Telefon<input name="phone" type="tel" /></label><label>Art der Feier<select name="eventType" defaultValue=""><option value="" disabled>Bitte wählen</option><option>Hochzeit</option><option>Private Feier</option><option>Firmenfeier</option><option>Sonstiges</option></select></label><label>Wunschtermin<input name="date" type="date" /></label><label>Gästezahl<input name="guests" type="number" min="1" /></label></div>
      <label>Ihre Nachricht<textarea name="message" rows={5} placeholder="Erzählen Sie uns kurz von Ihrem Anlass." /></label>
      <label className="check"><input type="checkbox" required /> <span>Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.</span></label>
      <button className="button" type="submit">Anfrage senden <span>↗</span></button>
      {sent ? <p className="form-success" role="status">Vielen Dank. Dies ist ein Pitch-Prototyp – der E-Mail-Versand wird mit der finalen Formularanbindung ergänzt.</p> : null}
    </form>
  );
}
