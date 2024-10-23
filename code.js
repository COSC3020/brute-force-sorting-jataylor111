// Global variable for the counting makes tracking easier
// Pretty sure globals need to be var
var numPerms = 0;

function permutationSort(a) {
    // Check for emtpy or only 1
    if (a.length == 0 || a.length == 1) {
        return numPerms;
    }
    // Make sure the array isn't already sorted
    if (sorted(a) == true) {
        return numPerms;
    }

    // Call the permutation function
    perm(a, 0);

    return numPerms;
}

function perm(a, i) {
    // Check if sorted
    if (sorted(a) == true) {
        return;
    }
    else {
        for (let j = i; j < a.length; j++) { // Complexity n!, while it runs the whole length of a, it checks every single
                                            // possible permutation it will have a complexity of n!
            numPerms++;
            [a[i], a[j]] = [a[j], a[i]];
            perm(a, i + 1);
            if (sorted(a) == true) {
                return;
            }
            [a[i], a[j]] = [a[j], a[i]];
        }
    }

}

// This function checks to see if the array has been sorted
function sorted(a) {
    for(let i = 0; i < a.length - 1; i++) { // Complexity n, at worst it will run the entire end of the array
        // Determine whether or not two values next two each other are sorted, if not it fails
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}

// let arr = [5,6,8,5,4,5]; // Anything much bigger is utterly unusable due to complexity issues
// console.log(permutationSort(arr));
