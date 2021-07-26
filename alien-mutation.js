// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Step 3:
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum : specimenNum,
      dna : dna,
      mutate() {
        //get random element of the 15 base dna
        let randomNumber = Math.floor(Math.random() * 15);
        // test:
        /*
        console.log(randomNumber);
        console.log(dna[randomNumber]);
        */
  
        //mutated Speciment
        let mutatedSpeciment = [];
  
        // block to get all dna bases but the original from the array
        // return dna bases for mutation
        const returnMutatedBase = () => {
          const bases = ['A', 'T', 'C', 'G']
          const toMutate = bases.filter(base => base !== dna[randomNumber]);
          return toMutate[Math.floor(Math.random() * 3)]
          }
          //console.log("reggel: ", returnMutatedBase(), randomNumber)
  
        // random dna 
        //let mutatedBase = returnRandBase();
  
        for(let i = 0; i < dna.length; i++) {
          if(i !== randomNumber) {
            mutatedSpeciment.push(dna[i])
            }
          else {
            mutatedSpeciment.push(returnMutatedBase());
            }
        } //console.log(mutatedSpeciment);
        return mutatedSpeciment;
      },
      // compares the equality of two dna sequence
      compareDNA(pAequor) {
        let commonElement = 0;
        let commonBase = [];
        for(let i = 0; i < dna.length; i++) {
          if(this.dna[i] === pAequor.dna[i]){
            commonElement += 1;
            commonBase.push(this.dna[i]);
          }
        } 
        // test:
        /* Print the specimen #1 dna and specimen #2 dna + all common base in an array. 
        console.log(this.dna);
        console.log(pAequor.dna);
        console.log(commonBase)
        */
        console.log(`Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${commonElement/15*100}% DNA in common.`)
      },
      willLikelySurvive() {
        let countBase = 0;
        for(let i = 0; i < this.dna.length; i++) {
          if(this.dna[i] === 'C' || this.dna[i] === 'G') {
            countBase += 1; 
          }
        } let baseCG = countBase/15*100;
        console.log(baseCG);
        if (baseCG >= 60){
          return true;
        } else {return false;}
      },
      // Step 9:
      // returns the complementary DNA strand.
      complementStrand() {
        strand1 = this.dna;
        console.log("strand1: ", strand1);
        // function to match the base
        // 'A' match with 'T' and 'C' match with 'G' and vica versa.
        const strand2 = [];
        for(let i = 0; i < strand1.length; i++) {
          if(strand1[i] === 'A') {
            strand2.push('T');
            } else if(strand1[i] === 'T') {
            strand2.push('A');
            } else if(strand1[i] === 'C') {
            strand2.push('G');
            } else {strand2.push('C')}
        }
        console.log("strand2:", strand2); 
      }
    }
  }
  
  
  // TEST:
  
  // Step 3:
  console.log("\nStep 3:")
  const pAequor111 = pAequorFactory(111, mockUpStrand());
  console.log(pAequor111);
  
  // Step 4:
  console.log("\nStep 4:\nafter mutation: ");
  console.log(pAequor111.mutate());
  
  // Step 5:
  console.log("\nStep 5:");
  const pAequor113 = pAequorFactory(113, mockUpStrand());
  const pAequor114 = pAequorFactory(114, mockUpStrand());
  pAequor113.compareDNA(pAequor114);
  
  // Step 6: 
  console.log("\nStep 6:");
  const pAequor115 = pAequorFactory(115, mockUpStrand());
  console.log(pAequor115.willLikelySurvive());
  
  
  
  // Step 7:
  // this is a function to create a temp dna to survive.
  console.log("\nStep 7: ")
  let i = 0;
  const listpAequor30 = [];
  while(i < 999) {
    let tempPA = pAequorFactory(i, mockUpStrand());  
    //if survive!!!
    if(tempPA.willLikelySurvive()){
      listpAequor30.push(tempPA);
      if(listpAequor30.length === 30) {
        //console.log("break: ", listpAequor30.dna);
        break;
      }
    }
    i++;
  }
  console.log(listpAequor30[2].compareDNA(listpAequor30[29]))
  console.log(listpAequor30.length);
  
  // Step 9:
  console.log("\nStep 9:");
  const pAequor116 = pAequorFactory(116, mockUpStrand());
  pAequor116.complementStrand();
  