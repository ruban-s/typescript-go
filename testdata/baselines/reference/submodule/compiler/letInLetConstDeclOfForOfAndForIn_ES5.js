//// [tests/cases/compiler/letInLetConstDeclOfForOfAndForIn_ES5.ts] ////

//// [letInLetConstDeclOfForOfAndForIn_ES5.ts]
// Should be an error
for (let let of [1,2,3]) {}

for (const let of [1,2,3]) {}

for (let let in [1,2,3]) {}

for (const let in [1,2,3]) {}

{
	for (let let of [1,2,3]) {}

	for (const let of [1,2,3]) {}
	
	for (let let in [1,2,3]) {}

	for (const let in [1,2,3]) {}
}



//// [letInLetConstDeclOfForOfAndForIn_ES5.js]
// Should be an error
for (let let of [1, 2, 3]) { }
for (const let of [1, 2, 3]) { }
for (let let in [1, 2, 3]) { }
for (const let in [1, 2, 3]) { }
{
    for (let let of [1, 2, 3]) { }
    for (const let of [1, 2, 3]) { }
    for (let let in [1, 2, 3]) { }
    for (const let in [1, 2, 3]) { }
}
