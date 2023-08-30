// function throttle(func: any, ms: number) {

//     let isThrottled = false,
//       savedArgs: any,
//       savedThis: any;
  
//     function wrapper() {
  
//       if (isThrottled) { 
//         savedArgs = arguments;
//         savedThis = this;
//         return;
//       }
//       isThrottled = true;
  
//       func.apply(this, arguments); 
  
//       setTimeout(function() {
//         isThrottled = false; 
//         if (savedArgs) {
//           wrapper.apply(savedThis, savedArgs);
//           savedArgs = savedThis = null;
//         }
//       }, ms);
//     }
  
//     return wrapper;
//   }

//   export default throttle;