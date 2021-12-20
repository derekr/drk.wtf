const fs = require('node:fs/promises')
const path = require('node:path')
const glob = require('tiny-glob')

async function main() {
  const files = await glob('app/routes/g/**/*.{md}')

  const manifest = files.map((file) => {
    const slug = path.basename(file.replace('.md', ''))
    return {
      slug,
      path: file.replace('.md', '').replace('app/routes', ''),
      file,
    }
  })

  await fs.writeFile(path.join(__dirname, '..', 'garden-manifest.json'), JSON.stringify(manifest))
}

main()
