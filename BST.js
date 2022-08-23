class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    };
  
    insert(value) {
      if (value === this.value) {
        throw new Error('this value already exist inside the tree: ' + this.value);
      
      } else if (value < this.value) {
        // go left
        if (!this.left) this.left = new Node(value);
        else this.left.insert(value);
        
      } else if (value > this.value) {
        // go right
        if (!this.right) this.right = new Node(value);
        else this.right.insert(value);
      }
    };
  
    // check if the value exist within the tree or not.
    find (value) {
      if (value < this.value && this.left !== null) {
        // left 
        return this.left.find(value)
      } else if (value > this.value && this.right !== null) {
        return this.right.find(value)
      } else if (value === this.value) {
        return true;
      } else return false;
    };
  
    // findMin() { // interative
    //   let currentNode = this;
    //   while(currentNode.left) {
    //     currentNode = currentNode.left;
    //   }
  
    //   return currentNode.value;
    // };
  
    findMin() { // recursive
      if (this.left) { // recursive case
        return this.left.findMin();
      } else { //base case
        return this.value; 
      }
    };
  
    findMaxInterative() {
      let currentNode = this;
      while(currentNode.right) {
        currentNode = currentNode.right;
      };
  
      return currentNode.value;
    }
  
    findMaxRecursive() {
      if (this.right) {
        return this.right.findMaxRecursive();
      } else return this.value;
    };
   
    delete(value) {
      // looking for the node inside the tree 
      if (value < this.value && this.left) {
        // left
        this.left = this.left.delete(value);
      } else if (value > this.value && this.right) {
        // right
        this.right = this.right.delete(value);
      } else {
        // value === this.value
        // find a match, go to work
        // case 1: delete a node have 0 child
        if (this.left === null && this.right === null) {
          return null;
        } else if (this.left) {
          // case 2: delete a node have 1 child
          return this.left
        } else if (this.right) {
          return this.right
          // case 3: delete a node have 2 child 
        } else if (this.right && this.left) {
          let minVal = this.right.findMin();
          this.value = minVal;
          // delete duplicate node
          this.right = this.right.delete(minVal);
        }
      }
  
      return this;
    }
  
    findHeight(currentNode) {
      if (currentNode === null) return -1;
      let leftHeight = this.findHeight(currentNode.left);
      let rightHeight = this.findHeight(currentNode.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }

    breathFirstSearch() {
      let currentNode = this;
      let queue = [];
      let list = []; // answer 
      
      queue.push(currentNode);  

      while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);
        
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
     if (this.root === null) this.root = new Node(value);
     else this.root.insert(value);
    };
  
    find(value) {
      if (this.root === null) return false;
      else return this.root.find(value);
    }
  
    delete(value) {
      if (this.root) return this.root.delete(value);
      else return false;
    }
  
    findHeight() {
      if (this.root) return this.root.findHeight(this.root);
      return -1;
    }
    
    breathFirstSearchR(queue, list) {
      if (this.root === null) return null;
      else return this.root.breathFirstSearchR(queue, list);
    }

    breathFirstSearch() {
      if (this.root === null) return null;
      else return this.root.breathFirstSearch();
    }
  };
  
  const tree = new BST();
  tree.insert(50)
  tree.insert(25)
  tree.insert(27)
  tree.insert(75)
  tree.insert(15)
  tree.insert(35)
  tree.insert(10)
  tree.insert(18)
  tree.insert(40)
  tree.insert(65)
  tree.insert(85)
  tree.delete(25)
  console.log(tree)
  
  // console.log(tree.find(85))