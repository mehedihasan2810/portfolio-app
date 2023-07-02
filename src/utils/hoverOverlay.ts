export default function hoverOverlay(
  clientX: number,
  clientY: number,
  element: HTMLElement
) {
  const cursorElement = document.querySelector(
    ".cursor-element"
  ) as HTMLDivElement;
  const elementX = element.getBoundingClientRect().left;
  const elementY = element.getBoundingClientRect().top;
  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;

  if (
    clientX >= elementX - 50 &&
    clientX <= elementX + elementWidth + 50 &&
    clientY >= elementY - 50 &&
    clientY <= elementY + 50 + elementHeight
  ) {
    const circleX = clientX - elementX;
    const circleY = clientY - elementY;
    const circleXpercentage = Math.floor((circleX / elementWidth) * 100);
    const circleYpercentage = Math.floor((circleY / elementHeight) * 100);

    element.style.setProperty("--size", "0%");
    element.style.setProperty("--x", `${circleXpercentage}%`);
    element.style.setProperty("--y", ` ${circleYpercentage}%`);

    if (
      clientX >= elementX &&
      clientX <= elementX + elementWidth &&
      clientY >= elementY &&
      clientY <= elementY + elementHeight
    ) {
      cursorElement.style.width = "0";
      cursorElement.style.height = "0";
      element.style.setProperty("--size", "150%");
      element.style.setProperty("--x", `${circleXpercentage}%`);
      element.style.setProperty("--y", ` ${circleYpercentage}%`);
    } else {
      cursorElement.style.width = "20px";
      cursorElement.style.height = "20px";
    }
  }
}
