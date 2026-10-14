import React, { useState } from 'react';
import { X, Send, Heart, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { LotusDivider } from './LotusDivider';

export const RsvpModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('yes'); // 'yes' or 'no'
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [customPhone, setCustomPhone] = useState(weddingConfig.rsvp.whatsappNumber || '');

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5a2b', '#626645', '#e8b86d', '#d47b7b', '#f5e3c8']
    });
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    triggerConfetti();
    setSubmitted(true);

    // Prepare WhatsApp Message
    const statusText = attendance === 'yes' ? 'joyfully accepting' : 'regretfully unable to attend';
    const guestDetail = attendance === 'yes' ? `\nNumber of Guests: ${guestCount}` : '';
    const wishDetail = message.trim() ? `\nPersonal Message: "${message.trim()}"` : '';

    const waText = `*Wedding RSVP for ${weddingConfig.couple.namesFormatted}*\n` +
      `--------------------------------\n` +
      `Guest Name: ${name.trim()}\n` +
      `Status: ${statusText}${guestDetail}${wishDetail}\n` +
      `Date: ${weddingConfig.event.dateFormatted}\n` +
      `Venue: ${weddingConfig.venue.nameDisplay}`;

    const targetPhone = (customPhone || weddingConfig.rsvp.whatsappNumber).replace(/[^0-9]/g, '');

    if (targetPhone) {
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="rsvp-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="rsvp-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="rsvp-close-btn" onClick={onClose} aria-label="Close RSVP form">
          <X size={20} />
        </button>

        <div className="rsvp-modal-header">
          <span className="rsvp-modal-emblem">🪷</span>
          <h3 className="rsvp-modal-title">RSVP</h3>
          <p className="rsvp-modal-sub">
            {weddingConfig.couple.namesFormatted}'s Wedding Celebration
          </p>
          <LotusDivider color="#946234" width={130} />
        </div>

        {submitted ? (
          <div className="rsvp-success-state">
            <CheckCircle2 size={48} className="success-icon" />
            <h4 className="success-title">Thank You, {name}!</h4>
            <p className="success-desc">
              Your response has been noted with joy. We look forward to celebrating together!
            </p>
            <button className="olive-pill-btn mt-4" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="guest-name" className="form-label">
                Your Full Name *
              </label>
              <input
                id="guest-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Ananth & Family"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Will you be attending?</label>
              <div className="attendance-radio-group">
                <label className={`radio-pill ${attendance === 'yes' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === 'yes'}
                    onChange={() => setAttendance('yes')}
                  />
                  <span>Joyfully Accept</span>
                </label>

                <label className={`radio-pill ${attendance === 'no' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === 'no'}
                    onChange={() => setAttendance('no')}
                  />
                  <span>Regretfully Decline</span>
                </label>
              </div>
            </div>

            {attendance === 'yes' && (
              <div className="form-group">
                <label htmlFor="guest-count" className="form-label">
                  Total Guests Attending
                </label>
                <select
                  id="guest-count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People (Family)</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="guest-message" className="form-label">
                Personal Wishes &amp; Blessings
              </label>
              <textarea
                id="guest-message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your warm wishes with the couple..."
                className="form-input form-textarea"
              ></textarea>
            </div>

            {/* Configurable WhatsApp number prompt if not hardcoded */}
            {!weddingConfig.rsvp.whatsappNumber && (
              <div className="form-group whatsapp-opt-group">
                <label htmlFor="whatsapp-number" className="form-label text-muted">
                  Send WhatsApp RSVP to Host (Optional Phone):
                </label>
                <input
                  id="whatsapp-number"
                  type="tel"
                  value={customPhone}
                  onChange={(e) => setCustomPhone(e.target.value)}
                  placeholder="e.g. 919876543210 (country code + number)"
                  className="form-input phone-input"
                />
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="rsvp-submit-btn">
                <span>Confirm RSVP</span>
                <Send size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
