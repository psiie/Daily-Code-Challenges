// Recreate an ASCII Table: https://code.golf/ascii-table#python

console.log('   2 3 4 5 6 7\n', '-'.repeat(14))
for (let i = 32; i < 48; i++) {
  process.stdout.write((i - 32).toString(16).toUpperCase() + ': ')
  for (let j = i; j < i + 96; j += 16) {
    process.stdout.write(String.fromCharCode(j) + ' ')
  }

  console.log()
}

// ------------------------ //
// Code Golfed to 232 bytes
((w, i, j) => {w(`   2 3 4 5 6 7\n--------------\n`);for (i = 32; i < 48; i++) {w((i - 32).toString(16).toUpperCase() + ': ');for (j = i; j < i + 96; j += 16) w(String.fromCharCode(j) + ' ');w('\n')}})(x => process.stdout.write(x));

/* Outputs
   2 3 4 5 6 7
--------------
0:   0 @ P ` p 
1: ! 1 A Q a q 
2: " 2 B R b r 
3: # 3 C S c s 
4: $ 4 D T d t 
5: % 5 E U e u 
6: & 6 F V f v 
7: ' 7 G W g w 
8: ( 8 H X h x 
9: ) 9 I Y i y 
A: * : J Z j z 
B: + ; K [ k { 
C: , < L \ l | 
D: - = M ] m } 
E: . > N ^ n ~ 
F: / ? O _ o 
*/