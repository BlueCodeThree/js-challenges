/*
There is a queue for the self-checkout tills at the supermarket.
Your task is write a function to calculate the total time required for
all the customers to check out!

The function has two input variables:
    customers: an array of positive integers
            representing the queue. Each integer represents a customer,
            and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

The function should consider each person in order, and add them to the
'smallest' line at that time (the line with the least total time).

The function should return an integer, the time it takes for all lines to empty.

For example, if the input queue is [1,2,3,4,5,6] and there are 2 tills,
the queue would be separated as follows:
till1       till2
1           2
3           4
5           6
---         ---
9           12

So this would take 12 total time, since all customers will be served when
the last customer at till2 is served.

Check your solutions with npm test
*/


// Returns the queue time for all customers given number of tills
function queueTime(customers, n) {
    // so need to calculate when the time would run out, have a current sum for each till and see which is less, that would be the next till for the next person.
    // how do we have a sum for each queue? For each till, create an array and then have that index be the queue and will see which index is currently the min, and that one is the one the thing will be added to.
    // or, have an array for each queue and the lowest sum will show which queue
    // lets do it with one till first
    let queues = Array.apply(null, Array(n)).map(function () {return 0;});
    for (let customer of customers) {
        // first check which is the lowest number in queues
        let minIndex = queues.indexOf(Math.min(...queues));
        queues[queues.indexOf(Math.min(...queues))] += customer;
    }
    return Math.max(...queues);
}

module.exports = {
    queueTime
}