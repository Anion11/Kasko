import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import uiAccordion from '../blocks/_ui/ui-accordion/ui-accordion'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import uiTab from '../blocks/_ui/ui-tab/ui-tab'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import gallery from '../blocks/gallery/gallery'
import slider from '../blocks/slider/slider'
import choice from '../blocks/choice/choice'
import banner from '../blocks/banner/banner'
import footerAccordion from '../blocks/footer/footer'
import menuPopup from '../blocks/menu-popup/menu-popup'
import SearchPopup from '../blocks/search-popup/search-popup'
import menuPopupTop from '../blocks/menu-popup-top/menu-popup-top'

document.addEventListener('DOMContentLoaded', function () {
  uiAccordion()
  uiDatepicker()
  uiInput()
  uiRange()
  uiSelect()
  menuPopupTop()
  menuPopup()
  uiTab()
  footerAccordion()
  uiTextarea()
  SearchPopup()
  uiTooltip()
  gallery()
  slider()
  banner()
  choice()
  window.addEventListener('load', scrollBarWidth, false)
  window.addEventListener('resize', scrollBarWidth, false)
})

function scrollBarWidth() {
  document.documentElement.style.setProperty(
    '--scrollbar-width',
    `${window.innerWidth - document.documentElement.clientWidth}px`
  )
}
