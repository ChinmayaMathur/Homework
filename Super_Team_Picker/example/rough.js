const team = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x']


function assignTeam(numteam) {
      let result = [];

      for (let j = 0; j < numteam; j++) {
        result.push([])
      }

      const randomizedMembers = team.sort(() => Math.random() - 0.5);
      let currentTeam = 0;
      while (randomizedMembers.length) {
        const selectedMember = randomizedMembers.pop();
        result[currentTeam].push(selectedMember);
        if (currentTeam < numteam - 1) {
          currentTeam ++;
        } else {
          currentTeam = 0;
        }
      }
      console.log(result)
    }
    
assignTeam(4)
     

function assignNumMembers(num) {
  const numTeams = Math.ceil(team.length / num);
  const result = [];
    for (let i = 0; i < numTeams; i++) {
    result.push([]);
  };
  const randomizedMembers = team.sort(() => Math.random() - 0.5);
  let currentTeam = 0;
  while (randomizedMembers.length) {
    const selectedMember = randomizedMembers.pop();
    result[currentTeam].push(selectedMember);
    if (currentTeam < numTeams - 1) {
      currentTeam ++;
    } else {
      currentTeam = 0;
    }
  }
  console.log(result)
}

assignNumMembers(3)