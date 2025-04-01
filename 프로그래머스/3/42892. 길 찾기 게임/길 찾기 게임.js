class Node {
    constructor(info, num, left = null, right = null) {
        this.info = info;
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

function makeBT(nodeinfo) {
    nodeinfo = nodeinfo.map((v, i) => [...v ,i+1]);
    nodeinfo.sort((a,b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        }
        return b[1] - a[1];
    });
    let root = null;
    for (const node of nodeinfo) {
        if(!root) root = new Node([node[0],node[1]],node[2]);
        else {
            let parent = root;
            const newNode = new Node([node[0],node[1]],node[2]);
            while(true) {
                if(newNode.info[0] < parent.info[0]) {
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

function preOrder(root,answer) {
    if (root === null) return;
    answer.push(root.num);
    preOrder(root.left,answer);
    preOrder(root.right,answer);
}

function postOrder(root,answer){
    if (root === null) return;
    postOrder(root.left,answer);
    postOrder(root.right,answer);
    answer.push(root.num);
}

function solution(nodeinfo) {
    var answer = [[],[]];
    
    const root = makeBT(nodeinfo);
    preOrder(root,answer[0]);
    postOrder(root,answer[1]);
    return answer;
}