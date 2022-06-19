# akouryy/next-template

## コピー後行うこと

* `yarn` 初回実行前に、[.next/](.next/) と [node_modules/](node_modules/) に `com.dropbox.ignored` 属性を付与
* [package.json](package.json) の `"name"` と [components/BasePage.tsx](components/BasePage.tsx) の `TitleBase` を変更
* 必要なら [.vscode/](.vscode/) を [.gitignore](.gitignore) に追加
* 必要なら [components/BasePage.tsx](components/BasePage.tsx) の著作権表示を変更
* [README.md](README.md) を編集

## ライセンス

[MIT](LICENSE)

## その他

### 操作履歴

```sh
$ yarn create next-app
  # create-next-app@9.5.2
  > my-template
$ mv my-template/* my-template/.gitignore .
  mv: overwrite './README.md'? n
$ rm my-template/README.md && rmdir my-template/
$ yarn add --dev typescript
$ yarn add @types/react @types/node
$ yarn add -D eslint@7 eslint-config-airbnb@18 eslint-config-prettier@6 eslint-config-standard-react@9 \
    eslint-config-standard-with-typescript@18 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 \
    eslint-plugin-no-autofix@1 eslint-plugin-node@11 eslint-plugin-prettier@3 eslint-plugin-promise@4 \
    eslint-plugin-react@7 eslint-plugin-react-hooks@4 eslint-plugin-standard@4 \
    @typescript-eslint/eslint-plugin@3 @typescript-eslint/parser@3 prettier@2
$ yarn add modern-normalize sass
$ yarn add uuid @types/uuid lodash @types/lodash
```
