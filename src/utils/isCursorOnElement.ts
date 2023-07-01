export default function isCursorOnElement(
  clientX: number,
  clientY: number,
  element: HTMLElement
): boolean {
  const elementX = element.getBoundingClientRect().left;
  const elementY = element.getBoundingClientRect().top;
  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;


  if (
    clientX >= elementX &&
    clientX <= elementX + elementWidth &&
    clientY >= elementY &&
    clientY <= elementY + elementHeight
  ) {
    return true;
  }else{
    return false;
  }


}
