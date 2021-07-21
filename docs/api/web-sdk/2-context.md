# 组件上下文

## 画布上下文

画布上下文为组件提供页面级的上下文信息。

```typescript
import { useContext } from 'react';
import { SDK, CanvasContextData } from '@qcloud-apaas/web-sdk';

export default () => {
  const ctx: CanvasContextData = useContext(SDK.CanvasContext);
}
```

### 画布上下文类型

```typescript
type CanvasContextData = {
  /**
   * 画布尺寸
   */
  size: CanvasSize;
  /**
   * 画布模式，运行态、设计态
   */
  mode: CanvasMode;
  /**
   * 返回整个画布的上下文数据，仅运行态使用
   */
  getValues?: () => Record<string, any>;
  /**
   * 设置上下文数据，仅运行态使用
   * @param key 对象apiKey
   * @param value 数据
   */
  setValue?: (key: string, value: Record<string, any>) => void;
};
```

## 表单上下文

表单上下文为组件提供表单上下文信息。

```typescript
import { useContext } from 'react';
import { SDK, DataFormContextData } from '@qcloud-apaas/web-sdk';

export default () => {
  const ctx: DataFormContextData = useContext(SDK.DataFormContext);
}
```

### 表单上下文类型

```typescript
type DataFormContextData = {
  /**
   * 表单布局
   * 默认、固定、垂直、行内、行内垂直
   */
  layout?: 'default' | 'fixed' | 'vertical' | 'inline' | 'inline-vertical';
  /**
   * 表单控件展示模式
   * 1编辑、2只读、3文本、4继承
   */
  showMode: FormFieldShowModeType;
  /**
   * final-form 表单实例
   */
  form: FormApi;
  /**
   * 对react-final-form-hooks的useField方法的封装
   */
  useField: (fieldSource: { code: string; apiKey: string }, validators: Record<string, any>) => FieldRenderProps;
  /**
   * 表单是否提交中
   */
  submitting: boolean;
  /**
   * 表单是否未填写
   */
  pristine: boolean;
  /**
   * 表单组件类型，0 DataForm, 1 SearchForm
   */
  formComponentType: FormComponentType;
  /**
   * 获取组件最终展示模式，如果是继承返回表单的展示模式，否则返回组件自身的展示模式
   */
  getFinalShowMode: (componentShowMode: FormFieldShowModeType) => FormFieldShowModeType;
  /**
   * 获取用户对字段的访问权限，仅运行态使用
   */
  getFieldPermission: (fieldCode: string) => FormFieldPermission;
  /**
   * 返回整个表单数据，仅运行态使用
   */
  getValues: () => Record<string, any>;
  /**
   * 解析表达式，仅运行态使用
   */
  evaluateExpression: (exp: string) => Promise<{ type: EvaluateExpressionResultType; value: any }>;
  /**
   * 校验表单字段，仅运行态使用
   */
  validateField: (name: string, val: any, validators: Record<string, any>) => Promise<string>;
  /**
   * 提交表单方法，仅运行态使用
   */
  handleSubmit: () => void;
};
```

## 表格上下文

表格上下文为组件提供表格上下文信息。

```typescript
import { useContext } from 'react';
import { SDK, DataGridContextData } from '@qcloud-apaas/web-sdk';

export default () => {
  const ctx: DataGridContextData = useContext(SDK.DataGridContext);
}
```

### 表格上下文类型

```typescript
type DataGridContextData = {
  /**
   * 解析表达式，仅运行态使用
   */
  evaluateExpression: (
    exp: string,
    opt: { rowIndex: number },
  ) => Promise<{ type: EvaluateExpressionResultType; value: any }>;
};
```

## 列表记录上下文

列表记录上下文为组件提供列表记录上下文信息。

```typescript
import { useContext } from 'react';
import { SDK, ListViewRecordContextData } from '@qcloud-apaas/web-sdk';

export default () => {
  const ctx: ListViewRecordContextData = useContext(SDK.ListViewRecordContext);
}
```

### 列表记录上下文类型

```typescript
type ListViewRecordContextData = {
  /**
   * 解析表达式，仅运行态使用
   */
  evaluateExpression: (exp: string) => Promise<{ type: EvaluateExpressionResultType; value: any }>;
};
```
