var text = "mark johansson waffle_iron 80 2\nmark johansson blender 200 1\nmark johansson knife 10 4\nNikita Smith waffle_iron 80 1\nNikita Smith knife 10 2\nNikita Smith pot 20 3";
var output = text
    .trim()
    .split('\n')
    .map(function (item) { return item.split(' '); })
    .reduce(function (customers, _a) {
    var name = _a[0], surname = _a[1], item = _a[2], price = _a[3], quantity = _a[4];
    var customer = name + " " + surname;
    customers[customer] = customers[customer] || [];
    customers[customer].push({ item: item, price: +price, quantity: +quantity });
    return customers;
}, {});
console.log('output', output);
