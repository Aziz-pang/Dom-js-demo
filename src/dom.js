window.dom = {
    create(string) {
        const container = document.createElement("template")
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node, node2) { //在 node2 后面创建 node
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) { //在 node2 前面创建 node
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) { //在parent标签最后添加node
        parent.appendChild(node);
    },
    wrap(node, parent) { //实现node添加父元素
        dom.before(node, parent); //node前面创建parent
        dom.append(parent, node); //在parent标签里插入node
    },
    remove(node) {
        node.parentNode.removeChild(node) //原生只能通过父元素删除子元素
        return node
    },
    empty(node) {
        const array = [];
        let x = node.firstChild
        while (x) {
            //逐一删除「子元素」，并将删除的「子元素」push到一个新数组里
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerHTML = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(element, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(element, 'color')
                node.style[name] = value
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(element, {color:'red',border:'1px solid red')
                const obj = name
                for (let key in obj) {
                    node.style[key] = obj[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className){
            node.classList.remove(className)
        },
        has(node, className){
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeAttribute(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    child(node) {
        return node.children
    },
    siblings(node) {
        //返回所有兄弟姐妹数组，但不包括自己
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    next(node) { //返回兄弟元素
        let x = node.nextSibling
        //节点类型常量，3 = 文字
        //todo https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
        //代码意思是排除元素之间的“文字”元素，如“回车、空格等”
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) { //
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.child(node.parentNode);
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};