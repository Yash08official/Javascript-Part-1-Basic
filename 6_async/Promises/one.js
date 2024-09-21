var sortColors = function(nums) {
    var i = -1, j = nums.length, k = 0;
    while (k < j) {
        if (nums[k] === 0) {
            swap(nums, ++i, k++);
        } else if (nums[k] === 2) {
            swap(nums, --j, k);
        } else {
            ++k;
        }
    }
};

function swap(nums, i, j) {
    var t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}

