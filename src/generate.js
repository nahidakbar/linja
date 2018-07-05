"use strict";

// matrix

const lengths = ['2', '3', '4', 'x'];

const types = [
  {
    label: 'Float',
    suffix: 'f',
    class_: 'Float32Array'
  },
  {
    label: 'Double',
    suffix: 'd',
    class_: 'Float664Array'
  },
  {
    label: 'Complex',
    suffix: 'c',
    class_: 'Array'
  }
];

for (const length of lengths)
{
  for (const {label, suffix, class_} of types)
  {
    const className = `Vector${length}${suffix}`
    console.log(className)
  }
}
