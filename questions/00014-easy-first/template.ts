type First<T extends any[]> = T extends [] ? never : T[0]

// 检测传入T是否为[]
// 是则返回never 表示永远不存在的值的类型
// 否则返回T的第一个参数
