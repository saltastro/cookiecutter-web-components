import {{ cookiecutter.component_class_name }} from './components/{{ cookiecutter.component_directory }}/{{ cookiecutter.component_class_name }}';

if (!customElements.get('{{ cookiecutter.component_tag }}')) {
    customElements.define('{{ cookiecutter.component_tag }}', {{ cookiecutter.component_class_name }});
}

