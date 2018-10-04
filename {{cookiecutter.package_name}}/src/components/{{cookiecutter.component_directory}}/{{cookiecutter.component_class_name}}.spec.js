const content = `<!DOCTYPE html>
<html>
<head>
<script src="http://localhost:{{ cookiecutter.test_server_port }}/web-components.js"></script>
</head>
<body>
<hello-world></hello-world>
</body>
</html>`

describe('{{ cookiecutter.component_class_name }}', () => {
  beforeAll(async () => {
    await page.goto(`data:text/html,${content}`)
  })

  it('should work', async () => {
    await expect(page).toMatch('Hello World');
  })
})
