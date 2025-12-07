'use client';

import { useState } from 'react';

const scenes = [
  {
    id: 1,
    text: 'राजस्थान की तपती धरती पर रहने वाली एक दादी को हमेशा से ठंड पसंद थी। एक दिन दादी ने सोचा— "क्यों न मैं यहाँ गरमी में एक बर्फ़ का घर बना लूँ!"',
    svg: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Sky -->
        <rect width="800" height="400" fill="url(#sky1)"/>

        <!-- Hot sun -->
        <circle cx="700" cy="80" r="50" fill="#FFD700">
          <animate attributeName="r" values="50;55;50" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="700" cy="80" r="60" fill="#FFD700" opacity="0.3">
          <animate attributeName="r" values="60;70;60" dur="2s" repeatCount="indefinite"/>
        </circle>

        <!-- Ground -->
        <rect y="300" width="800" height="100" fill="#D2691E"/>

        <!-- Sand dunes -->
        <ellipse cx="200" cy="320" rx="150" ry="40" fill="#CD853F"/>
        <ellipse cx="500" cy="320" rx="180" ry="45" fill="#CD853F"/>

        <!-- Dadi (grandmother) -->
        <g transform="translate(350, 200)">
          <!-- Body -->
          <rect x="-20" y="30" width="40" height="60" rx="20" fill="#FF6B9D"/>
          <!-- Head -->
          <circle cx="0" cy="20" r="25" fill="#FFE4C4"/>
          <!-- Bindi -->
          <circle cx="0" cy="15" r="3" fill="#DC143C"/>
          <!-- Smile -->
          <path d="M -10,25 Q 0,30 10,25" stroke="#8B4513" stroke-width="2" fill="none"/>
          <!-- Saree -->
          <path d="M -30,50 L -20,30 L 20,30 L 30,50 Z" fill="#FF1493"/>
          <!-- Hair bun -->
          <circle cx="-15" cy="5" r="8" fill="#2F4F4F"/>
          <!-- Dupatta -->
          <path d="M -25,35 Q -30,50 -25,65" stroke="#FF69B4" stroke-width="8" fill="none"/>
        </g>

        <!-- Thought bubble -->
        <g transform="translate(450, 180)">
          <ellipse cx="0" cy="0" rx="80" ry="50" fill="white" stroke="#888" stroke-width="2"/>
          <circle cx="-50" cy="30" r="8" fill="white" stroke="#888" stroke-width="2"/>
          <circle cx="-60" cy="40" r="5" fill="white" stroke="#888" stroke-width="2"/>
          <!-- Ice house in thought -->
          <g transform="scale(0.5)">
            <path d="M -40,20 L 0,-20 L 40,20 L 40,40 L -40,40 Z" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
            <rect x="-10" y="10" width="20" height="30" fill="#4682B4"/>
          </g>
        </g>

        <!-- Heat waves -->
        <path d="M 50,280 Q 70,270 90,280" stroke="#FF6347" stroke-width="2" fill="none" opacity="0.4">
          <animate attributeName="d" values="M 50,280 Q 70,270 90,280; M 50,280 Q 70,290 90,280; M 50,280 Q 70,270 90,280" dur="1.5s" repeatCount="indefinite"/>
        </path>
        <path d="M 650,280 Q 670,270 690,280" stroke="#FF6347" stroke-width="2" fill="none" opacity="0.4">
          <animate attributeName="d" values="M 650,280 Q 670,270 690,280; M 650,280 Q 670,290 690,280; M 650,280 Q 670,270 690,280" dur="1.5s" repeatCount="indefinite"/>
        </path>
      </svg>
    `
  },
  {
    id: 2,
    text: 'दादी मैदान में पहुँची और ठंडी–ठंडी जादुई बर्फ़ इकट्ठा करने लगी। लेकिन बर्फ़ उठाते-उठाते उनका हाथ थक गया।',
    svg: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Sky -->
        <rect width="800" height="400" fill="url(#sky1)"/>
        <defs>
          <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Sun -->
        <circle cx="700" cy="80" r="45" fill="#FFD700"/>

        <!-- Ground -->
        <rect y="300" width="800" height="100" fill="#D2691E"/>

        <!-- Dadi collecting ice -->
        <g transform="translate(300, 220)">
          <!-- Body bent down -->
          <ellipse cx="0" cy="30" rx="30" ry="20" fill="#FF6B9D"/>
          <rect x="-25" y="20" width="50" height="40" rx="15" fill="#FF6B9D"/>
          <!-- Head -->
          <circle cx="-10" cy="5" r="22" fill="#FFE4C4"/>
          <!-- Bindi -->
          <circle cx="-10" cy="0" r="3" fill="#DC143C"/>
          <!-- Arm reaching -->
          <line x1="20" y1="25" x2="60" y2="40" stroke="#FFE4C4" stroke-width="8"/>
          <!-- Hand -->
          <circle cx="60" cy="40" r="6" fill="#FFE4C4"/>
          <!-- Saree -->
          <path d="M -30,35 L -25,20 L 25,20 L 30,35 Z" fill="#FF1493"/>
        </g>

        <!-- Magical ice blocks -->
        <g transform="translate(360, 260)">
          <rect x="0" y="0" width="30" height="30" fill="#B0E0E6" stroke="#4682B4" stroke-width="2" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite"/>
          </rect>
          <circle cx="15" cy="15" r="3" fill="white"/>
        </g>

        <g transform="translate(400, 265)">
          <rect x="0" y="0" width="25" height="25" fill="#B0E0E6" stroke="#4682B4" stroke-width="2" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.2s" repeatCount="indefinite"/>
          </rect>
          <circle cx="12" cy="12" r="2" fill="white"/>
        </g>

        <g transform="translate(330, 270)">
          <rect x="0" y="0" width="28" height="28" fill="#B0E0E6" stroke="#4682B4" stroke-width="2" opacity="0.9">
            <animate attributeName="opacity" values="0.9;1;0.9" dur="0.8s" repeatCount="indefinite"/>
          </rect>
          <circle cx="14" cy="14" r="2.5" fill="white"/>
        </g>

        <!-- Sparkles -->
        <g opacity="0.6">
          <circle cx="380" cy="240" r="2" fill="white">
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="350" cy="250" r="2" fill="white">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="410" cy="245" r="2" fill="white">
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
          </circle>
        </g>

        <!-- Basket -->
        <g transform="translate(200, 250)">
          <ellipse cx="0" cy="30" rx="35" ry="10" fill="#8B4513"/>
          <path d="M -35,30 L -30,0 L 30,0 L 35,30" fill="#A0522D" stroke="#8B4513" stroke-width="2"/>
          <path d="M -30,0 Q 0,-15 30,0" stroke="#8B4513" stroke-width="3" fill="none"/>
          <!-- Ice in basket -->
          <rect x="-20" y="10" width="40" height="20" fill="#B0E0E6" opacity="0.7"/>
        </g>

        <!-- Sweat drops (tired) -->
        <ellipse cx="310" cy="215" rx="3" ry="5" fill="#4169E1">
          <animate attributeName="cy" values="215;225;215" dur="2s" repeatCount="indefinite"/>
        </ellipse>
      </svg>
    `
  },
  {
    id: 3,
    text: 'तभी पेड़ पर बैठा एक शरारती बंदर उछलकर नीचे आया और बोला— "दादी, मैं मदद करूँ?" दादी हँसकर बोलीं— "क्यों नहीं बेटा, आज हम दोनों मिलकर राजस्थान में बर्फ़ का महल बनाएँगे!"',
    svg: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Sky -->
        <rect width="800" height="400" fill="url(#sky1)"/>
        <defs>
          <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Sun -->
        <circle cx="700" cy="80" r="45" fill="#FFD700"/>

        <!-- Ground -->
        <rect y="300" width="800" height="100" fill="#D2691E"/>

        <!-- Tree -->
        <rect x="100" y="150" width="30" height="150" fill="#8B4513"/>
        <circle cx="115" cy="120" r="50" fill="#228B22"/>
        <circle cx="90" cy="140" r="35" fill="#228B22"/>
        <circle cx="140" cy="135" r="40" fill="#228B22"/>

        <!-- Monkey jumping down -->
        <g transform="translate(180, 200)">
          <animateTransform attributeName="transform" type="translate" values="180,80; 180,200" dur="1.5s" repeatCount="1"/>
          <!-- Body -->
          <ellipse cx="0" cy="15" rx="20" ry="25" fill="#8B4513"/>
          <!-- Head -->
          <circle cx="0" cy="-10" r="18" fill="#A0522D"/>
          <!-- Face -->
          <ellipse cx="0" cy="-5" rx="12" ry="10" fill="#D2B48C"/>
          <!-- Eyes -->
          <circle cx="-5" cy="-8" r="3" fill="black"/>
          <circle cx="5" cy="-8" r="3" fill="black"/>
          <!-- Smile -->
          <path d="M -6,-2 Q 0,2 6,-2" stroke="black" stroke-width="1.5" fill="none"/>
          <!-- Arms -->
          <line x1="-18" y1="10" x2="-30" y2="5" stroke="#8B4513" stroke-width="6"/>
          <line x1="18" y1="10" x2="30" y2="15" stroke="#8B4513" stroke-width="6"/>
          <!-- Legs -->
          <line x1="-10" y1="35" x2="-15" y2="50" stroke="#8B4513" stroke-width="7"/>
          <line x1="10" y1="35" x2="15" y2="50" stroke="#8B4513" stroke-width="7"/>
          <!-- Tail -->
          <path d="M 15,20 Q 35,10 45,25" stroke="#8B4513" stroke-width="5" fill="none"/>
        </g>

        <!-- Dadi standing -->
        <g transform="translate(350, 210)">
          <!-- Body -->
          <rect x="-20" y="20" width="40" height="60" rx="20" fill="#FF6B9D"/>
          <!-- Head -->
          <circle cx="0" cy="10" r="22" fill="#FFE4C4"/>
          <!-- Bindi -->
          <circle cx="0" cy="5" r="3" fill="#DC143C"/>
          <!-- Happy smile -->
          <path d="M -10,15 Q 0,22 10,15" stroke="#8B4513" stroke-width="2" fill="none"/>
          <!-- Eyes -->
          <circle cx="-6" cy="8" r="2" fill="black"/>
          <circle cx="6" cy="8" r="2" fill="black"/>
          <!-- Saree -->
          <path d="M -30,40 L -20,20 L 20,20 L 30,40 Z" fill="#FF1493"/>
          <!-- Arms -->
          <line x1="-20" y1="35" x2="-35" y2="45" stroke="#FFE4C4" stroke-width="7"/>
          <line x1="20" y1="35" x2="35" y2="30" stroke="#FFE4C4" stroke-width="7"/>
        </g>

        <!-- Speech bubble from monkey -->
        <g transform="translate(220, 180)">
          <rect x="0" y="0" width="100" height="40" rx="10" fill="white" stroke="#888" stroke-width="2"/>
          <text x="50" y="25" text-anchor="middle" font-size="14" fill="black">मदद करूँ?</text>
          <polygon points="15,40 20,50 25,40" fill="white" stroke="#888" stroke-width="2"/>
        </g>

        <!-- Ice blocks on ground -->
        <rect x="450" y="270" width="30" height="30" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
        <rect x="490" y="275" width="25" height="25" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
      </svg>
    `
  },
  {
    id: 4,
    text: 'दोनों ने मिलकर गोल–गोल बर्फ़ के ब्लॉक बनाए, उन्हें जोड़कर एक सुंदर सफेद घर तैयार किया। दादी ने दरवाज़े पर एक छोटी रंगोली भी बना दी—बर्फ़ की बनी हुई!',
    svg: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Sky -->
        <rect width="800" height="400" fill="url(#sky1)"/>
        <defs>
          <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Sun -->
        <circle cx="150" cy="80" r="45" fill="#FFD700"/>

        <!-- Ground -->
        <rect y="300" width="800" height="100" fill="#D2691E"/>

        <!-- Ice house being built -->
        <g transform="translate(400, 180)">
          <!-- Base -->
          <rect x="-80" y="80" width="160" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-75" y="60" width="150" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-70" y="40" width="140" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-65" y="20" width="130" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <!-- Roof -->
          <path d="M -70,20 L 0,-20 L 70,20 Z" fill="#E0F6FF" stroke="#4682B4" stroke-width="2"/>
          <!-- Door -->
          <rect x="-15" y="50" width="30" height="50" rx="15" fill="#4682B4"/>
          <!-- Window -->
          <rect x="30" y="50" width="25" height="25" rx="3" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>
          <line x1="42.5" y1="50" x2="42.5" y2="75" stroke="#4682B4" stroke-width="2"/>
          <line x1="30" y1="62.5" x2="55" y2="62.5" stroke="#4682B4" stroke-width="2"/>
        </g>

        <!-- Rangoli in front of door -->
        <g transform="translate(400, 300)">
          <!-- Flower pattern -->
          <circle cx="0" cy="0" r="15" fill="none" stroke="#FF69B4" stroke-width="2"/>
          <circle cx="0" cy="0" r="8" fill="#FFD700"/>
          <circle cx="0" cy="-12" r="4" fill="#FF1493"/>
          <circle cx="12" cy="0" r="4" fill="#FF1493"/>
          <circle cx="0" cy="12" r="4" fill="#FF1493"/>
          <circle cx="-12" cy="0" r="4" fill="#FF1493"/>
          <circle cx="8" cy="-8" r="3" fill="#00CED1"/>
          <circle cx="8" cy="8" r="3" fill="#00CED1"/>
          <circle cx="-8" cy="8" r="3" fill="#00CED1"/>
          <circle cx="-8" cy="-8" r="3" fill="#00CED1"/>
        </g>

        <!-- Dadi on left -->
        <g transform="translate(280, 240)">
          <rect x="-18" y="20" width="36" height="55" rx="18" fill="#FF6B9D"/>
          <circle cx="0" cy="8" r="20" fill="#FFE4C4"/>
          <circle cx="0" cy="3" r="2.5" fill="#DC143C"/>
          <path d="M -8,12 Q 0,17 8,12" stroke="#8B4513" stroke-width="2" fill="none"/>
          <path d="M -28,38 L -18,20 L 18,20 L 28,38 Z" fill="#FF1493"/>
          <!-- Arms working -->
          <line x1="-18" y1="32" x2="-35" y2="40" stroke="#FFE4C4" stroke-width="7"/>
          <circle cx="-35" cy="40" r="5" fill="#FFE4C4"/>
        </g>

        <!-- Monkey on right -->
        <g transform="translate(520, 250)">
          <ellipse cx="0" cy="12" rx="18" ry="22" fill="#8B4513"/>
          <circle cx="0" cy="-8" r="16" fill="#A0522D"/>
          <ellipse cx="0" cy="-4" rx="10" ry="8" fill="#D2B48C"/>
          <circle cx="-4" cy="-7" r="2.5" fill="black"/>
          <circle cx="4" cy="-7" r="2.5" fill="black"/>
          <path d="M -5,-1 Q 0,2 5,-1" stroke="black" stroke-width="1.5" fill="none"/>
          <!-- Arms -->
          <line x1="16" y1="8" x2="30" y2="12" stroke="#8B4513" stroke-width="5"/>
          <circle cx="30" cy="12" r="4" fill="#8B4513"/>
          <!-- Tail up (happy) -->
          <path d="M 12,18 Q 28,5 35,20" stroke="#8B4513" stroke-width="4" fill="none"/>
        </g>

        <!-- Ice blocks nearby -->
        <rect x="200" y="280" width="25" height="25" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
        <rect x="580" y="285" width="28" height="28" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>

        <!-- Sparkles around house -->
        <circle cx="350" cy="150" r="2" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="480" cy="160" r="2" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="400" cy="120" r="2" fill="white" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="0.9s" repeatCount="indefinite"/>
        </circle>
      </svg>
    `
  },
  {
    id: 5,
    text: 'अंत में बंदर ने अपनी पूँछ से घर की छत साफ की और बोला— "दादी, ये घर तो पूरा राजसी लग रहा है!" दादी बोलीं— "तूने मदद की है न, इसलिए ये बर्फ़ का घर और भी खास बन गया।"',
    svg: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Sky -->
        <rect width="800" height="400" fill="url(#sky1)"/>
        <defs>
          <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFE4B5;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Sun -->
        <circle cx="150" cy="80" r="45" fill="#FFD700"/>

        <!-- Ground -->
        <rect y="300" width="800" height="100" fill="#D2691E"/>

        <!-- Complete ice house -->
        <g transform="translate(400, 180)">
          <!-- Base -->
          <rect x="-80" y="80" width="160" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-75" y="60" width="150" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-70" y="40" width="140" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-65" y="20" width="130" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <!-- Roof -->
          <path d="M -70,20 L 0,-20 L 70,20 Z" fill="#E0F6FF" stroke="#4682B4" stroke-width="2"/>
          <!-- Door -->
          <rect x="-15" y="50" width="30" height="50" rx="15" fill="#4682B4"/>
          <!-- Windows -->
          <rect x="30" y="50" width="25" height="25" rx="3" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>
          <line x1="42.5" y1="50" x2="42.5" y2="75" stroke="#4682B4" stroke-width="2"/>
          <line x1="30" y1="62.5" x2="55" y2="62.5" stroke="#4682B4" stroke-width="2"/>
          <rect x="-55" y="50" width="25" height="25" rx="3" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>
          <line x1="-42.5" y1="50" x2="-42.5" y2="75" stroke="#4682B4" stroke-width="2"/>
          <line x1="-55" y1="62.5" x2="-30" y2="62.5" stroke="#4682B4" stroke-width="2"/>

          <!-- Shine effect -->
          <circle cx="-40" cy="-5" r="3" fill="white" opacity="0.9">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="20" cy="5" r="3" fill="white" opacity="0.9">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite"/>
          </circle>
        </g>

        <!-- Monkey on roof -->
        <g transform="translate(420, 145)">
          <ellipse cx="0" cy="12" rx="16" ry="20" fill="#8B4513"/>
          <circle cx="0" cy="-6" r="14" fill="#A0522D"/>
          <ellipse cx="0" cy="-3" rx="9" ry="7" fill="#D2B48C"/>
          <circle cx="-3.5" cy="-6" r="2" fill="black"/>
          <circle cx="3.5" cy="-6" r="2" fill="black"/>
          <path d="M -4,0 Q 0,3 4,0" stroke="black" stroke-width="1.5" fill="none"/>
          <!-- Tail cleaning roof -->
          <path d="M 12,15 Q 30,-10 50,-5" stroke="#8B4513" stroke-width="4" fill="none">
            <animate attributeName="d" values="M 12,15 Q 30,-10 50,-5; M 12,15 Q 35,-8 55,-3; M 12,15 Q 30,-10 50,-5" dur="1.5s" repeatCount="indefinite"/>
          </path>
        </g>

        <!-- Dadi standing proudly -->
        <g transform="translate(300, 240)">
          <rect x="-18" y="20" width="36" height="55" rx="18" fill="#FF6B9D"/>
          <circle cx="0" cy="8" r="20" fill="#FFE4C4"/>
          <circle cx="0" cy="3" r="2.5" fill="#DC143C"/>
          <!-- Big smile -->
          <path d="M -9,12 Q 0,18 9,12" stroke="#8B4513" stroke-width="2" fill="none"/>
          <circle cx="-5" cy="7" r="2" fill="black"/>
          <circle cx="5" cy="7" r="2" fill="black"/>
          <path d="M -28,38 L -18,20 L 18,20 L 28,38 Z" fill="#FF1493"/>
          <!-- Arms in appreciation -->
          <line x1="-18" y1="32" x2="-30" y2="35" stroke="#FFE4C4" stroke-width="7"/>
          <line x1="18" y1="32" x2="30" y2="28" stroke="#FFE4C4" stroke-width="7"/>
        </g>

        <!-- Rangoli -->
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="15" fill="none" stroke="#FF69B4" stroke-width="2"/>
          <circle cx="0" cy="0" r="8" fill="#FFD700"/>
          <circle cx="0" cy="-12" r="4" fill="#FF1493"/>
          <circle cx="12" cy="0" r="4" fill="#FF1493"/>
          <circle cx="0" cy="12" r="4" fill="#FF1493"/>
          <circle cx="-12" cy="0" r="4" fill="#FF1493"/>
        </g>

        <!-- Heart particles -->
        <g opacity="0.7">
          <text x="350" y="200" font-size="20" fill="#FF69B4">❤</text>
          <text x="480" y="210" font-size="18" fill="#FF1493">✨</text>
          <text x="320" y="180" font-size="16" fill="#FFD700">⭐</text>
        </g>
      </svg>
    `
  },
  {
    id: 6,
    text: 'शाम होने तक दोनों उस ठंडे घर में बैठकर छाछ पीते हुए राजस्थान की गर्मी से बचते रहे।',
    svg: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sunset" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#FF7F50;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#FFB6C1;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFA07A;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Evening Sky -->
        <rect width="800" height="400" fill="url(#sunset)"/>

        <!-- Setting sun -->
        <circle cx="120" cy="250" r="60" fill="#FF6347" opacity="0.8"/>
        <circle cx="120" cy="250" r="70" fill="#FF6347" opacity="0.3"/>

        <!-- Ground -->
        <rect y="300" width="800" height="100" fill="#8B4513"/>

        <!-- Ice house -->
        <g transform="translate(400, 180)">
          <rect x="-80" y="80" width="160" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-75" y="60" width="150" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-70" y="40" width="140" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <rect x="-65" y="20" width="130" height="20" fill="#B0E0E6" stroke="#4682B4" stroke-width="2"/>
          <path d="M -70,20 L 0,-20 L 70,20 Z" fill="#E0F6FF" stroke="#4682B4" stroke-width="2"/>
          <rect x="-15" y="50" width="30" height="50" rx="15" fill="#4682B4"/>
          <rect x="30" y="50" width="25" height="25" rx="3" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>
          <rect x="-55" y="50" width="25" height="25" rx="3" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>

          <!-- Glow effect -->
          <circle cx="0" cy="30" r="100" fill="#B0E0E6" opacity="0.1"/>
        </g>

        <!-- Dadi and Monkey sitting inside (visible through door) -->
        <g transform="translate(380, 250)">
          <!-- Dadi sitting -->
          <ellipse cx="0" cy="15" rx="18" ry="12" fill="#FF6B9D"/>
          <circle cx="0" cy="0" r="15" fill="#FFE4C4"/>
          <circle cx="0" cy="-3" r="2" fill="#DC143C"/>
          <!-- Glass of chaach -->
          <rect x="-8" y="8" width="8" height="12" rx="2" fill="#F5F5DC" stroke="#888" stroke-width="1"/>
        </g>

        <g transform="translate(420, 255)">
          <!-- Monkey sitting -->
          <ellipse cx="0" cy="12" rx="15" ry="10" fill="#8B4513"/>
          <circle cx="0" cy="0" r="12" fill="#A0522D"/>
          <ellipse cx="0" cy="2" rx="8" ry="6" fill="#D2B48C"/>
          <!-- Glass of chaach -->
          <rect x="3" y="8" width="7" height="11" rx="2" fill="#F5F5DC" stroke="#888" stroke-width="1"/>
          <!-- Tail wrapped around -->
          <path d="M 10,10 Q 20,5 22,15" stroke="#8B4513" stroke-width="3" fill="none"/>
        </g>

        <!-- Cool air effect coming from house -->
        <g opacity="0.4">
          <path d="M 420,230 Q 440,220 460,230" stroke="#B0E0E6" stroke-width="3" fill="none">
            <animate attributeName="d" values="M 420,230 Q 440,220 460,230; M 420,230 Q 440,235 460,230; M 420,230 Q 440,220 460,230" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M 420,245 Q 440,235 460,245" stroke="#B0E0E6" stroke-width="3" fill="none">
            <animate attributeName="d" values="M 420,245 Q 440,235 460,245; M 420,245 Q 440,250 460,245; M 420,245 Q 440,235 460,245" dur="2.3s" repeatCount="indefinite"/>
          </path>
        </g>

        <!-- Stars starting to appear -->
        <circle cx="650" cy="80" r="2" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="700" cy="120" r="2" fill="white" opacity="0.7">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="600" cy="100" r="2" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
        </circle>

        <!-- Rangoli still visible -->
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="#FF69B4" stroke-width="1.5" opacity="0.7"/>
          <circle cx="0" cy="0" r="6" fill="#FFD700" opacity="0.7"/>
        </g>

        <!-- "THE END" in Hindi -->
        <text x="400" y="380" text-anchor="middle" font-size="32" fill="white" font-weight="bold" opacity="0.8">समाप्त</text>
      </svg>
    `
  }
];

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const resetStory = () => {
    setCurrentScene(0);
    setIsAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Auto-play functionality
  if (isAutoPlay && currentScene < scenes.length - 1) {
    setTimeout(() => {
      setCurrentScene(currentScene + 1);
    }, 5000);
  } else if (isAutoPlay && currentScene === scenes.length - 1) {
    setIsAutoPlay(false);
  }

  return (
    <div className="container">
      <h1 className="story-title">
        राजस्थान में बर्फ़ का घर<br/>
        <span style={{fontSize: '1.5rem'}}>दादी और बंदर की कहानी</span>
      </h1>

      <div className="scene-container">
        <div className="scene">
          <div
            className="scene-illustration"
            dangerouslySetInnerHTML={{ __html: scenes[currentScene].svg }}
          />
          <p className="scene-text">{scenes[currentScene].text}</p>
        </div>
      </div>

      <div className="controls">
        <button
          className="btn btn-secondary"
          onClick={prevScene}
          disabled={currentScene === 0}
        >
          ← पिछला
        </button>

        <button
          className="btn btn-primary"
          onClick={toggleAutoPlay}
        >
          {isAutoPlay ? '⏸ रोकें' : '▶ ऑटो-प्ले'}
        </button>

        {currentScene === scenes.length - 1 ? (
          <button
            className="btn btn-secondary"
            onClick={resetStory}
          >
            🔄 फिर से शुरू करें
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            onClick={nextScene}
            disabled={currentScene === scenes.length - 1}
          >
            अगला →
          </button>
        )}
      </div>

      <div className="progress-indicator">
        {scenes.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentScene ? 'active' : ''}`}
            onClick={() => setCurrentScene(index)}
            style={{cursor: 'pointer'}}
          />
        ))}
      </div>
    </div>
  );
}
