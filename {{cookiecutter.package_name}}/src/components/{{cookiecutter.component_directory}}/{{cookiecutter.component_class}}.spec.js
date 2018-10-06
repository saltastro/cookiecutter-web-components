import testHtml from '../../util/test-html'

const body = '<{{ cookiecutter.component_tag }}></{{ cookiecutter.component_tag }}>'

describe('{{ cookiecutter.component_class }}', () => {
  beforeAll(async () => {
    await page.goto(`data:text/html, ${testHtml(body)}`)
  })

  it('should work', async () => {
    await expect(page).toMatch('Hello World')
  })
})
