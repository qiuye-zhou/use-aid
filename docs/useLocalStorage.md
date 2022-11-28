---
title: LocalStorage
---

# LocalStorage

## 使用
```ts
import { useLocalStorage } from 'use-aid'

const uselocal = useLocalStorage()

uselocal.set('storage1', { 'name': 'aa', 'age': 18 })
const val = uselocal.get('storage1')

uselocal.removeAll()
```

## 方法

设置localstorage
```ts
set: (key: string, value: any) => void
```

通过key获取对应的值
```ts
get: (key: string) => any
```

通过下标获取对应的key
```ts
getForIndex: (index: number) => string | null
```


获取所有key
```ts
getKeys: () => string[]
```



获取localstorage存储了的长度
```ts
getLength: () => number
```


获取所有的key-value
```ts
getAll: () => storageType[]
```


删除给定key对应的键值对
```ts
remove: (key: string) => void
```


删除localstorage存储的所有内容
```ts
removeAll: () => void
```

