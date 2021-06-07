<h1>
  <table>
    <tr>
    <td><img align="center" alt="Jayant's Dev Site" src="https://i.imgur.com/C2jo9p4.png" height="100%" /></td>
    <td>
      <span>Jayant's Developer Site</span><br/>
      <small>Blogs, experiments, etc.</small>
    </td>
    </tr>
  </table>
</h1>

Built with Gatsby, the blog supports live code editing/execution and react
rendering.

- Typography powered by Typography.js
- Live Code Editing powered by React-Live
- Styling in Live Code powered by styled-components (if available for the post)
- Content written in MDX/React
- Code written in TypeScript and styled using SCSS Modules

## Development Instructions

```
yarn install
yarn dev

# To deploy to the specifed domain
yarn deploy
# See package.json scripts
```

Note:
If using the `title` prop in a code block, use `&nbsp;` to add spaces.
