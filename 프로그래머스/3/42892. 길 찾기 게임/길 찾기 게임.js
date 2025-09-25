class Node {
    constructor(x,y, num, left = null, right = null) {
        this.x = x;
        this.y = y;
        this.num = num;
        this.left = left;
        this.right = right;
    }
    hasLeft() {
        return this.left !== null;
    }
    hasRight() {
        return this.right !== null;
    }
}

function makeTree(nodeinfo) {
    nodeinfo = nodeinfo.map((v,i) => [...v,i+1]);
    nodeinfo.sort((a,b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
    });
    let root = null;
    for (const [x,y, num] of nodeinfo) {
        if (root === null) root = new Node(x,y,num);
        else {
            let parent = root;
            const newNode = new Node(x,y,num);
            while (true) {
                if (newNode.x < parent.x) {
                    if (parent.hasLeft()) {
                        parent = parent.left;
                        continue;
                    }
                    parent.left = newNode;
                    break;
                } else {
                    if (parent.hasRight()) {
                        parent = parent.right;
                        continue;
                    }
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
    return root;
    
}

function preOrder(node,arr) {
    if(node == null) return;
    arr.push(node.num);
    preOrder(node.left,arr);
    preOrder(node.right,arr);
}

function postOrder(node, arr) {
    if (node === null) return;
    postOrder(node.left,arr);
    postOrder(node.right,arr);
    arr.push(node.num);

}


function solution(nodeinfo) {
    var answer = [[]];
    const root = makeTree(nodeinfo);
    const arr1 = [];
    const arr2 = [];
    
    preOrder(root,arr1);
    postOrder(root,arr2);
    answer[0] = arr1;
    answer[1] = arr2;
    return answer;
}