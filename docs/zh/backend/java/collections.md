---
title: 集合框架
icon: java
order: 4
---

# 集合框架

Java 集合框架提供了一套性能优良、使用方便的接口和类。

## Collection 接口

```
Collection (接口)
├── List (接口)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
├── Set (接口)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue (接口)
    ├── LinkedList
    └── PriorityQueue
```

## List（有序可重复）

```java
import java.util.*;

// ArrayList（数组实现，随机访问快）
List<String> arrayList = new ArrayList<>();
arrayList.add("Apple");
arrayList.add("Banana");
arrayList.add(0, "Orange");  // 指定位置插入
arrayList.get(0);            // 获取
arrayList.set(0, "Grape");   // 修改
arrayList.remove(0);         // 删除
arrayList.size();            // 大小
arrayList.contains("Apple"); // 包含

// LinkedList（链表实现，插入删除快）
LinkedList<String> linkedList = new LinkedList<>();
linkedList.addFirst("First");
linkedList.addLast("Last");
linkedList.getFirst();
linkedList.getLast();
linkedList.removeFirst();
linkedList.removeLast();

// 遍历
for (String s : arrayList) {
    System.out.println(s);
}

Iterator<String> it = arrayList.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

## Set（无序不重复）

```java
// HashSet（哈希表，无序）
Set<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Apple");  // 重复，不会添加
hashSet.contains("Apple");
hashSet.remove("Apple");

// LinkedHashSet（保持插入顺序）
Set<String> linkedHashSet = new LinkedHashSet<>();

// TreeSet（红黑树，自动排序）
TreeSet<Integer> treeSet = new TreeSet<>();
treeSet.add(5);
treeSet.add(2);
treeSet.add(8);
treeSet.first();  // 最小的
treeSet.last();   // 最大的
treeSet.lower(5); // 小于5的最大值
treeSet.higher(5); // 大于5的最小值
```

## Map（键值对）

```java
// HashMap（哈希表）
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Apple", 5);
hashMap.put("Banana", 3);
hashMap.put("Orange", 8);
hashMap.get("Apple");           // 获取值
hashMap.remove("Banana");       // 删除
hashMap.containsKey("Apple");   // 包含键
hashMap.containsValue(5);       // 包含值
hashMap.size();                 // 大小
hashMap.keySet();               // 所有键
hashMap.values();               // 所有值
hashMap.entrySet();             // 所有键值对

// 遍历
for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

hashMap.forEach((k, v) -> System.out.println(k + ": " + v));

// LinkedHashMap（保持插入顺序）
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

// TreeMap（红黑树，自动排序）
TreeMap<String, Integer> treeMap = new TreeMap<>();
treeMap.firstKey();
treeMap.lastKey();
```

## 常用方法

```java
// 判断空
list.isEmpty();
collection.size() == 0;

// 清空
list.clear();

// 批量操作
list.addAll(otherList);
list.containsAll(otherList);
list.removeAll(otherList);
list.retainAll(otherList); // 交集

// 转换数组
String[] array = list.toArray(new String[0]);
```

## Collections 工具类

```java
// 排序
Collections.sort(list);
Collections.reverse(list);
Collections.shuffle(list);

// 查找
Collections.sort(list);
int index = Collections.binarySearch(list, target);

// 最大最小
Collections.max(collection);
Collections.min(collection);

// 同步包装
List<String> syncList = Collections.synchronizedList(new ArrayList<>());
Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());
```

## Stream API

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// 过滤
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// 映射
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());

// 排序
List<Integer> sorted = numbers.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());

// 统计
int sum = numbers.stream().mapToInt(Integer::intValue).sum();
int max = numbers.stream().mapToInt(Integer::intValue).max().orElse(0);

// 分组
Map<String, List<Person>> grouped = people.stream()
    .collect(Collectors.groupingBy(Person::getCity));
```