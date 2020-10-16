---
id: css-selector
title: "CSS Scelector"
---

[](https://poiemaweb.com/css3-selector)
[](https://velog.io/@rimu/css-css-%EC%84%A0%ED%83%9D%EC%9E%90selector-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)

## CSS selector에 대해
CSS(Cascading Style Sheets)는 HTML 요소(Element)의 스타일을 주는 역할을 하는데요, 그러려면 스타일을 적용하고자하는 HTML 요소를 특정할 필요가 있기 때문에 선택자(selector)에 대해 잘 알아둬야 합니다.

먼저 css의 기본적인 규칙은 다음과 같은데요,
여기서 `h1`이라고 되어있는 부분이 바로 셀렉터 입니다. `h1`이라는 `html`의 태그를 선택해서 다음의 스타일을 적용한 것입니다. 프로퍼티(속성)과 값이 하나의 짝으로 움직입니다.


## 6.3 기본 CSS selector

### 1. 전체 셀렉터(universal selector)
규칙: *
설명: HTML 문서 내의 모든 요소를 선택합니다. html 요소를 포함한 모든 요소가 선택된다. (head 요소도 포함된다) 주로 box-sizing처럼 문서 전체에 한번에 적용해야하는 스타일이 있을때 사용합니다.

```css
* {
    box-sizing: border-box;
}
```

### 2. 태그 셀렉터 (Type Selector)
규칙: 태그이름
설명: 지정된 태그명을 가지는 요소를 선택합니다.

### 3. ID 셀렉터 (ID Selector)
규칙: #id이름
설명: id값을 선택하는 셀렉터입니다. id는 html에서 중복되어 사용할 수 없습니다.

### 4. 클래스 셀렉터 (Class Selector)
규칙: .class이름
설명: class값을 선택하는 셀렉터입니다. class는 html문서에서 중복되어 쓸 수 있습니다.

### 5. 태그,ID,클래스 복합 셀렉터
규칙: 태그#id이름 태그.class이름 #id이름.class이름
설명: 태그와 id, class값을 혼합해서 선택하는 셀렉터입니다. 요소를 구체적으로 언급해야할때 사용하고, 띄어쓰기가 없는 것에 주의해야합니다.(뒤에서 등장하지만 띄어쓰기가 있는방식은 후손요소를 선택하는 셀렉터입니다.)

```css
/* p태그이면서 p-tag라는 클래스값을 가지는 요소를 선택*/
p.p-tag {
color: gray;
} 
/* p태그이면서 #third-line이라는 id값을 가지는 요소를 선택*/
p#third-line {
text-decoration: underline;
}
```

### 6. 어트리뷰트 셀렉터 (Attribute Selector)
규칙: 셀렉터[어트리뷰트]
설명: 지정된 어트리뷰트(속성값)을 가지는 모든 요소를 선택합니다.

```css
a[href] { color: red; }    
규칙: 셀렉터[어트리뷰트="값"]
설명: 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트의 값이 일치하는 모든 요소를 선택합니다.

a[target="_blank"] { color: red; }
input[type="text"]
```

## 복합 CSS selector

### 후손 셀렉터

자신의 1 level 상위에 속하는 요소를 부모 요소, 1 level 하위에 속하는 요소를 자손 요소(자식 요소)라고 합니다. 자신보다 n level 하위에 속하는 요소는 후손 요소(하위 요소)라 합니다.

규칙: 셀렉터A 셀렉터B
설명: 후손 셀렉터는 셀렉터A의 모든 후손(하위) 요소 중 셀렉터B와 일치하는 요소를 선택합니다. 셀렉터B를 선택한다는게 핵심입니다!

아래 코드는 모든 div 태그들 중에 p태그를 선택한 것입니다.

  /* div 요소의 후손요소 중 p 요소 */
    div p { color: red; }
자식 셀렉터 (Child Combinator)
규칙: 셀렉터A > 셀렉터B
설명: 자손 셀렉터는 셀렉터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소를 선택합니다.

  /* div 요소의 자식요소 중 p 요소 */
    div > p { color: red; }


형제(동위) 셀렉터 (Sibling Combinator)


1) 인접 형제 셀렉터(Adjacent Sibling Combinator)
규칙: 셀렉터A + 셀렉터B
설명: 셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소를 선택합니다. A와 B 사이에 다른 요소가 존재하면 선택되지 않습니다.

```html
  <style>
    /* p 요소의 형제 요소 중에 p 요소 바로 뒤에 위치하는 ul 요소를 선택한다. */
    p + ul { color: red; }
  </style>

  <p>The first paragraph.</p>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
```

2) 일반 형제 셀렉터(General Sibling Combinator)
규칙: 셀렉터A ~ 셀렉터B
설명: 셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택합니다.

```html
<style>
    /* p 요소의 형제 요소 중에 p 요소 뒤에 위치하는 ul 요소를 모두 선택한다.*/
    p ~ ul { color: red; }
 </style>
```

가상 클래스 셀렉터 (Pseudo-Class Selector)
가상 클래스 셀렉터는 원래 클래스가 존재하지 않지만 가상 클래스를 임의로 지정하여 선택하는 방법입니다. 마우스가 들어왔을때 등의 특정 상태에만 적용되는 가상의 클래스를 지정해주는 것입니다.

가상 클래스는 마침표(.) 대신 콜론(:)을 사용하는데요, CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다는 특징이 있습니다.

다음은 div 요소가 hover 상태일 때(마우스가 올라와 있을 때) background-color를 yellow로 지정하는 예입니다.

```html
<style>
    /* a 요소가 hover 상태일 때 */
    a:hover { color: red; }
    /* input 요소가 focus 상태일 때 */
    input:focus { background-color: yellow; }
 </style>
```

동적 셀렉터(User action pseudo-classes)
:link 셀렉터가 방문하지 않은 링크일 때
:visited 셀렉터가 방문한 링크일 때
:hover 셀렉터에 마우스가 올라와 있을 때
:active 셀렉터가 클릭된 상태일 때
:focus 셀렉터에 포커스가 들어와 있을 때

구조 가상 클래스 셀렉터(Structural pseudo-classes)
:first-child 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택
:last-child 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택
:nth-child(n) 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택
:nth-last-child(n) 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택
:nth-child(odd) 셀렉터에 해당하는 모든 요소 중 홀수번째 자식인 요소 선택

nth-child(even) 셀렉터에 해당하는 모든 요소 중 짝수번째 자식인 요소 선택

부정 셀렉터(Negation pseudo-class)
:not(셀렉터) 셀렉터에 해당하지 않는 모든 요소를 선택

```html
  <style>
    /* input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택 */
    input:not([type=password]) {
      background: yellow;
    }
  </style>
```

가상 요소 셀렉터 (Pseudo-Element Selector)
요소 콘텐츠의 첫글자 또는 첫줄,
요소 콘텐츠의 앞 또는 뒤를 선택할때 가상요소 셀렉터를 사용할 수 있습니다.


::first-letter 콘텐츠의 첫글자를 선택합니다
::first-line 콘텐츠의 첫줄을 선택합니다. 블록 요소에만 적용할 수 있습니다.
::after 콘텐츠의 뒤에 위치하는 공간을 선택합니다. 일반적으로 content 어트리뷰트와 함께 사용됩니다.
::before 콘텐츠의 앞에 위치하는 공간을 선택합니다. 일반적으로 content 어트리뷰트와 함께 사용됩니다.
::selection 드래그한 콘텐츠를 선택합니다. iOS Safari 등 일부 브라우저에서 동작하지 않습니다.

```html
  <style>
    /* p 요소 콘텐츠의 첫글자를 선택 */
    p::first-letter { font-size: 3em; }
    /* p 요소 콘텐츠의 첫줄을 선택 */
    p::first-line   { color: red; }

    /* h1 요소 콘텐츠의 앞 공간에 content 어트리뷰트 값을 삽입한다 */
    h1::before {
      content: " HTML!!! ";
      color: blue;
    }
    /* h1 요소 콘텐츠의 뒷 공간에 content 어트리뷰트 값을 삽입한다 */
    h1::after {
      content: " CSS3!!!";
      color: red;
    }

    /* 드래그한 콘텐츠를 선택한다 */
    ::selection {
      color: red;
      background: yellow;
    }
  </style>
```

참고링크
이글은 poiemaweb css 셀렉터 챕터의 일부를 정리했습니다.