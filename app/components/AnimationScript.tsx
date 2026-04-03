'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Lenis: any;
  }
}

export default function AnimationScript() {
  useEffect(() => {
    const initAnimations = () => {
      if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger || !window.Lenis) {
        setTimeout(initAnimations, 100);
        return;
      }

      const { gsap, ScrollTrigger, Lenis } = window;

      // 1. Lenis Smooth Scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
      });

      lenis.stop();

      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);

      gsap.set("body", { opacity: 1 });
      if (document.body) {
        document.body.style.overflow = "hidden";
      }

      // 2. Preloader Animation
      const loaderCounter = document.getElementById("loader-counter");
      const loaderProgress = document.getElementById("loader-progress");
      
      const tlLoader = gsap.timeline({
        onComplete: () => {
          if (document.body) {
            document.body.style.overflow = "";
          }
          lenis.start();
          ScrollTrigger.refresh(); 
        }
      });

      tlLoader
        .to(loaderCounter, { y: 0, duration: 1, ease: "power4.out" })
        .to(loaderProgress, { width: "100%", duration: 1.5, ease: "power2.inOut" }, "-=0.5")
        .to({ val: 0 }, { 
          val: 100, 
          duration: 1.5, 
          ease: "power2.inOut",
          onUpdate: function() {
            if (loaderCounter) {
              loaderCounter.textContent = Math.round((this.targets()[0] as any).val).toString();
            }
          }
        }, "-=1.5")
        .to("#loader", { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.2 })
        .from("#hero-img", { scale: 1.1, duration: 1.5, ease: "power3.out" }, "-=0.8")
        .to("#hero-title-l", { y: 0, duration: 1, ease: "power4.out" }, "-=1")
        .to("#hero-title-r", { y: 0, duration: 1, ease: "power4.out" }, "-=0.8");

      // 3. Intro Text Scrub Animation
      const introWords = document.querySelectorAll("#intro-scrub span");
      if(introWords.length > 0) {
        gsap.to(introWords, {
          scrollTrigger: {
            trigger: "#intro-scrub",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
          color: "#FFFFFF",
          opacity: 1,
          stagger: 0.1
        });
      }

      // 4. Horizontal Scroll (Process Section)
      const horizWrap = document.getElementById("horiz-wrap");
      if(horizWrap) {
        const getScrollAmount = () => horizWrap.scrollWidth - window.innerWidth;
        const tween = gsap.to(horizWrap, {
          x: () => -getScrollAmount(),
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: "#process",
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true,
        });
      }

      // 5. Footer Reveal Elements Animation
      gsap.from(".footer-el", {
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1
        },
        y: 30,
        opacity: 0,
        stagger: 0.1
      });
    };

    initAnimations();
  }, []);

  return null;
}
