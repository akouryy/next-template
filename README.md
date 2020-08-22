# akouryy/next-template

## コピー後行うこと

* [package.json](package.json) の `"name"` を変更
* 必要なら [.vscode/](.vscode/) を [.gitignore](.gitignore) に加える
* [pages/index.tsx](pages/index.tsx) を編集
* [README.md](README.md) を編集

## ライセンス

[MIT](LICENSE)

## 操作履歴

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

```
