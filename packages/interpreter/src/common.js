const bool_attrs = {
  allowfullscreen: true,
  allowpaymentrequest: true,
  async: true,
  autofocus: true,
  autoplay: true,
  checked: true,
  controls: true,
  default: true,
  defer: true,
  disabled: true,
  formnovalidate: true,
  hidden: true,
  ismap: true,
  itemscope: true,
  loop: true,
  multiple: true,
  muted: true,
  nomodule: true,
  novalidate: true,
  open: true,
  playsinline: true,
  readonly: true,
  required: true,
  reversed: true,
  selected: true,
  truespeed: true,
};

export function setAttributeInner(node, field, value, ns) {
  console.log(node);
  console.log(field);
  console.log(value);
  console.log(ns);

  const name = field;
  if (ns === "style") {
    // ????? why do we need to do this
    if (node.style === undefined) {
      node.style = {};
    }
    node.style[name] = value;
  } else if (ns != null && ns != undefined) {
    node.setAttributeNS(ns, name, value);
  } else {
    switch (name) {
      case "value":
        if (value !== node.value) {
          node.value = value;
        }
        break;
      case "initial_value":
        node.defaultValue = value;
        break;
      case "checked":
        node.checked = value === "true" || value === true;
        break;
      case "selected":
        node.selected = value === "true" || value === true;
        break;
      case "dangerous_inner_html":
        node.innerHTML = value;
        break;
      default:
        // https://github.com/facebook/react/blob/8b88ac2592c5f555f315f9440cbb665dd1e7457a/packages/react-dom/src/shared/DOMProperty.js#L352-L364
        if (value === "false" && bool_attrs.hasOwnProperty(name)) {
          node.removeAttribute(name);
        } else {
          node.setAttribute(name, value);
        }
    }
  }
}

export function handleMedia(node, source) {
  console.log(node);
  console.log(source);
}