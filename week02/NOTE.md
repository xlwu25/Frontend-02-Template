# 前端训练营第二周笔记及总结

## JS语言通识课

### 泛用语言分类方法

#### 非形式语言

- 中文
- 英文
- ...

#### 形式语言（乔姆斯基谱系）

- **0型** 无限制文法（没有具体规则）
- **1型** 上下文相关文法（需要联系上下文才能理解当前句子意思）
- **2型** 上下文无关文法（无需看上下文即可理解当前句子意思）
- **3型** 正则文法（定义时规则更严格，当前定义的非终结符不能在最右边），比如定义一个非终结符**A**， **\<A>::=?\<A>** 的写法是不合法的，**\<A>::= \<A>?** 的写法才可以（?为表达式其他部分）。

### 产生式（BNF）

产生式，即**巴科斯范式**，是用来描述语法的一种形式体系。能严格地表示语法规则，而且所描述的语法是与上下文无关的。

由**终结符**和**非终结符**组成，基本结构为：

\<non-terminal> ::= \<replacement>

non-terminal，即非终结符，就是说我们还没有定义完的东西，需要去定义的部分，replacement是我们之前定义过的非终结符或后面会定义的非终结符或当前定义的终结符和终结符组成的表达式。

**::=** 表示定义；
**""** 双引号里的内容表示字符；
**<>** 尖括号里的内容表示必选内容；
**|** 竖线两边的是可选内容，相当于or；

### 现代语言的分类

#### 根据形式语言的用途分

- **数据描述语言（本身无法编程）：** SGML、XML、JSON、HTML、XAML、SQL、CSS、VRML等
- **编程语言：** C、Java、Python、C#、C++、Visual Basic、JavaScript、R、PHP、Swift、SQL、Go、Assembly language、Perl、MATLAB、Ruby、Scratch、Rust、PL/SQL、Classic Visual Basic、SAS、Delphi/Object Pascal、、OpenEdge ABL、Transact-SQL、Objective-C、Groovy、Dart、D、Kotlin、COBOL、ABAP、Logo、PowerShell、Lisp、（Visual） FoxPro、Julia、Lua、Scala、VBScript、Haskell、Scheme、TypeScript、Ada、Prolog、PostScript、Erlang、RPG、Apex、C shell、Fortran等

#### 根据形式语言的表达方式分

- **声明式语言：** SGML、LISP、Prolog、IDLs、VRML、PL/SQL、SQL、CSS、JSON、XML、HTML、XAML等
- **命令型语言：** C、Java、Python、C#、C++、Visual Basic、JavaScript、R、PHP、Swift、Go、Assembly language、Perl、MATLAB、Ruby、Scratch、Rust、Classic Visual Basic、SAS、
Delphi/Object Pascal、、OpenEdge ABL、Transact-SQL、Objective-C、Groovy、Dart、D、Kotlin、COBOL、ABAP、Logo、PowerShell、Lisp、（Visual） FoxPro、Julia、Lua、Scala、VBScript、Haskell、Scheme、TypeScript、Ada、Prolog、PostScript、Erlang、RPG、Apex、C shell、Fortran等

### 一般命令式编程语言设计结构

一般会分为5个层级，分别是以下1-5。

1. Atom（第一层 —— 原子）

- Identifier（标识符，变量名）
- Literal（字面量，比如数字直接量，字符串直接量）

2. Expression（第二层 —— 表达式）

- Atom（原子级结构）
- Operator（操作符）
- Punctuator（标识符）

3. Statement（第三层 —— 语句）

- Expression（表达式）
- Keyword（关键字）
- Punctuator（标识符）

4. Structure（第四层 —— 结构）

- Function（函数、方法）
- Class（类）
- Process
- Namespace
-...

5. Program（第五层，程序）

- Program
- Module
- Package
- Library

## JS类型课

### 原子（Atom）

语法角度中的最小单元 —— 原子，反映到运行时中，造成运行时类型的变化和运行状态的改变。

#### Grammer（语法）

以下为组成JavaScript的最小语言结构

- Literal（字面值）
- Variable（变量）
- Keywords（关键字）
- Whitespace（空白）
- Line Terminator（行终结符）

#### Runtime（运行时）

Types（类型）
Execution Context（运行状态）

### Types（Js的七中基本数据类型）

#### Number（重要）

Double Float，双精度浮点型，在IEEE 754标准下定义的浮点数表示方法，一个Number占64位，分别为：

- Sign（1）符号位：用于表示正负
- Exponent（11）指数位：用于表示小数点的位置
- Rraction（52）精度位：用于表示具体的有效数字

除了64位，还有一个位，为隐藏位，是在有效数字位（精度位）的前一位，值永远为1，因为我们认为值开始的第一位不应该是0。隐藏位定义：「虽然在内存中没有，但是计算机在解析这个浮点数的时候又会把它给显现出来 虽然在内存中没有，但是计算机在解析这个浮点数的时候又会把它给显现出来」。
还有一个基准值的概念，因为指数位也需要有正负，所以大于基准值为正，小于基准值为负，等于基准值为0，然后要注意的一点是基准值默认有1位，会乘以一个2的1次方，所以算的时候，指数位记住不要算多一位。

例子：
比如我想表示十进制的17。首先为正数，符号位就为0了；再转为二进制得到10001，则精度位就为10001；最后算指数位，10001小数点需要从1的后面移到最后面需要移动4次，所以应该是4位，因为指数位中基准值为1023也就是011111111111代表着0，所以4就是1023+4为1027，转为二进制就是10000000011；
至此，则得到了所有的位数信息：0 + 10000000011 + 10001 + 47个0

#### String（重要）

String需要知道以下的概念，**Character（字符）**、**Code Point（码点）**、**Encoding（编码）**

##### 字符与码点概念

如何用来表示字符？只要人为规定某一个码点对应某个字符，就可以用来表示字符。然后很多很多的这种规定合在一起就变成了**字符集**。
其中最广为人知的字符集是**ASCII码**，它是最早的一个字符集，里面只规定了127个字符。还有就是**Unicoode**，它非常非常大，几乎包括了所有世界上的字符，还分不同的片区。除此之外，还有UCS（欧洲各国字符集）和GB（国标），国标又分GB2312、GBK、GB18030；最后还有BIG5（台湾省）。所有字符都兼容了ASCII码。

##### 编码概念

因为某些字符集联系了太多太多的字符，所以存储是一个比较大的问题，这时候就需要编码来解决，不同的字符集可以使用不同的编码方式。

- UTF编码方式：分为UTF-8和UTF-16，UTF-8默认用1个字节，占用8位，UTF-16默认用2个字节，占用16位。

UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。UTF-8 的编码规则很简单，只有二条：

1. 对于单字节的符号，字节的第一位设为0，后面7位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的。

2. 对于n字节的符号（n > 1），第一个字节的前n位都设为1，第n + 1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。

参考：「阮一峰的网络日志 —— 字符编码笔记：ASCII，Unicode 和 UTF-8」

- 其他编码方式：ANSI、Unicode（UCS-2）、Unicode big endian等

#### Boolean

true和false

#### Null 与 Undefined

Null为声明但是没有值；
Undefined为连声明都没有；
需要注意的点是早起版本js可以对undefined进行全局赋值，现在的js可以进行局部赋值。所有这时候拿undefined来判断可能就不保险了，所以可以用void 0来表示undefined。

#### Object（重要）

对象的三要素：**identifier**、**state**、**behavior**。

注意点：对象的行为不是我们现实生活中对象的行为，而是改变对象状态的行为。（重要）

构建类的三种方式：

- {} . [] Object.defineProperty
- Object.create / Object.setPrototypeOf / Object.getPrototypeOf
- new / class / extends

## 第二周总结

本周的主要收获是学习了编译原理中的产生式（BNF）概念，一般命令式编程语言设计结构，深入了解了Js中String和Number类型，Number的IEEE 754浮点数表示方法和String的字符集、编码的概念。视频课程虽然长度不长，但是吸收的话，就需要额外查找相关知识进行学习，在完成课后作业的过程中还加深了一些概念的理解，还有记笔记的过程，约等于重新回顾了一遍所有的视频，起到加深印象的作用。也没有太多总结可以写，都在课后作业里或者笔记中了。
