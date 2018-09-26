var projectView = (function () {

    const init = () => {
        console.log("MADE IT!");

        // Code mockup here

    };

    return {
        init: init
    };
})();



// Ajax examples:
/**
 * 1.)
 * let myPosts = cip.get("https://jsonplaceholder.typicode.com/posts");
    myPosts.then(realdata => {
        console.log(realdata);
    });

  * 2.)
    let myParams = { title: 'a', body: 'b' };
    let myPosts = cip.post("https://jsonplaceholder.typicode.com/posts", "obj="+myParams);
    myPosts.then(realdata => {
        console.log("POSTED!");
    });
 */