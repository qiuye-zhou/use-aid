---
title: LocalStorage
---

# LocalStorage

## use
```ts
import { useLocalStorage } from 'use-aid'

const uselocal = useLocalStorage()

uselocal.set('storage1', { 'name': 'aa', 'age': 18 })
const val = uselocal.get('storage1')

uselocal.removeAll()
```

## method

Set localstorage
```ts
set: (key: string, value: any) => void
```

Get the corresponding value through the key
```ts
get: (key: string) => any
```

Get the corresponding key by subscript
```ts
getForIndex: (index: number) => string | null
```


Get all key
```ts
getKeys: () => string[]
```



Get the length stored in localstorage
```ts
getLength: () => number
```


Get all key-value
```ts
getAll: () => storageType[]
```


Delete the key value pair corresponding to the given key
```ts
remove: (key: string) => void
```


Delete all contents stored in localstorage
```ts
removeAll: () => void
```

