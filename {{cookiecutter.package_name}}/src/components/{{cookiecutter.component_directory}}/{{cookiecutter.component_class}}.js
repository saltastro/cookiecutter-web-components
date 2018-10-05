export default class {{ cookiecutter.component_class }} extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div>Hello World</div>';
  }
}
