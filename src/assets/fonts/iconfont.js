;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M528.681054 330.220303C528.681054 320.664329 520.887116 312.917688 511.122137 312.917688L511.122137 312.917688C501.424687 312.917688 493.56322 320.92254 493.56322 330.220303L493.56322 536.204809C493.56322 545.760783 501.356882 553.507452 511.122137 553.507452L511.122137 553.507452C520.819588 553.507452 528.681054 545.5026 528.681054 536.204809L528.681054 330.220303ZM472.590546 24.123402 184.625248 600.053942C166.855722 635.592746 202.33721 675.652461 239.995367 661.168582L508.660413 557.565797C509.746948 557.223369 513.422514 557.223369 517.398635 558.217413L521.657321 541.182834 515.339864 557.565797 783.990242 661.163047C821.66279 675.652461 857.144278 635.592746 839.374752 600.053942L551.409731 24.123402C533.825076-8.13825 487.241612-8.13825 472.310471 24.710065L472.590546 24.123402ZM504.280508 39.241877C506.908285 33.460685 516.5133 33.460685 520.289604 40.384067L807.964587 615.759052C811.519212 622.868357 804.082286 631.265065 796.611319 628.391614L527.975055 524.799871 525.916008 524.148227C515.845216 521.630543 505.473594 521.630543 496.790169 524.525027L227.374566 628.397149C219.917991 631.265065 212.480788 622.868357 216.035413 615.759052L504.00071 39.828512 504.280508 39.241877ZM512 885.623134C527.284555 885.623134 539.675373 873.232454 539.675373 857.947761 539.675373 842.663068 527.284555 830.272388 512 830.272388 496.715445 830.272388 484.324627 842.663068 484.324627 857.947761 484.324627 873.232454 496.715445 885.623134 512 885.623134ZM512 1023.999997C527.284555 1023.999997 539.675373 1011.609318 539.675373 996.324625 539.675373 981.039931 527.284555 968.649252 512 968.649252 496.715445 968.649252 484.324627 981.039931 484.324627 996.324625 484.324627 1011.609318 496.715445 1023.999997 512 1023.999997ZM512 747.24627C527.284555 747.24627 539.675373 734.85559 539.675373 719.570897 539.675373 704.286204 527.284555 691.895525 512 691.895525 496.715445 691.895525 484.324627 704.286204 484.324627 719.570897 484.324627 734.85559 496.715445 747.24627 512 747.24627Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuaxin1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M598.058159 948.379334c202.098531-43.489557 336.251024-248.350954 298.082542-459.761367-11.460777-63.545918-41.033676-120.952134-83.602278-170.683721-17.702808-20.670331-38.066154-42.773259-65.592485-21.488958-26.400719 20.363346-4.809433 42.363945 7.674628 61.908664 3.78615 5.935045 9.107225 10.949136 13.302688 16.679524 94.449086 130.877985 84.932547 297.5709-23.535525 411.155391-107.854102 112.970521-278.844809 131.594284-409.722794 44.615169-130.571-86.67213-177.846707-248.453283-115.631058-395.396822C264.774658 327.246128 391.559508 244.87179 488.873788 260.323374c1.637254 16.474868-12.074748 24.763466-19.749375 36.224243-16.270211 24.047167-54.029379 49.117618-19.135405 77.564905 33.768362 27.526332 52.801439-13.302688 73.778755-33.461377 6.856001-6.549016 12.279404-14.4283 18.316778-21.795943 98.439892-121.259119 104.067952-105.705206-24.251824-202.610173-27.935645-21.079644-57.099231-80.225442-98.235235-36.838213-38.782452 40.82902 35.610273 54.950335 43.080244 92.30019-31.312481 10.744479-62.317977 20.363346-92.504847 32.02878C184.958529 275.774958 78.332367 484.217848 132.464075 667.180973 192.4285 869.791146 394.936345 992.073549 598.058159 948.379334z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-plus-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M47.653 439.326c-24.501 0-44.368 19.881-44.368 44.4v56.548c0 24.492 19.862 44.4 44.368 44.4h928.694c24.501 0 44.368-19.881 44.368-44.4v-56.548c0-24.497-19.862-44.4-44.368-44.4h-928.694z"  ></path>' +
    '' +
    '<path d="M586.326 47.653c0-24.501-19.881-44.368-44.4-44.368h-56.548c-24.492 0-44.4 19.862-44.4 44.368v928.694c0 24.501 19.881 44.368 44.4 44.368h56.548c24.497 0 44.4-19.862 44.4-44.368v-928.694z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)