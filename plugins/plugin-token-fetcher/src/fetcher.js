import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  console.log("Mama mia !", this);

  // window.addEventListener("DOMContentLoaded", (event) => {
  //   const mw = document.querySelector('.main-wrapper')
  //   mw.innerHTML = mw.innerHTML.replace(/YOUR_TREFLE_TOKEN/g, 'xxx-yyy-zzz')
  // })

  return {
    // onRouteUpdate({ location, ...other }) {
    //   console.log("[ftcher] onRouteUpdate !", { location, other });
    //   const mw = document.querySelector('.main-wrapper')
    //   mw.innerHTML = mw.innerHTML.replace(/YOUR_TREFLE_TOKEN/g, 'xxx-yyy-zzz')

    // },
  };
})();
