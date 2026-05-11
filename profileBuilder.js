// profileBuilder.js

const developers = [
  {
    id: 1,
    name: "Amara Johnson",
    track: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    projects: { completed: 8, ongoing: 2 },
    isAvailable: true,
    mentor: { name: "Sarah Chen", specialty: "React" }
  },
  {
    id: 2,
    name: "Chidi Okafor",
    track: "Backend",
    skills: ["Python", "Django", "SQL"],
    projects: { completed: 5, ongoing: 3 },
    isAvailable: false,
    mentor: { name: "James Udo", specialty: "System Design" }
  },
  {
    id: 3,
    name: "Fatima Hassan",
    track: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Vue", "TypeScript"],
    projects: { completed: 10, ongoing: 1 },
    isAvailable: true,
    mentor: null
  },
  {
    id: 4,
    name: "Emeka Nwosu",
    track: "Mobile",
    skills: ["Dart", "Flutter"],
    projects: { completed: 3, ongoing: 1 },
    isAvailable: true,
    mentor: { name: "Femi Adeyemi", specialty: "Mobile Architecture" }
  },
  {
    id: 5,
    name: "Zara Ahmed",
    track: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
    projects: { completed: 7, ongoing: 2 },
    isAvailable: true,
    mentor: null
  },
  {
    id: 6,
    name: "Grace Eze",
    track: "Frontend",
    skills: [],
    projects: { completed: 0, ongoing: 0 },
    isAvailable: false,
    mentor: { name: "Sarah Chen", specialty: "React" }
  }
];



//Profile Cards 
const buildProfileCard = ({ name, track, skills, projects, isAvailable, mentor }) => {
  const availability = isAvailable ? "Available" : "Not Available";
  const mentorName = mentor?.name ?? "No mentor assigned";
  const skillsDisplay = skills.length === 0 ? "No skills listed yet" : skills.join(", ");
  
  return `Name: ${name}
   Track: ${track}
   Skills: ${skillsDisplay}
   Projects: ${projects.completed} completed, ${projects.ongoing} ongoing
   Availability: ${availability}
   Mentor: ${mentorName}`;
};

console.log(`Profile Cards`);
developers.map(dev => console.log(buildProfileCard(dev) + `

`));



//Unique Skills Pool
const allSkills = developers.flatMap(dev => dev.skills);
const uniqueSkills = [...new Set(allSkills)].sort();

console.log(`

Unique Skills Pool`);
console.log(`Total unique skills (${uniqueSkills.length}): ${uniqueSkills.join(", ")}`);



//Track Summary 
const tracks = [...new Set(developers.map(dev => dev.track))];

const trackSummary = tracks.map(track => {
  const trackDevs = developers.filter(dev => dev.track === track);
  const devCount = trackDevs.length;
  const availableCount = trackDevs.filter(dev => dev.isAvailable).length;
  const totalCompleted = trackDevs.reduce((sum, dev) => sum + dev.projects.completed, 0);
  
  return `${track} Track: ${devCount} developers, ${availableCount} available, ${totalCompleted} total completed projects`;
});

console.log(`

Track Summary`);
trackSummary.forEach(summary => console.log(summary));



//Add a New Developer
const addDeveloper = (devArray, newDeveloper) => [...devArray, newDeveloper];

const newDev = {
  id: 7,
  name: "Oluwaseun Adebayo",
  track: "DevOps",
  skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
  projects: { completed: 4, ongoing: 2 },
  isAvailable: true,
  mentor: { name: "Chukwudi Eze", specialty: "Cloud Infrastructure" }
};

console.log(`

Add a New Developer`);
console.log(`Original array length: ${developers.length}`);
const newDevArray = addDeveloper(developers, newDev);
console.log(`New array length: ${newDevArray.length} (original unchanged: ${developers.length})`);
console.log(`Added developer: ${newDev.name}`);



//Update a Developer 
const updateDeveloper = (devArray, id, updates) =>
  devArray.map(dev => dev.id === id ? { ...dev, ...updates } : dev);

const updatedDevelopers = updateDeveloper(developers, 4, {
  skills: ["Dart", "Flutter", "Firebase", "Riverpod"],
  isAvailable: false
});

console.log(`

Update a Developer`);
console.log(`Original Emeka:`, developers.find(d => d.id === 4));
console.log(`Updated Emeka:`, updatedDevelopers.find(d => d.id === 4));



//Mentor Workload
const mentorWorkload = developers.reduce((acc, dev) => {
  const mentorName = dev.mentor?.name ?? "Unassigned";
  acc[mentorName] = (acc[mentorName] || 0) + 1;
  return acc;
}, {});

console.log(`

Mentor Workload`);
Object.entries(mentorWorkload).forEach(([mentor, count]) => {
  console.log(`${mentor}: ${count} ${count === 1 ? "mentee" : "mentees"}`);
});



//Experience Ranking
const sortedByProjects = [...developers].sort((a, b) => {
  const { projects: projectsA } = a;
  const { projects: projectsB } = b;
  const totalA = projectsA.completed + projectsA.ongoing;
  const totalB = projectsB.completed + projectsB.ongoing;
  return totalB - totalA;
});

console.log(`

Experience Ranking`);
sortedByProjects.map((dev, index) => {
  const total = dev.projects.completed + dev.projects.ongoing;
  const medal = index === 0 ? "🥇 " : index === 1 ? "🥈 " : index === 2 ? "🥉 " : "   ";
  
  console.log(`${medal}#${index + 1} ${dev.name} - ${total} total projects (${dev.projects.completed} completed, ${dev.projects.ongoing} ongoing)`);
});