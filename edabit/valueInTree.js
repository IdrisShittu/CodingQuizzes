function valueInTree(tree, val) {
    if (tree && tree[0]) {
        if (val == tree[0])return true;
        else return valueInTree(tree[1], val) || valueInTree(tree[2], val);
    }
    return false;
}
//find value in a binary tree.