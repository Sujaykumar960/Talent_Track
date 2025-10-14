# 🏅 Player Profile & Timeline Webpage (TalentTrack Prototype)

A modern, responsive **Player Profile and Timeline Page** built using **HTML, CSS, and JavaScript**, inspired by LinkedIn-style sports profiles.  
This project is part of the **TalentTrack platform**, designed to showcase players, coaches, and academies from rural and urban regions in an elegant digital profile format.

---

## 🚀 Project Overview

This webpage displays a **player’s personal details, sports statistics, and activity timeline**, including:
- A **commitment post** (when a player joins a team or academy)
- A **media/video post** (sample game footage)
- Tabs for *Timeline*, *About*, *Athletics*, and *References*

It serves as a **dummy frontend page** for testing player profile layouts in the upcoming **TalentTrack** web application.

---

## ✨ Features

- 🎯 Clean UI for player profiles and updates  
- 🏆 Separate **tabs** for different profile sections (Timeline, About, Athletics, References)  
- 🎥 Embedded **video or image post previews**  
- 💬 Timeline posts for commitments or game updates  
- 📱 Fully responsive and mobile-friendly  
- 💡 Easily customizable for other roles (scouts, coaches, academies)

---

## 🧩 Tech Stack

| Component | Technology |
|------------|-------------|
| Frontend  | HTML5, CSS3, JavaScript (Vanilla) |
| Icons/Graphics | Unicode Emojis + Unsplash Images |
| Structure | Single-page responsive layout |

---

## 🗂️ File Structure

📁 talenttrack-profile
<br>
│
<br>
├── index.html # Main webpage (Profile + Timeline UI)
<br>
├── styles.css # (Optional) External CSS file for better structure
<br>
├── particles.json # (Optional) Background animation config (if used)
<br>
└── README.md # Project documentation


---

## ⚙️ How to Run

1. **Clone the repository** or copy the files manually:
   ```bash
   git clone https://github.com/Sujaykumar960/talenttrack-profile.git
   cd talenttrack-profile

2. Open the webpage
   Simply open index.html in any web browser (no setup required).

3. (Optional) To test with live server:
    Install VS Code Live Server extension
    Right-click index.html → “Open with Live Server”



🧠 How It Works

Each tab (Timeline, About, Athletics, References) is connected to JavaScript logic that toggles its visibility.

Dummy data is displayed for:
    Player: Rahul Sharma
    Team/Academy: Delhi Sports Academy
    Posts: Commitment announcement + game footage preview

Layout automatically adjusts to all screen sizes.


| Section         | How to Edit                                                            |
| --------------- | ---------------------------------------------------------------------- |
| Player Name     | In `index.html`, search for `Rahul Sharma`                             |
| Profile Picture | Replace `background: url(...)` in `.profile-pic` class                 |
| College/Academy | Replace inside the `.college-info` div                                 |
| Game Image      | Replace `img` link inside `.video-post`                                |
| Tabs Content    | Modify sections under `<div id="about">`, `<div id="athletics">`, etc. |


🧑‍💻 Future Improvements

Add backend integration for real player data
Upload & stream video footage directly
Integrate Google Maps API to show nearby academies
Add authentication (login/signup) for players and scouts
Enable comments or endorsements for references


🧾 License

This project is licensed under the MIT License — feel free to use, modify, and distribute with attribution.


👨‍💻 Author

Sujay Kumar
🎓 B.Tech CSE (Data Science) Student
💡 Passionate about Hackathons, Sports-Tech, and Building Scouting Platforms
📬 For collaboration ideas, reach out anytime!


🌐 Example Preview

⚡ “Empowering grassroots athletes with digital visibility — one profile at a time.”

---

Would you like me to modify this README to include your **Google Maps (Academy Finder)** feature section too — so it looks like part of the same project documentation?
