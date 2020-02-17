console.log("vnode test~")

function Element(tagName, props, children) {
  if (!(this instanceof Element)) {
    return new Element(tagName, props, children);
  }

  this.tagName = tagName
  this.props = props || {}
  this.children = children || []
  this.key = props ? props.key : undefined;

  let count = 0;
  this.children.forEach((child) => {
    if (child instanceof Element) {
      count += child.count
    }
    count++
  })
  this.count = count
}

Element.prototype.render = function() {
  const el = document.createElement(this.tagName)
  const props = this.props;

  for (const propName in props) {
    // setAttr(el, propName, props[propName])
    el.setAttribute(propName, props[propName])
  }

  this.children.forEach((child) => {
    const childEl = (child instanceof Element) ? child.render() : document.createTextNode(child)
    el.appendChild(childEl)
  })

  return el;
}

const tree = Element('div', { id: 'virtual-container' }, [
  Element('p', {}, ['Virtual DOM']),
  Element('div', {}, ['before update']),
  Element('ul', {}, [
    Element('li', { class: 'item' }, ['Item 1']),
    Element('li', { class: 'item' }, ['Item 2']),
    Element('li', { class: 'item' }, ['Item 3']),
  ]),
])

const root = tree.render()
document.getElementById('el').appendChild(root)

console.log(root)