# 使用

## 介绍

```shell
$ qcomponent COMMAND
running command...
$ qcomponent (-v|--version|version)
@qcloud-apaas/component-tools-cli/1.1.12 darwin-x64 node-v14.16.1
$ qcomponent --help [COMMAND]
USAGE
  $ qcomponent COMMAND
...
```

## 命令

- [`qcomponent build`](#qcomponent-build)
- [`qcomponent config [CONFIGKEY] [CONFIGVALUE]`](#qcomponent-config-configkey-configvalue)
- [`qcomponent create [KEY]`](#qcomponent-create-key)
- [`qcomponent help [COMMAND]`](#qcomponent-help-command)
- [`qcomponent mkcert [KEY]`](#qcomponent-mkcert-key)
- [`qcomponent publish`](#qcomponent-publish)
- [`qcomponent release`](#qcomponent-release)
- [`qcomponent start`](#qcomponent-start)

## `qcomponent build`

发布组件

```
USAGE
  $ qcomponent build

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ qcomponent release
```

## `qcomponent config [CONFIGKEY] [CONFIGVALUE]`

修改配置

```
USAGE
  $ qcomponent config [CONFIGKEY] [CONFIGVALUE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ qcomponent config secretId <secretId>
  $ qcomponent config secretKey <secretKey>
```

## `qcomponent create [KEY]`

生成代码

```
USAGE
  $ qcomponent create [KEY]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ qcomponent create <group>:<name>
```

_See code: [src/commands/create.ts](https://github.com/qcloud-apaas/component-tools-cli/blob/v1.1.12/src/commands/create.ts)_

## `qcomponent help [COMMAND]`

display help for qcomponent

```
USAGE
  $ qcomponent help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## `qcomponent mkcert [KEY]`

生成代码

```
USAGE
  $ qcomponent mkcert [KEY]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ qcomponent create <group>:<name>
```

## `qcomponent publish`

发布组件

```
USAGE
  $ qcomponent publish

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ qcomponent release
```

## `qcomponent release`

发布组件

```
USAGE
  $ qcomponent release

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ qcomponent release
```

## `qcomponent start`

运行组件

```
USAGE
  $ qcomponent start

OPTIONS
  -c, --config=config  webpack配置
  -h, --help           show CLI help
  -p, --port=port      运行端口

EXAMPLE

       $ qcomponent start
       $ qcomponent start -p 8080
       $ qcomponent start -c ./webpack.config.js
```
