import React, { useEffect, useState } from 'react';

const eventResults = [
  {
    id: 1,
    eventName: 'Business Plan Challenge 2026',
    eventDate: 'March 28, 2026',
    status: 'Declared',
    winners: [
      { position: 'Winner', team: 'InnovateX', members: 'Rohan, Aditi, Manav' },
      { position: '1st Runner-Up', team: 'Pitch Perfect', members: 'Rhea, Varun' },
      { position: '2nd Runner-Up', team: 'Growth Grid', members: 'Nikhil, Sneha' },
    ],
  },
  {
    id: 2,
    eventName: 'Startup Idea Sprint',
    eventDate: 'April 2, 2026',
    status: 'Declared',
    winners: [
      { position: 'Winner', team: 'Blue Orbit', members: 'Ankit, Mehul' },
      { position: '1st Runner-Up', team: 'Campus Founders', members: 'Tanya, Arav' },
      { position: '2nd Runner-Up', team: 'Launch Lab', members: 'Ira, Sameer' },
    ],
  },
  {
    id: 3,
    eventName: 'Prototype Showdown',
    eventDate: 'April 10, 2026',
    status: 'Coming Soon',
    winners: [],
  },
];

export default function Result() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedEvent(null);
        setFlippedCards({});
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const openEventResult = (event) => {
    if (event.status !== 'Declared' || event.winners.length === 0) {
      return;
    }

    setSelectedEvent(event);
    setFlippedCards({});
  };

  const closePopup = () => {
    setSelectedEvent(null);
    setFlippedCards({});
  };

  const toggleCardFlip = (position) => {
    setFlippedCards((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };

  const getRankTheme = (position) => {
    if (position === 'Winner') {
      return {
        front: 'border-[#D4AF37]/60 bg-[#2b2512]',
        frontLabel: 'text-[#EACB63]',
        frontText: 'text-[#F3E4A7]',
        back: 'border-[#D4AF37]/70 bg-[#352d14]',
        backLabel: 'text-[#F0D779]',
        backText: 'text-[#F7E8B4]',
        backSubtext: 'text-[#EACB63]',
      };
    }

    if (position === '1st Runner-Up') {
      return {
        front: 'border-[#BFC5CC]/60 bg-[#23272e]',
        frontLabel: 'text-[#D8DDE3]',
        frontText: 'text-[#E5E8EC]',
        back: 'border-[#C8CDD3]/70 bg-[#2b2f36]',
        backLabel: 'text-[#E4E8ED]',
        backText: 'text-[#EEF0F3]',
        backSubtext: 'text-[#D8DDE3]',
      };
    }

    return {
      front: 'border-[#B87333]/60 bg-[#2c2117]',
      frontLabel: 'text-[#D39A67]',
      frontText: 'text-[#E6BA94]',
      back: 'border-[#B87333]/70 bg-[#35261a]',
      backLabel: 'text-[#E0AD80]',
      backText: 'text-[#F0C7A6]',
      backSubtext: 'text-[#D39A67]',
    };
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-[#041527] to-[#0a1e35] px-4 pb-16 pt-28 text-white sm:pt-32 md:px-8 md:pt-36 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Event Results
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-blue-100 sm:text-base">
            Official result declarations for E-Cell events. Update the winner data in this file whenever a new event result is announced.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {eventResults.map((event) => (
            <article
              key={event.id}
              className="rounded-2xl border border-slate-600/40 bg-[#0d1a2b] p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-white">{event.eventName}</h2>
                  <p className="mt-1 text-sm text-blue-200">{event.eventDate}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    event.status === 'Declared'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-amber-500/20 text-amber-200'
                  }`}
                >
                  {event.status}
                </span>
              </div>

              {event.winners.length > 0 && event.status === 'Declared' ? (
                <button
                  type="button"
                  onClick={() => openEventResult(event)}
                  className="w-full rounded-xl border border-slate-500/40 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700/80"
                >
                  View Result Cards
                </button>
              ) : (
                <div className="rounded-xl border border-amber-200/20 bg-amber-500/10 p-4 text-sm text-amber-100">
                  Results will be declared soon. Please check back after the event concludes.
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-3 pb-6 pt-24 backdrop-blur-sm sm:px-4 sm:pt-28 md:pt-32">
          <div className="max-h-[calc(100vh-7rem)] w-full max-w-5xl overflow-y-auto rounded-2xl border border-slate-600/50 bg-[#0b1727] p-4 sm:max-h-[calc(100vh-8rem)] sm:p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-white sm:text-2xl md:text-3xl">{selectedEvent.eventName}</h2>
                <p className="mt-1 text-sm text-blue-200">Tap each card to flip and reveal the result.</p>
              </div>
              <button
                type="button"
                onClick={closePopup}
                className="w-full rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                Close
              </button>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {selectedEvent.winners.map((winner) => {
                const isFlipped = !!flippedCards[winner.position];
                const rankTheme = getRankTheme(winner.position);

                return (
                  <button
                    type="button"
                    key={`${selectedEvent.id}-${winner.position}`}
                    onClick={() => toggleCardFlip(winner.position)}
                    className="group h-56 w-full rounded-xl text-left sm:h-60 md:h-64"
                    style={{ perspective: '1200px' }}
                  >
                    <div
                      className="relative h-full w-full rounded-xl transition-transform duration-700"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      <div
                        className={`absolute inset-0 flex h-full flex-col justify-between rounded-xl border p-5 ${rankTheme.front}`}
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${rankTheme.frontLabel}`}>Result Card</p>
                        <div>
                          <p className="text-lg font-black text-white">{winner.position}</p>
                          <p className={`mt-2 text-sm ${rankTheme.frontText}`}>Click to flip and reveal the team.</p>
                        </div>
                        <p className={`text-xs ${rankTheme.frontLabel}`}>E-Cell HMRITM</p>
                      </div>

                      <div
                        className={`absolute inset-0 flex h-full flex-col justify-between rounded-xl border p-5 ${rankTheme.back}`}
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${rankTheme.backLabel}`}>Congratulations</p>
                        <div>
                          <p className="text-lg font-black text-white">{winner.team}</p>
                          <p className={`mt-2 text-sm font-medium ${rankTheme.backText}`}>{winner.members}</p>
                        </div>
                        <p className={`text-xs ${rankTheme.backSubtext}`}>Congratulations for {winner.position}!</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}