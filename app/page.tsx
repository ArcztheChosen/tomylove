"use client";

import { useState, type FormEvent } from "react";

export default function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [privateUnlocked, setPrivateUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const SECRET_PASSWORD = "Vebe@1015";

  function unlockPrivateLetter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === SECRET_PASSWORD) {
      setPrivateUnlocked(true);
      setShowPassword(false);
      setPassword("");
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  function closePrivateLetter() {
    setPrivateUnlocked(false);
    setPassword("");
    setPasswordError(false);
  }

  return (
    <main className="birthday-page">
      <div className="floating-heart heart-one" aria-hidden="true">
        ♡
      </div>
      <div className="floating-heart heart-two" aria-hidden="true">
        ♥
      </div>
      <div className="floating-heart heart-three" aria-hidden="true">
        ♡
      </div>
      <div className="floating-heart heart-four" aria-hidden="true">
        ✦
      </div>

      <section className="birthday-container">
        <p className="eyebrow">A LITTLE SOMETHING FOR YOU</p>

        <h1>
          Happy Birthday,
          <br />
          <span>To my Justine♡</span>
        </h1>

        <p className="subtitle">I made something special just for you.</p>

        {/* ORIGINAL PUBLIC LETTER */}
        <div className={`envelope-scene ${isOpen ? "opened" : ""}`}>
          <div className="letter-paper">
            <div className="letter-content">
              <span className="letter-decoration">♡</span>
              <p className="letter-date">A SPECIAL DAY FOR YOU</p>
              <h2>Happy Birthday!</h2>

              <p>To my Love,</p>

              <p>
                Today is your special day, and I just want to remind you how
                precious you are to me. I hope this new chapter of your life
                brings you happiness, good health, success, and beautiful
                memories.
              </p>

              <p>
                Even though distance separates us, please remember that you are
                always in my heart. No matter how many kilometers stand between
                us, I will keep cheering for you, supporting your dreams, and
                choosing to care for you.
              </p>

              <p>
                Thank you for being you, for the smiles, the conversations, and
                the little moments that make my days brighter.
              </p>

              <p>
                You deserve a birthday as beautiful as your heart. Keep growing,
                keep dreaming, and never forget how special you are.
              </p>

              <p className="letter-closing">
                Happy Birthday, My Justine.
                <br />I am always rooting for you. ♡
              </p>

              <p className="signature">
                With all my love,
                <br />
                <span>Jhon Mark♡</span>
              </p>
            </div>
          </div>

          <div className="envelope">
            <div className="envelope-back" />
            <div className="envelope-left" />
            <div className="envelope-right" />
            <div className="envelope-bottom" />

            <div className="envelope-flap">
              <span>♡</span>
            </div>

            <div className="envelope-label">
              <span>To my</span>
              <strong>Moon</strong>
              <span className="label-heart">♥</span>
            </div>

            <div className="envelope-stamp">FOR YOU ♡</div>
          </div>
        </div>

        <button
          type="button"
          className="open-button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-expanded={isOpen}
        >
          {isOpen ? "Close your letter ♡" : "Open your letter ♡"}
        </button>

        <p className="hint">
          {isOpen
            ? "Take your time reading, my love."
            : "A little letter, filled with lots of love."}
        </p>

        {/* PRIVATE LETTER BUTTON */}
        <div className="private-section">
          <div className="private-divider">
            <span>♡</span>
          </div>

          <p className="private-intro">
            There is one more little secret, just for you.
          </p>

          <button
            type="button"
            className="private-button"
            onClick={() => {
              setShowPassword(true);
              setPasswordError(false);
            }}
          >
            <span aria-hidden="true">♡</span>
            Private Letter
            <span aria-hidden="true">🔒</span>
          </button>

          <p className="private-hint">Only you know the password.</p>
        </div>

        <div className="bottom-decoration">made with love, just for Vebe ♡</div>
      </section>

      {/* PASSWORD MODAL */}
      {showPassword && !privateUnlocked && (
        <div
          className="private-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowPassword(false);
              setPasswordError(false);
            }
          }}
        >
          <section
            className="private-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="private-modal-title"
          >
            <button
              type="button"
              className="private-close"
              onClick={() => {
                setShowPassword(false);
                setPasswordError(false);
              }}
              aria-label="Close password dialog"
            >
              ×
            </button>

            <div className="private-icon">♡</div>
            <p className="private-eyebrow">JUST BETWEEN US</p>
            <h2 id="private-modal-title">Our Little Secret</h2>

            <p className="private-description">
              This letter is just for you, Justine.
              <br />
              Enter our secret password to unlock it.
            </p>

            <form className="private-form" onSubmit={unlockPrivateLetter}>
              <label htmlFor="private-password">Our secret password</label>

              <input
                id="private-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError(false);
                }}
                placeholder="Enter password..."
                autoComplete="off"
                autoFocus
                required
              />

              {passwordError && (
                <p className="password-error" role="alert">
                  Not quite right. Try again, my moon. ♡
                </p>
              )}

              <button type="submit" className="unlock-button">
                Unlock my letter ♡
              </button>
            </form>

            <p className="private-modal-footer">
              A little secret made with love.
            </p>
          </section>
        </div>
      )}

      {/* PRIVATE LETTER CONTENT */}
      {privateUnlocked && (
        <div className="private-overlay">
          <article
            className="private-letter"
            role="dialog"
            aria-modal="true"
            aria-labelledby="private-letter-title"
          >
            <button
              type="button"
              className="private-close"
              onClick={closePrivateLetter}
              aria-label="Close private letter"
            >
              ×
            </button>

            <div className="private-icon">♡</div>
            <p className="private-eyebrow">A LETTER JUST FOR YOU</p>
            <h2 id="private-letter-title">To my Vebe,</h2>

            <p>Happy birthday, Vebe. ♡</p>

            <p>
              This is the little letter I wanted to keep just between us po. There
              are feelings that are sometimes difficult to explain, but I hope
              these words help you understand how special you are to me.
            </p>

            <p>
              If I could be beside you today, I would want to see your smile,
              spend time with you, and make your birthday feel a little more
              special. For now, I hope this letter brings you even a small piece
              of that happiness.
            </p>

            <p>
              Even with our 777 kilometers, I want to keep supporting your
              dreams, listening to your stories, learning to understand you, and
              creating more beautiful memories with you.
            </p>

            <p>
              And by the way, congratulations sa work mo, Vebe! ♡ I'm so
              proud of you and of everything you're working hard for. I know
              hindi laging madali ang work po. May mga araw na mapapagod,
              at maiistress ka po, at parang ang daming kailangang harapin at aralin. But I hope
              you know how capable you are and how much you deserve the good
              things coming your way.
            </p>

            <p>
              Kapag kaapoy ka, kapag marami kang iniisip, or kapag gusto mo lang
              maglabas ng sama ng loob, nandito lang po ako, okay? You don't always
              have to be strong Vebe, and you don't have to figure everything out on
              your own. You can tell me about your good days, your bad days,
              your frustrations, or even the little things that happened at
              work.
            </p>

            <p>
              I'm here to listen to you po, not to judge you. Kahit minsan wala
              akong perfect na advice na maibigay Vebe sorry po, I will still do my best to
              understand you and listen to whatever you want to share. You can
              always talk to me Vebe. I want to be someone you can feel
              comfortable with, especially on the days when everything feels
              overwhelming.
            </p>

            <p>
              I know that a relationship is not just about sweet words. It is
              also about patience, honesty, understanding, and choosing to care
              even when things are not always easy. I hope we keep growing
              together while becoming better versions of ourselves.
            </p>

            <p>
              Thank you for being part of my life, Vebe. You have a special
              place in my heart, and I hope you never forget how appreciated you
              are. I'm so happy to see you growing, chasing your dreams, and
              taking steps toward the future you want for yourself.
            </p>

            <p>
              And please remember Vebee, I'm waiting for you, always. ♡ Hindi
              man natin kayang paikliin agad yung 777 kilometers between us, I
              will keep looking forward to the day when we can finally spend
              more time together. Until then, I'll keep supporting you from
              here, cheering for your achievements, and being here through the
              little moments of your life.
            </p>

            <p className="private-highlight">
              No matter how many kilometers separate us, you will always have
              someone here who's willing to listen, understand you, support you,
              and remind you that you're not alone. Kapag Kaapoy ka na, rest
              ka lang Vebee. Kapag gusto mong magkuwento, makikinig po ako. Kapag
              masaya ka, I want to celebrate with you. And kapag hindi ka okay,
              nandito lang po ako. You don't have to go through everything alone.
              Mahal na mahal kita, Vebe. I love you so much. I'm here for you,
              always. ♡
            </p>

            <p>
              Happy birthday ulit Vebe. Congratulations sa work mo, Good Luck Vebee, and I
              hope you continue to grow, succeed, and become the person you've
              always dreamed of being. I'm proud of you, and I'll always be
              rooting for you. FIIIIGHTINGGG!
            </p>

            <p>
              I may not always be physically beside you, but please know that
              you have someone here who genuinely cares about you. I'll keep
              listening, supporting you, and waiting for the moments we have yet
              to share.
            </p>

            <p>
              Mahal na mahal kita, Vebe. I love you always. And whatever kind of day
              you're having, remember that I'm just here. Always. ♡
            </p>

            <p className="private-signature">
              Always rooting for you,
              <br />
              <span>Your Vebe ♡</span>
            </p>

            <div className="private-letter-footer">777 KM, ONE HEART ♡</div>

            <button
              type="button"
              className="unlock-button private-close-button"
              onClick={closePrivateLetter}
            >
              Close our little secret ♡
            </button>
          </article>
        </div>
      )}
    </main>
  );
}