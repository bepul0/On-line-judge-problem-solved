const isPrime = (n) => {
    if (n < 3) return n > 1;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    else if (n < 25) return true;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

var diagonalPrime = function (nums) {
    let largest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i][i])) {
            if (nums[i][i] > largest) largest = nums[i][i];
        }
        if (isPrime(nums[i][nums.length - 1 - i])) {
            if (nums[i][nums.length - 1 - i] > largest) {
                largest = nums[i][nums.length - 1 - i]
            }
        }
    }
    return largest;
};


const nums = [[395, 777, 912, 431, 42, 266, 989, 524, 498, 415, 941, 803, 850, 311, 992, 489, 367, 598, 914, 930, 224, 517, 143, 289, 144, 774, 98, 634], [819, 257, 932, 546, 723, 830, 617, 924, 151, 318, 102, 748, 76, 921, 871, 701, 339, 484, 574, 104, 363, 445, 324, 626, 656, 935, 210, 990], [566, 489, 454, 887, 534, 267, 64, 825, 941, 562, 938, 15, 96, 737, 861, 409, 728, 845, 804, 685, 641, 2, 627, 506, 848, 889, 342, 250], [748, 334, 721, 892, 65, 196, 940, 582, 228, 245, 823, 991, 146, 823, 557, 459, 94, 83, 328, 897, 521, 956, 502, 112, 309, 565, 299, 724], [128, 561, 341, 835, 945, 554, 209, 987, 819, 618, 561, 602, 295, 456, 94, 611, 818, 395, 325, 590, 248, 298, 189, 194, 842, 192, 34, 628], [673, 267, 488, 71, 92, 696, 776, 134, 898, 154, 946, 40, 863, 83, 920, 717, 946, 850, 554, 700, 401, 858, 723, 538, 283, 535, 832, 242], [870, 221, 917, 696, 604, 846, 973, 430, 594, 282, 462, 505, 677, 657, 718, 939, 813, 366, 85, 333, 628, 119, 499, 602, 646, 344, 866, 195], [249, 17, 750, 278, 120, 723, 226, 381, 814, 175, 341, 437, 836, 64, 104, 802, 150, 876, 715, 225, 47, 837, 588, 650, 932, 959, 548, 617], [697, 76, 28, 128, 651, 194, 621, 851, 590, 123, 401, 94, 380, 854, 119, 38, 621, 23, 200, 985, 994, 190, 736, 127, 491, 216, 745, 820], [63, 960, 696, 24, 558, 436, 636, 104, 856, 267, 72, 227, 74, 663, 309, 359, 447, 185, 63, 516, 479, 41, 611, 104, 717, 401, 205, 267], [368, 927, 750, 482, 859, 924, 941, 584, 174, 715, 689, 209, 990, 786, 60, 808, 693, 163, 866, 166, 351, 543, 257, 121, 612, 944, 453, 682], [180, 14, 483, 698, 420, 922, 583, 896, 521, 940, 319, 665, 366, 398, 858, 674, 257, 158, 575, 708, 13, 469, 760, 81, 344, 757, 47, 558], [288, 139, 246, 781, 977, 494, 361, 625, 295, 690, 368, 605, 970, 914, 649, 875, 636, 136, 733, 318, 398, 767, 425, 849, 667, 83, 2, 609], [197, 716, 343, 164, 246, 229, 653, 459, 388, 728, 897, 690, 582, 896, 425, 33, 412, 893, 719, 582, 429, 791, 679, 727, 48, 170, 457, 66], [266, 719, 162, 458, 541, 907, 499, 930, 575, 619, 774, 1, 906, 40, 507, 334, 320, 858, 479, 52, 829, 843, 897, 998, 832, 426, 193, 562], [987, 649, 86, 858, 743, 134, 16, 412, 973, 695, 428, 324, 4, 219, 15, 735, 773, 3, 843, 692, 542, 627, 101, 196, 122, 623, 665, 204], [895, 310, 287, 706, 187, 103, 488, 875, 945, 407, 643, 84, 23, 282, 936, 464, 820, 812, 119, 883, 263, 137, 670, 534, 837, 667, 661, 356], [118, 893, 159, 286, 872, 20, 44, 42, 211, 698, 266, 572, 323, 970, 376, 961, 582, 932, 870, 44, 867, 768, 985, 719, 623, 672, 507, 730], [660, 925, 470, 656, 446, 382, 893, 551, 183, 213, 385, 602, 299, 10, 142, 155, 278, 342, 346, 809, 377, 736, 96, 347, 799, 636, 37, 43], [277, 168, 154, 598, 297, 370, 405, 562, 133, 301, 118, 490, 749, 246, 957, 50, 316, 184, 878, 536, 747, 73, 310, 413, 856, 337, 307, 425], [112, 102, 575, 931, 493, 486, 346, 862, 818, 1000, 832, 352, 128, 491, 119, 717, 510, 437, 39, 310, 344, 753, 704, 916, 160, 942, 171, 642], [579, 385, 826, 998, 655, 90, 68, 828, 87, 203, 768, 227, 63, 395, 9, 101, 404, 570, 532, 297, 460, 943, 501, 808, 599, 732, 696, 223], [434, 86, 378, 226, 268, 600, 796, 171, 442, 197, 368, 118, 66, 842, 885, 874, 719, 29, 925, 539, 463, 771, 694, 207, 122, 510, 408, 263], [213, 657, 44, 971, 817, 222, 639, 150, 108, 203, 470, 388, 371, 560, 847, 155, 108, 611, 500, 152, 578, 416, 654, 697, 434, 899, 534, 508], [696, 940, 910, 331, 854, 511, 511, 651, 687, 896, 207, 556, 625, 954, 225, 10, 349, 723, 986, 765, 921, 326, 838, 330, 37, 538, 152, 896], [264, 618, 803, 160, 863, 389, 597, 302, 736, 724, 827, 482, 68, 820, 87, 529, 890, 938, 41, 68, 231, 134, 42, 308, 16, 778, 865, 460], [339, 883, 165, 820, 153, 890, 672, 472, 992, 381, 518, 392, 923, 543, 515, 35, 588, 93, 695, 814, 825, 531, 777, 615, 79, 765, 437, 928], [773, 212, 297, 549, 923, 613, 428, 846, 996, 494, 866, 811, 996, 398, 623, 601, 240, 872, 886, 818, 21, 673, 907, 1, 759, 187, 310, 520]]
console.log(diagonalPrime(nums));



