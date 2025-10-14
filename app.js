// Simple client-side "backend" using localStorage — for demo/prototype only

function getAllUsers(){
  return JSON.parse(localStorage.getItem('tt_users')||'[]');
}
function saveAllUsers(list){
  localStorage.setItem('tt_users', JSON.stringify(list));
}
function getUserByEmail(email){
  const all = getAllUsers();
  return all.find(u=>u.email===email);
}
function saveUser(user){
  const all = getAllUsers();
  const idx = all.findIndex(u=>u.email===user.email);
  if (idx >= 0) all[idx] = user;
  else all.push(user);
  saveAllUsers(all);
  // update current user if same
  const curr = getCurrentUser();
  if (curr && curr.email === user.email) localStorage.setItem('tt_current', JSON.stringify(user));
}
function createUser(u){
  if (getUserByEmail(u.email)) return false;
  // minimal validation
  saveUser(u);
  localStorage.setItem('tt_current', JSON.stringify(u));
  return true;
}
function signInUser(email, password, role){
  const u = getUserByEmail(email);
  if (!u) return false;
  if (u.password !== password) return false;
  if (u.role !== role) return false;
  localStorage.setItem('tt_current', JSON.stringify(u));
  return true;
}
function getCurrentUser(){ return JSON.parse(localStorage.getItem('tt_current')||'null'); }
function signOut(){ localStorage.removeItem('tt_current'); }
function escapeHtml(s){ if(!s) return ''; return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

// create a sample user if none exist to test quickly


// (function seed(){
//   const all = getAllUsers();
//   if (all.length === 0){
//     const demoPlayer = {
//       name:'Raju Kumar',
//       email:'raju@example.com',
//       password:'player123',
//       role:'player',
//       sport:'Football',
//       age:15,
//       location:'Bihar, Siwan',
//       profile:{bio:'Hardworking striker'},
//       videos:[],
//       achievements:[{title:'District Champion', year:2023, notes:'Top scorer'}]
//     };
//     const demoScout = {
//       name:'Blue Academy',
//       email:'academy@example.com',
//       password:'scout123',
//       role:'scout',
//       profile:{bio:'Regional academy'},
//       achievements:[],
//       videos:[]
//     };
//     saveUser(demoPlayer);
//     saveUser(demoScout);
//   }
// })();



// (REPLACE the existing seed function in app.js with this entire block)

(function seed() {
  const all = getAllUsers();
  if (all.length > 0) return; // Don't re-seed if data exists

  const demoData = [
    // --- Players (5) ---
    {
      name: 'Priya Sharma',
      email: 'priya@example.com',
      password: 'player123',
      role: 'player',
      sport: 'Cricket',
      age: 17,
      location: 'Ranchi, Jharkhand',
      profile: { bio: 'Right-arm fast bowler with a passion for the game.' },
      videos: [],
      achievements: [{ title: 'State U-19 Finalist', year: 2024, notes: 'Took 5 wickets in the semi-final.' }]
    },
    {
      name: 'Sameer Khan',
      email: 'sameer@example.com',
      password: 'player123',
      role: 'player',
      sport: 'Kabaddi',
      age: 18,
      location: 'Rohtak, Haryana',
      profile: { bio: 'Agile and powerful raider. Team captain for local club.' },
      videos: [],
      achievements: [{ title: 'District Tournament Winner', year: 2024, notes: 'Awarded Best Raider of the tournament.' }]
    },
    {
      name: 'Aisha Begum',
      email: 'aisha@example.com',
      password: 'player123',
      role: 'player',
      sport: 'Athletics (Running)',
      age: 16,
      location: 'Pune, Maharashtra',
      profile: { bio: 'Specializes in 400m and 800m sprints. Very disciplined.' },
      videos: [],
      achievements: [{ title: 'Zonal Meet Gold Medal', year: 2025, notes: 'Set a new personal best time in the 400m.' }]
    },
    {
      name: 'Vikram Singh',
      email: 'vikram@example.com',
      password: 'player123',
      role: 'player',
      sport: 'Wrestling',
      age: 19,
      location: 'Sonipat, Haryana',
      profile: { bio: 'Freestyle wrestler with a strong defensive technique.' },
      videos: [],
      achievements: [{ title: 'National Junior Championship - Bronze', year: 2024, notes: 'Competed in the 74kg category.' }]
    },
    {
      name: 'Meena Kumari',
      email: 'meena@example.com',
      password: 'player123',
      role: 'player',
      sport: 'Archery',
      age: 15,
      location: 'Sundargarh, Odisha',
      profile: { bio: 'Focused archer with a steady hand. Training since age 12.' },
      videos: [],
      achievements: [{ title: 'Tribal Sports Meet Winner', year: 2025, notes: 'Scored highest points in the final round.' }]
    },

    // --- Scouts (5) ---
    {
      name: 'Rajesh Verma',
      email: 'rajesh@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Independent scout focusing on football talent in West Bengal and the North-East.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Sunita Devi',
      email: 'sunita@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Talent spotter for athletics, representing a national sports federation.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Amit Patel',
      email: 'amit@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Cricket scout with 15 years of experience in identifying young batsmen.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Kiran Bedi',
      email: 'kiran@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Scout specializing in women\'s field hockey across Punjab and Haryana.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Arjun Das',
      email: 'arjun@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Freelance talent scout for combat sports like Wrestling and Boxing.' },
      videos: [],
      achievements: []
    },

    // --- Academies (5) ---
    {
      name: 'Future Stars Cricket Academy',
      email: 'futurestars@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Leading cricket academy based in Pune, providing professional coaching and facilities.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Punjab Warriors Wrestling Akhada',
      email: 'punjabwarriors@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Traditional wrestling school (Akhada) in rural Punjab, nurturing future champions.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Kalinga Archery Centre',
      email: 'kalinga@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'A non-profit Archery training center in Odisha focused on identifying and training tribal talent.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Bengal Football Foundation',
      email: 'bff@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'An NGO and academy dedicated to promoting football at the grassroots level in West Bengal.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Maratha Kabaddi Club',
      email: 'maratha@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Professional Kabaddi club with a strong youth development program in Maharashtra.' },
      videos: [],
      achievements: []
    },

    // --- Coaches (5) ---
    {
      name: 'Prakash Rao (Kabaddi Coach)',
      email: 'prakash@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Former national level Kabaddi player with 10+ years of coaching experience. Specializes in raid techniques.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Deepali Singh (Athletics Coach)',
      email: 'deepali@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Certified athletics coach from NIS Patiala. Focuses on sprint and endurance training for young athletes.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Iqbal Khan (Cricket Coach)',
      email: 'iqbal@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Level B certified cricket coach. Expert in developing batting technique and mindset.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Gurmeet Kaur (Wrestling Coach)',
      email: 'gurmeet@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Head coach at a local akhada, known for training female wrestlers and promoting women in sports.' },
      videos: [],
      achievements: []
    },
    {
      name: 'Soren Murmu (Archery Coach)',
      email: 'soren@example.com',
      password: 'scout123',
      role: 'scout',
      profile: { bio: 'Experienced archery coach from Jharkhand, blending traditional techniques with modern equipment.' },
      videos: [],
      achievements: []
    }
  ];

  // Save all demo users to localStorage
  demoData.forEach(user => {
    const allUsers = getAllUsers();
    const idx = allUsers.findIndex(u => u.email === user.email);
    if (idx === -1) { // Only add if user doesn't exist
      allUsers.push(user);
      saveAllUsers(allUsers);
    }
  });

  console.log(`${demoData.length} demo users have been seeded into localStorage.`);
})();

