import { gsap } from "gsap";

/** Reusable function to animate elements
 *
 * @param {documentElement} elem Element that gets animated
 * @param {Integer} direction Polarity direction R,U = 1 | L,D = -1
 * @param {Integer} xShift
 * @param {Integer} yShift
 * @param {Integer} duration
 */
export function animateFrom(elem, direction, xShift, yShift, duration) {
  gsap.to(elem, {
    duration: duration,
    x: xShift * direction,
    y: yShift * direction,
    autoAlpha: 0,
    overwrite: "auto",
  });
}

export function animateInOut(elem) {
  const gsapTL = gsap.timeline({ repeat: -1 });

  gsapTL.to({ x: 10 });
}
export function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}
