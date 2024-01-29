const Constants = {
    Chats: [
      {
        id: 1,
        name: "Myself",
        datetime: "29/05/2003",
        text: "Azhar Bamne: Goddamn",
        members: ["Jagjit Singh Bhumra"],
        membersText: "Me (Jagjit Singh Bhumra)",
        img: '/person.svg',
        muted: true,
        messages: [
          {
            type: 'Dates',
            date: '28/12/2023'
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptate possimus temporibus nihil ipsam non minima? Aut ipsa autem odio, quas asperiores vel cum consequuntur neque dolores ea quis maxime!',
            read: true
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Some person has come',
            read: true
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Lessssgooo!',
            read: true
          },
          {
            type: 'Rec',
            time: '12:19',
            from: 'Praneel Bora',
            text: 'Okay',
            nameColor: '#53bdeb'
          },
          {
            type: 'Rec',
            time: '12:19',
            from: 'Praneel Bora',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolores itaque iusto velit fuga optio inventore veniam atque recusandae, iste, quas eius rerum porro officiis unde mollitia excepturi, saepe aliquid!',
            nameColor: '#53bdeb'
          },
          {
            type: 'Rec',
            time: '12:19',
            from: 'Dhruv Dedhia',
            text: 'Okay',
            nameColor: '#ffa500'
          },
        ]
      },
      {
        id: 2,
        name: "Education",
        datetime: "Ongoing",
        text: "Let's have a meet tomorrow at 11am, so that everyone can get acquainted with necessary knowledge.",
        members: ["KJ Somaiya College of Engineering", "TP Bhatia College of Science", "DG Khetan International School"],
        membersText: "KJ Somaiya, TP Bhatia, DG Khetan",
        img: '/school.svg',
        muted: true,
        messages: [
          {
            type: 'Dates',
            date: 'June 2019'
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Could you please list details about my <b>Primary Education</b> and any achievements during these years?',
            read: true
          },
          {
            type: 'Rec',
            time: '12:19',
            from: 'DG Khetan International School',
            text: ' • <u>Basic Details</u>:\n - Academic Years --> 2007-16\n - Studied here from Junior Kindergarten upto Class 7\n - Board: Cambridge IGCSE',
            nameColor: '#53bdeb'
          },
          {
            type: 'Rec',
            time: '12:19',
            from: 'DG Khetan International School',
            text: ' • <u>Achievements</u>:\n - MaRRS Spell Bee International Qualifier\n - Selected for educational TV show broadcast on national television\n - Consistent school-level and region-level Olympiad topper',
            nameColor: '#53bdeb'
          },
          {
            type: 'Sent',
            time: '12:20',
            text: 'Details about my <b>Secondary Education</b> as well as accomplishments?',
            read: true
          },
          {
            type: 'Rec',
            time: '12:20',
            from: 'DG Khetan International School',
            text: ' • <u>Basic Details</u>:\n - Academic Years --> 2016-19\n - Studied here (again) from Class 8 upto Class 10\n - Board: Cambridge IGCSE\n - Chosen stream in middle school : Science (with Business Studies & ICT)',
            nameColor: '#53bdeb'
          },
          {
            type: 'Rec',
            time: '12:20',
            from: 'DG Khetan International School',
            text: ' • <u>Achievements</u>:\n - Student Council Educational Head\n - Student of the Year in Class 9\n - Cambridge IGCSE Mathematics World Topper\n - Stood 2nd in the school in Class 10 (8 A*)',
            nameColor: '#53bdeb'
          },
          {
            type: 'Dates',
            date: 'June 2021'
          },
          {
            type: 'Sent',
            time: '12:21',
            text: 'Information about my <b>High School</b> years?',
            read: true
          },
          {
            type: 'Rec',
            time: '12:21',
            from: 'TP Bhatia College of Science',
            text: ' • <u>Basic Details</u>:\n - Academic Years --> 2019-21\n - High school studies completed here\n - Board: Maharashtra Board (HSC)\n - Chosen stream and elective : Engineering (Science) + Electrical Maintenance (Elective)',
            nameColor: '#53bdeb'
          },
          {
            type: 'Rec',
            time: '12:21',
            from: 'TP Bhatia College of Science',
            text: ' • <u>Achievements</u>:\n - 94.4%ile in JEE Mains\n - 98.14%ile in MHT-CET\n - College-wide Topper (11+12)',
            nameColor: '#53bdeb'
          },
          {
            type: 'Dates',
            date: 'Today'
          },
          {
            type: 'Sent',
            time: '12:21',
            text: 'How is my <b>Undergraduation</b> going?',
            read: true
          },
          {
            type: 'Rec',
            time: '12:21',
            from: 'KJ Somaiya College of Engineering',
            text: ' • <u>Basic Details</u>:\n - Academic Years --> 2021-25\n - Undergoing B.Tech course here\n - Chosen stream and honors course : Computer Engineering + Cybersecurity (Honors)',
            nameColor: '#53bdeb'
          },
          {
            type: 'Rec',
            time: '12:21',
            from: 'KJ Somaiya College of Engineering',
            text: ' • <u>Achievements</u>:\n - Consistent semester topper (9.92 CGPA avg)\n - Inter-collegiate Mathematics League winner in FY\n - TEDxSomaiya Tech Committee member since FY\n - Undertook multiple internship projects under University professors',
            nameColor: '#53bdeb'
          },
        ]
      },
      {
        id: 3,
        name: "Certifications",
        datetime: "11/2023",
        text: "But very creative",
        members: ["Coursera", "HackerRank"],
        membersText: "Coursera, HackerRank",
        img: '/document.svg',
        muted: false,
        messages: [
          {
            type: 'Dates',
            date: '28/12/2023'
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptate possimus temporibus nihil ipsam non minima? Aut ipsa autem odio, quas asperiores vel cum consequuntur neque dolores ea quis maxime!',
            read: true
          },
        ]
      },
      {
        id: 4,
        name: "Languages",
        datetime: "Namaस्कार",
        text: "Jaldi aa",
        members: ["Communication", "Coding"],
        membersText: "Communication, Coding",
        img: '/language.svg',
        muted: false,
        messages: [
          {
            type: 'Dates',
            date: '28/12/2023'
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptate possimus temporibus nihil ipsam non minima? Aut ipsa autem odio, quas asperiores vel cum consequuntur neque dolores ea quis maxime!',
            read: true
          },
        ]
      },
      {
        id: 5,
        name: "Tech",
        datetime: "Always!",
        text: "Vaibhav: Okay",
        members: ["Basic Web", "Mobile Dev", "Python", "Java", "C", "C++"],
        membersText: "Basic Web, Mobile Dev, Python, Java, C, C++",
        img: '/code-slash.svg',
        muted: true,
        messages: [
          {
            type: 'Dates',
            date: '28/12/2023'
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptate possimus temporibus nihil ipsam non minima? Aut ipsa autem odio, quas asperiores vel cum consequuntur neque dolores ea quis maxime!',
            read: true
          },
        ]
      },
      {
        id: 6,
        name: "Projects & Experience",
        datetime: "Now",
        text: "Let us go with this one... Seems good enough",
        members: ["The Web Widgets", "Play Bollywood", "Darwin India", "TedxSomaiya Vidyavihar", "EagledEye"],
        membersText: "WebWidgets, PlayBollywood, Darwin India, TEDxSomaiya, EagledEye",
        img: '/terminal.svg',
        muted: false,
        messages: [
          {
            type: 'Dates',
            date: '28/12/2023'
          },
          {
            type: 'Sent',
            time: '12:18',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptate possimus temporibus nihil ipsam non minima? Aut ipsa autem odio, quas asperiores vel cum consequuntur neque dolores ea quis maxime!',
            read: false
          },
        ]
      },
      {
        id: 7,
        name: "Socials",
        datetime: ";)",
        text: ":)",
        img: '/logo-whatsup.svg',
        members: ["Github", "LinkedIn", "Twitter(X)"],
        membersText: "GitHub, LinkedIn, Twitter(X)",
        muted: false,
        messages: [
        ]
      }
    ],
    Channels: [
      {
        id: 1,
        name: 'NextJS',
        followed: true,
        image: '/Channels/nextjs.png'
      },
      {
        id: 2,
        name: 'PHP',
        followed: true,
        image: '/Channels/php.png'
      },
      {
        id: 3,
        name: 'JavaScript',
        followed: true,
        image: '/Channels/js.png'
      },
      {
        id: 4,
        name: 'Vercel',
        followed: true,
        image: '/Channels/vercel1.jpeg'
      },
      {
        id: 5,
        name: 'Python',
        followed: true,
        image: '/Channels/python.png'
      },
      {
        id: 6,
        name: 'GPT',
        followed: false,
        image: '/Channels/gpt.jpg'
      },
      {
        id: 7,
        name: 'MongoDB',
        followed: true,
        image: '/Channels/mongodb1.svg'
      },
      {
        id: 8,
        name: 'NodeJS',
        followed: true,
        image: '/Channels/nodejs.png'
      },
      {
        id: 9,
        name: 'Three.js',
        followed: false,
        image: '/Channels/threejs.png'
      },
    ],
    ProfileSections: [
      {
        id: 1,
        title: "Name",
        text: "Jagjit Singh Bhumra"
      },
      {
        id: 2,
        title: "About",
        text: "Geek. Techie. Gamer. Tinkerer."
      },
      {
        id: 3,
        title: "Bio",
        text: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it."
      },
    ]
  }
  export default Constants;