# Combination Algorithm

## How it's work

<p>Input: str='abc', dots=2</p>
<p>Outpur: <code> [‘abc’, ‘a.bc’, ‘ab.c’, ‘a.b.c’] </code></p>


<p>Input: str='abcdf', dots=3</p>
<p>Outpur: <code> [
  'abcdf',    'a.bcdf',
  'ab.cdf',   'abc.df',
  'abcd.f',   'a.b.cdf',
  'a.bc.df',  'a.bcd.f',
  'ab.c.df',  'ab.cd.f',
  'abc.d.f',  'a.b.c.df',
  'a.b.cd.f', 'a.bc.d.f',
  'ab.c.d.f', 'a.b.c.d.f'
]</code></p>


<p>Input: str='abcdef', dots=3</p>
<p>Outpur: <code> [
  'abcdef',    'a.bcdef',   'ab.cdef',
  'abc.def',   'abcd.ef',   'abcde.f',
  'a.b.cdef',  'a.bc.def',  'a.bcd.ef',
  'a.bcde.f',  'ab.c.def',  'ab.cd.ef',
  'ab.cde.f',  'abc.d.ef',  'abc.de.f',
  'abcd.e.f',  'a.b.c.def', 'a.b.cd.ef',
  'a.b.cde.f', 'a.bc.d.ef', 'a.bc.de.f',
  'a.bcd.e.f', 'ab.c.d.ef', 'ab.c.de.f',
  'ab.cd.e.f', 'abc.d.e.f'
] </code></p>
