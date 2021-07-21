# 使用方法

使用 CLI 创建的自定义组件项目会自动安装 Web SDK，或使用下面的命令进行安装。JSX组件可以直接使用。

```bash
# 使用 npm 安装
npm i -D @apaas-cloud/web-sdk
# 使用 yarn 安装
yarn add -D @apaas-cloud/web-sdk
```

使用 import 语句导入 SDK 进行开发。

```typescript
import { SDK } from '@apaas-cloud/web-sdk';

...
```