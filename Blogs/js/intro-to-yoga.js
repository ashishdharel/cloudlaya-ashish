var app = angular.module('yoga', []);
app.controller('yogaTypes', function ($scope) {
    $scope.name = ["Ashtanga yoga", "Bikram yoga", "Hatha yoga", "Iyengar yoga", "Jivamukti yoga", "Kripalu yoga"];
    $scope.desc = {
        "Ashtanga yoga": "This type of yoga uses ancient yoga teachings. However, it became popular during the 1970s. Ashtanga applies six established sequences of postures that rapidly link every movement to breath.",
        "Bikram yoga": "Also known as “hot” yoga, Bikram occurs in artificially heated rooms at temperatures of nearly 105 degrees and 40 percent humidity. It consists of 26 poses and a sequence of two breathing exercises.",
        "Hatha yoga": "This is a generic term for any type of yoga that teaches physical postures. “Hatha” classes usually serve as a gentle introduction to the basic yoga postures.",
        "Iyengar yoga": "This type focuses on finding the correct alignment in each pose using a range of props, such as blocks, blankets, straps, chairs, and bolsters.",
        "Jivamukti yoga": "Jivamukti means “liberation while living.” This type emerged in 1984 and incorporates spiritual teachings and practices that focus on the fast-paced flow between poses rather than the poses themselves.",
        "Kripalu yoga": "This type teaches practitioners to know, accept, and learn from the body. A student of Kripalu learns to find their own level of practice by looking inward. The classes usually begin with breathing exercises and gentle stretches, followed by a series of individual poses and final relaxation."
    };
});

app.controller('yogaReferences', function ($scope) {
    $scope.name = ["Wikipedia", "Medical News Today", "Yoga Journal", "NY Times"];
    $scope.links = { "Wikipedia": "https://en.wikipedia.org/wiki/Yoga", "Medical News Today": "https://www.medicalnewstoday.com/articles/286745", "Yoga Journal": "https://www.yogajournal.com/", "NY Times": "https://www.nytimes.com/guides/well/beginner-yoga" };
});