"use client";

import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { PERSONAL, SECTIONS } from "@/lib/constants";
import styles from "./ContactVillage.module.css";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 .01 3.3 1.65 1.65 0 0 0 0-3.3Z" />
  </svg>
);

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <span className={styles.contactIcon}>{icon}</span>
      <span className={styles.contactCopy}>
        <span>{label}</span>
        <strong>{value}</strong>
      </span>
      {href && <ChevronRight className={styles.contactChevron} size={17} aria-hidden="true" />}
    </>
  );

  return href ? (
    <a className={styles.contactItem} href={href}>{content}</a>
  ) : (
    <div className={styles.contactItem}>{content}</div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a className={styles.socialLink} href={href} target="_blank" rel="noreferrer">
      <span>{icon}</span>
      {label}
      <ChevronRight size={16} aria-hidden="true" />
    </a>
  );
}

export default function ContactVillage() {
  return (
    <section id={SECTIONS.contact} className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.heading}>
        <span className={styles.kicker}>Contact terminal // online</span>
        <h2 id="contact-heading">Let&apos;s build something memorable.</h2>
        <p>Have a project, a collaboration, or an interesting problem? I&apos;d love to hear from you.</p>
      </div>

      <div className={styles.contactShell}>
        <div className={styles.artPanel}>
          <div className={styles.artFrame}>
            <video autoPlay loop muted playsInline preload="metadata" className={styles.contactVideo}>
              <source src="/assets/contact_me.mp4" type="video/mp4" />
            </video>
          </div>
          <span className={styles.artCaption}>Your next quest starts here</span>
        </div>

        <div className={styles.terminalPanel}>
          <div className={styles.terminalHeader}>
            <div>
              <span className={styles.statusDot} aria-hidden="true" />
              Available for new opportunities
            </div>
            <span>01—CONTACT</span>
          </div>

          <div className={styles.terminalIntro}>
            <p className={styles.kicker}>Open channel</p>
            <h3>Send a signal.</h3>
            <p>I&apos;m always open to discussing new ideas, product work, and thoughtful collaborations.</p>
          </div>

          <div className={styles.contactList}>
            <ContactItem icon={<Mail size={21} />} label="Email" value={PERSONAL.email} href={`mailto:${PERSONAL.email}`} />
            <ContactItem icon={<Phone size={21} />} label="Phone" value={PERSONAL.phone} href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`} />
            <ContactItem icon={<MapPin size={21} />} label="Based in" value={PERSONAL.location} />
          </div>

          <div className={styles.socialLinks}>
            <SocialLink href={PERSONAL.linkedin} icon={<LinkedinIcon className={styles.socialIcon} />} label="LinkedIn" />
            <SocialLink href={PERSONAL.github} icon={<GithubIcon className={styles.socialIcon} />} label="GitHub" />
            <SocialLink href={PERSONAL.instagram} icon={<InstagramIcon className={styles.socialIcon} />} label="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
}
