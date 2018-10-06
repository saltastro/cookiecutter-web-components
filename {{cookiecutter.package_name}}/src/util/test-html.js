/**
 * Create a HTML document for testing with Puppeteer.
 *
 * @param body content of the body element
 */
export default function testHtml(body) {
  return `<!DOCTYPE html>
<html>
<head>
<script src="http://localhost:{{ cookiecutter.test_server_port }}/{{ cookiecutter.package_name }}.js"></script>
</head>
<body>
${body}
</body>
</html>\``
}
