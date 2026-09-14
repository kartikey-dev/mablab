const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Kumar Kartikey\\.gemini\\antigravity-ide\\brain\\f5a40ea3-fbee-414a-bf12-a5fb599df434';
const publicDir = 'C:\\Users\\Kumar Kartikey\\.gemini\\antigravity-ide\\scratch\\mablab\\public\\images';

const teamImgSrc = path.join(brainDir, 'team_member_portrait_1789293293917.png');
const caseImgSrc = path.join(brainDir, 'case_study_illustration_1789293388486.png');
const ogImgSrc = path.join(brainDir, 'case_study_illustration_1789293388486.png');

// Ensure directories
fs.mkdirSync(path.join(publicDir, 'team'), { recursive: true });
fs.mkdirSync(path.join(publicDir, 'case-studies'), { recursive: true });

// Copy team images
const teamMembers = ['vivek', 'yogesh', 'sidhant', 'bhavik', 'raashi', 'saket', 'ritika', 'kumar'];
teamMembers.forEach((name) => {
  fs.copyFileSync(teamImgSrc, path.join(publicDir, 'team', `${name}.webp`));
});

// Copy avatars
['avatar1.webp', 'avatar2.webp', 'avatar3.webp'].forEach((av) => {
  fs.copyFileSync(teamImgSrc, path.join(publicDir, av));
});

// Copy case studies
const caseStudies = ['personal-brand.webp', 'smb-awareness.webp', 'd2c-launch.webp'];
caseStudies.forEach((cs) => {
  fs.copyFileSync(caseImgSrc, path.join(publicDir, 'case-studies', cs));
});

// Copy OG image
fs.copyFileSync(ogImgSrc, path.join(publicDir, 'og-image.png'));

console.log('Successfully copied all image assets to public/images!');
