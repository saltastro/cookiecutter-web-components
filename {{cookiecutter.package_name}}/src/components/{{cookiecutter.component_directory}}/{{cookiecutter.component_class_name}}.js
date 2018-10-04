export default class {{ cookiecutter.component_class_name }} extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<div>Hello World</div>';
    }
}
