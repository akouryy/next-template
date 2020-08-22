# akouryy/next-template

## コピー後行うこと

* [package.json](package.json) の `"name"` を変更
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
```
