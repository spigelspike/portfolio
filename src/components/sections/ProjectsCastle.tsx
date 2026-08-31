"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon, PlayIcon, SwordIcon } from "@/components/ui/PixelIcons";
import { PROJECTS, SECTIONS } from "@/lib/constants";
import type { Project } from "@/types";
import styles from "./ProjectsCastle.module.css";

type WorkItem = Project & { comingSoon?: boolean };

const workItems: WorkItem[] = [...PROJECTS];

const imagePosition: Record<string, string> = {
  "kallanum-policeum": "right center",
  medarchive: "center top",
  book2vision: "center top",
  omnivoice: "center",
  "aclinsight-net": "center",
  hopon: "center",
  cpms: "center top",
  labsync: "center",
  pypath: "center top",
  "kerala-waste": "center top",
};


function PixelFrameCorners() {
  return (
    <span aria-hidden="true" className={styles.frameCorners}>
      <i className={`${styles.frameCorner} ${styles.topLeft}`} />
      <i className={`${styles.frameCorner} ${styles.topRight}`} />
      <i className={`${styles.frameCorner} ${styles.bottomLeft}`} />
      <i className={`${styles.frameCorner} ${styles.bottomRight}`} />
    </span>
  );
}

function HeaderEmblem() {
  return (
    <span aria-hidden="true" className={styles.headerEmblem}>
      <SwordIcon className={`${styles.emblemSword} ${styles.emblemSwordLeft}`} />
      <SwordIcon className={`${styles.emblemSword} ${styles.emblemSwordRight}`} />
    </span>
  );
}

function PixelArrow({ direction }: { direction: "left" | "right" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return <Icon aria-hidden="true" strokeWidth={2.6} size={31} />;
}

export default function ProjectsCastle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentProject = workItems[activeIndex];

  const selectProject = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const moveProject = useCallback((step: number) => {
    setDirection(step);
    setActiveIndex((index) => (index + step + workItems.length) % workItems.length);
  }, []);

  return (
    <section id={SECTIONS.projects} className={styles.section} aria-labelledby="selected-work-heading">
      <div className={styles.showcase}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <span className={styles.pixelFlourish} aria-hidden="true" />
            <HeaderEmblem />
            <h2 id="selected-work-heading" className={styles.heading}>Selected Work</h2>
            <span className={`${styles.pixelFlourish} ${styles.pixelFlourishMirror}`} aria-hidden="true" />
          </div>
          <p className={styles.subtitle}>
            A collection of things I&apos;ve built with code and coffee. <span aria-hidden="true">☕</span>
          </p>
          <div className={styles.counter} aria-live="polite">
            <span aria-hidden="true">✦</span>
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span className={styles.counterSlash}>/</span>
            <span>{String(workItems.length).padStart(2, "0")}</span>
            <span aria-hidden="true">✦</span>
          </div>
        </header>

        <div className={styles.heroArea}>
          <button type="button" className={`${styles.heroArrow} ${styles.heroArrowPrevious}`} onClick={() => moveProject(-1)} aria-label="Show previous project">
            <PixelArrow direction="left" />
          </button>

          <article className={styles.heroCard}>
            <PixelFrameCorners />
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={styles.heroSlide}
              >
                <div className={styles.mediaPanel}>
                  {currentProject.thumbnail ? (
                    <Image
                      src={currentProject.thumbnail}
                      alt=""
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 760px) 100vw, 62vw"
                      className={styles.mediaImage}
                      style={{ objectPosition: imagePosition[currentProject.id] ?? "center" }}
                    />
                  ) : (
                    <div className={styles.comingSoonVisual} aria-hidden="true">?</div>
                  )}
                  <div className={styles.mediaShade} />
                  <div className={styles.mediaVignette} />
                </div>

                <div className={styles.projectInfo}>
                  {currentProject.comingSoon ? (
                    <>
                      <p className={styles.eyebrow}>In development</p>
                      <h3 className={styles.projectTitle}>More work is on the way</h3>
                      <p className={styles.description}>{currentProject.description}</p>
                    </>
                  ) : (
                    <>
                      <p className={styles.eyebrow}><span aria-hidden="true">♛</span> Featured project</p>
                      <h3 className={styles.projectTitle}>{currentProject.title}</h3>
                      <span className={styles.titleUnderline} aria-hidden="true" />
                      <p className={styles.description}>{currentProject.description}</p>
                      <ul className={styles.techList} aria-label={`${currentProject.title} technologies`}>
                        {currentProject.techStack.map((technology) => (
                          <li key={technology} className={technology === "Supabase" ? styles.techAccent : undefined}>{technology}</li>
                        ))}
                      </ul>
                      <div className={styles.actions}>
                        {currentProject.liveUrl && (
                          <a className={`${styles.action} ${styles.primaryAction}`} href={currentProject.liveUrl} target="_blank" rel="noreferrer">
                            <PlayIcon className={styles.actionIcon} />
                            Play game
                          </a>
                        )}
                        <a className={`${styles.action} ${styles.secondaryAction}`} href={currentProject.githubUrl} target="_blank" rel="noreferrer">
                          <GithubIcon className={styles.actionIcon} />
                          View code
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </article>

          <button type="button" className={`${styles.heroArrow} ${styles.heroArrowNext}`} onClick={() => moveProject(1)} aria-label="Show next project">
            <PixelArrow direction="right" />
          </button>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineTrack} aria-hidden="true">
            <span style={{ width: `${(activeIndex / (workItems.length - 1)) * 100}%` }} />
          </div>
          <div className={styles.timelineSteps} style={{ gridTemplateColumns: `repeat(${workItems.length}, minmax(0, 1fr))` }}>
            {workItems.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => selectProject(index)}
                className={`${styles.timelineStep} ${index === activeIndex ? styles.timelineStepActive : ""}`}
                aria-label={`Show ${project.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.rail}>
          <button type="button" className={styles.railArrow} onClick={() => moveProject(-1)} aria-label="Show previous project"><PixelArrow direction="left" /></button>
          <div className={styles.thumbnailList} style={{ gridTemplateColumns: `repeat(${workItems.length}, minmax(0, 1fr))` }}>
            {workItems.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => selectProject(index)}
                  className={`${styles.thumbnailButton} ${isActive ? styles.thumbnailButtonActive : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Show ${project.title}`}
                >
                  <span className={`${styles.thumbnail} ${project.comingSoon ? styles.thumbnailPlaceholder : ""}`}>
                    {project.thumbnail ? (
                      <Image src={project.thumbnail} alt="" fill sizes="(max-width: 760px) 128px, 11vw" className={styles.thumbnailImage} />
                    ) : (
                      <b aria-hidden="true">?</b>
                    )}
                    {isActive && <PixelFrameCorners />}
                  </span>
                  <span className={styles.thumbnailTitle}>{project.title}</span>
                </button>
              );
            })}
          </div>
          <button type="button" className={styles.railArrow} onClick={() => moveProject(1)} aria-label="Show next project"><PixelArrow direction="right" /></button>
        </div>
      </div>
    </section>
  );
}
