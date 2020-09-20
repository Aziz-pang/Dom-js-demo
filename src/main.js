let title = 'js插入的元素'
const div1 = dom.create(`<div class="red">${title}-1</div>`)
// console.log(div1);

dom.after(p1,div1);

// 注意：create元素在内存释放到页面里，再次添加需要重新创建
const div2 = dom.create(`<div class="red">${title}-2</div>`)
dom.before(p2,div2);

const div3 = dom.create(`<div class="red">${title}-3</div>`)
dom.append(p3, div3);

const div4 = dom.create(`<div class="blue">${title}-4</div>`)
dom.wrap(test, div4)

dom.remove(p4); //删除段落4

dom.empty(empty) //清空子元素

dom.text(p5,'原本是「段落 5」这是js修改的内容')

dom.html(p6,`<div class="blue-bg">插入了一个div</div>`)

dom.style(p7,'background','yellow')
dom.text(p7,'被 style 修改的段落 7')

dom.class.add(p8,"blue-bg")
console.log(dom.class.has(p8,'blue-bg'))  //true

dom.on(p9, 'click', ()=>console.log('hi'))
dom.text(p9,'点击事件打印出\"hi\"')

let p10 = dom.find('#p10')[0] // <p id="p10">段落10</p>
console.log(p10)

console.log('parent ↓')
console.log(dom.parent(test))

console.log('child ↓')
console.log(dom.child(test))

console.log('siblings ↓')
console.log(dom.siblings(p2))

console.log('next ↓')
console.log(dom.next(p3))

console.log('previous ↓')
console.log(dom.previous(p5))

console.log('each ↓')
dom.each(dom.child(test),(n)=>dom.style(n,'font-size','17px'))

console.log('index ↓')
console.log(dom.index(p6))