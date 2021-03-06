import Form from '../form/form'
import { mergeData } from 'vue-functional-data-merge'

// @vue/component
export default {
  functional: true,
  props: {
    id: {
      type: String,
      default: null
    }
  },
  render (h, { props, data, children }) {
    return h(Form, mergeData(data, { attrs: { id: props.id }, props: { inline: true } }), children)
  }
}
