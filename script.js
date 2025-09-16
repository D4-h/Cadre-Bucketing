// ===================================================================================
//  COMPLETE WORKING SCRIPT WITH FULL DATA
// ===================================================================================

const ALL_DATA = [
    {
        "S.no": 1,
        "Ref. No,": 270,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "A",
        "Cadre Name": "Administrative Service Gr-A Administrative Officer",
        "DR Posts": 5,
        "Vacant Posts (DR)": 2,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Senior Admin (General) SA(Gen) combined",
        "Proposed Exam Pattern": "Senior Specialist Examination",
        "Pay Scale Degree & Exp": "S18 (49100 - 155800) Bachelor's 5",
        "Pay Scale": "S18 (49100 - 155800)",
        "Degree": "Bachelor's",
        "Exp": 5,
        "Concat": "degree or any other equivalent qualification\n\u00a0from the recognized institution; period of not less\n\u00a0than five years on the post not below the rank of\n\u00a0the gazetted Officer, Group-B in any\n\u00a0Department of the Government or equivalent\n\u00a0post in Semi-Government or local authority. NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Experience",
        "Remarks": "Define experience requirement clearly, if at all experience is required. Else remove it.",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims and Interview",
        "Remarks.1": "It is suggested to define experience requirement clearly - \n\u00a01. Roles and responsibilities of the cadre to be clearly stated\n\u00a02. Verifiable experience related to above mentioned roles and responsibilities to only be considered",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 2,
        "Ref. No,": 269,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "A",
        "Cadre Name": "MAS Group-A\n\u00a0(Dy Director)",
        "DR Posts": 143,
        "Vacant Posts (DR)": 69,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S20 (56100 - 177500) Bachelor\u2019s 0",
        "Pay Scale": "S20 (56100 - 177500)",
        "Degree": "Bachelor\u2019s",
        "Exp": 0,
        "Concat": "Degree\n\u00a0in Agriculture or any other qualification declared by the\n\u00a0Government to be equivalent thereto. 0 NA",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Already combined",
        "What change in RR": null,
        "Remarks": "Already combined",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Separate Mains (Without Interview)",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 3,
        "Ref. No,": 272,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "B",
        "Cadre Name": "Administrative Service Gr-B\n\u00a0Asst. Administrative Officer",
        "DR Posts": 22,
        "Vacant Posts (DR)": 22,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Senior Admin (General) SA(Gen) combined",
        "Proposed Exam Pattern": "Senior Specialist Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 3",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 3,
        "Concat": "degree or any other equivalent qualification\n\u00a0from the recognized institution; Superintendent, Group-C, having a\n\u00a0regular and continuous service of not less than three years NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Experience",
        "Remarks": "Remove Experience",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims and Interview",
        "Remarks.1": "It is suggested to consider the removal of experience requirement, in order to include the cadre in the competitive examination (under MPSC).",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 4,
        "Ref. No,": 273,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "B",
        "Cadre Name": "M.A.S. Gr-B (Jr.) Gazzeted (Agriculture Officer)",
        "DR Posts": 882,
        "Vacant Posts (DR)": 298,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Engineering",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Bachelor Degree in Agriculture or Horticulture or Agriculture Engineering or Any other equivalent qualification on same discipline from the recognised institution 0 NA",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Already combined",
        "What change in RR": null,
        "Remarks": "Already combined",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 5,
        "Ref. No,": 271,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "B",
        "Cadre Name": "MAS Group-B\n\u00a0(Technical Officer)",
        "DR Posts": 475,
        "Vacant Posts (DR)": 124,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S16 (44900 - 142400) Bachelor's 0",
        "Pay Scale": "S16 (44900 - 142400)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree\n\u00a0in Agriculture or any other qualification declared by the\n\u00a0Government to be equivalent thereto. 0 NA",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Already combined",
        "What change in RR": null,
        "Remarks": "Already combined",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Separate Mains (Without Interview)",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 6,
        "Ref. No,": 275,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Assistant Superintendent",
        "DR Posts": 100,
        "Vacant Posts (DR)": 42,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S13 (35400 - 112400) Bachelor's 3",
        "Pay Scale": "S13 (35400 - 112400)",
        "Degree": "Bachelor's",
        "Exp": 3,
        "Concat": "Candidates who have passed Bachelors Degree from recognized University by Government of Maharashtra Practical experience of noting and correspondance work for a period of at least 3 years NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Experience",
        "Remarks": "Remove Experience",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested to consider the removal of experience requirement, in order to include the cadre in the competitive examination (under MPSC).",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 7,
        "Ref. No,": 279,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Stenographer (Lower Grade)",
        "DR Posts": 36,
        "Vacant Posts (DR)": 36,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800)) HSC/SSC 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "1. Passed the post-secondary school examination. 2. Shorthand speed 100 per minute 3. English typing speed - 40 or Marathi typing speed - 30 0 Yes",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "It is suggested to NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 8,
        "Ref. No,": 278,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Stenographer (Higher Grade)",
        "DR Posts": 9,
        "Vacant Posts (DR)": 5,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) HSC/SSC 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "1. Passed the post-secondary school examination. 2. Shorthand speed 120 per minute 3. English typing speed - 40 or Marathi typing speed - 30 0 Yes",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "It is suggested to NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 9,
        "Ref. No,": 277,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Junior Clerk",
        "DR Posts": 1191,
        "Vacant Posts (DR)": 637,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Bachelor's 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "1.Candidates who have passed Bachelors Degree from recognized University by Government of Maharashtra 2. Candidates who have passed the Marathi 30 marks or English 40 marks examination from the Government Commercial Certificate Examination Board 0 Yes",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Skill Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "It is suggested- \n\u00a01. To revise educational qualification to HSC/ SSC\n\u00a02. To NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 10,
        "Ref. No,": 274,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Assistant Agriculture Officer",
        "DR Posts": 10439,
        "Vacant Posts (DR)": 1316,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) Diploma 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "Diploma",
        "Exp": 0,
        "Concat": "Diploma in Agricuture or Bachelor Degree in Agriculture or Any other equivalent qualification on same discipline from the recognised institution 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": "No",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 11,
        "Ref. No,": 276,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Senior Clerk",
        "DR Posts": 220,
        "Vacant Posts (DR)": 75,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) Bachelor's 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Candidates who have passed Bachelors Degree from recognized University by Government of Maharashtra 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 12,
        "Ref. No,": 280,
        "Establishment": "Agriculture",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Steno Typist",
        "DR Posts": 37,
        "Vacant Posts (DR)": 35,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) HSC/SSC 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "1. Passed the post-secondary school examination. 2. Shorthand speed 80 per minute 3. English typing speed - 40 or Marathi typing speed - 30 0 Yes",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "It is suggested- \n\u00a01. To revise educational qualification to HSC/ SSC\n\u00a02. To NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 13,
        "Ref. No,": 282,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "A",
        "Cadre Name": "Livestock Development Officer",
        "DR Posts": 4684,
        "Vacant Posts (DR)": 2805,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S20 (56100 - 177500) Bachelor's 0",
        "Pay Scale": "S20 (56100 - 177500)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "BVsc 0 NA",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Already combined",
        "What change in RR": null,
        "Remarks": "Already combined",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 14,
        "Ref. No,": 281,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "A",
        "Cadre Name": "Assistant Commissioner Animal Husbandry",
        "DR Posts": 433,
        "Vacant Posts (DR)": 308,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Medical",
        "Proposed combined": "Senior Technical (Agriculture and Allied) ST(A) combined",
        "Proposed Exam Pattern": "Senior Specialist Examination",
        "Pay Scale Degree & Exp": "S22 (60000 - 190800) Master's 5",
        "Pay Scale": "S22 (60000 - 190800)",
        "Degree": "Master's",
        "Exp": 5,
        "Concat": "MVsc 5 Year NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Experience",
        "Remarks": "Define experience requirement clearly, if at all experience is required. Else remove it.",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "It is suggested to define experience requirement clearly - \n\u00a01. Roles and responsibilities of the cadre to be clearly stated\n\u00a02. Verifiable experience related to above mentioned roles and responsibilities to only be considered",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 15,
        "Ref. No,": 283,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "B",
        "Cadre Name": "Fooder Development Officers",
        "DR Posts": 11,
        "Vacant Posts (DR)": 11,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Engineering",
        "Proposed combined": "Senior Technical (Agriculture and Allied) ST(A) combined",
        "Proposed Exam Pattern": "Senior Specialist Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 3",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 3,
        "Concat": "Agricultre graduate/Agricultre Engg. 3 Years Exp Fooder Development Activties NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Experience",
        "Remarks": "Remove Experience",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "It is suggested to consider the removal of experience requirement, in order to include the cadre in the competitive examination (under MPSC).",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 16,
        "Ref. No,": 290,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Lab Technician",
        "DR Posts": 293,
        "Vacant Posts (DR)": 290,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "Junior Technical (Sciences) JT(S) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S13 (35400 - 112400) Bachelor's 0",
        "Pay Scale": "S13 (35400 - 112400)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Graduate degree in Chemistry/Bio Technology/Biology/Microbiology or Veterinery Science of AH from a Statutory university or any other qualification declared equivalent to it by the Govt. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Educational Qualification",
        "Remarks": "Define education qualification clearly. Remove multiple options. Keep it as broad as possible",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested to consider revising educational qualification as Degree/ Diploma in Medical lab Technology.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 17,
        "Ref. No,": 285,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Steno (Lower)",
        "DR Posts": 4,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800)) Bachelor's 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "1. Those who hold a drgree in any statutory university or Statutory university or any other qualification declared equivalent to it by the Govt.\n\u00a02.Those who have passed Government Commercial certificate with a minimum Short hand speed of 100 WPM and \n\u00a0Marathi /English Typing Speed of at least 40 WPM . 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Skill Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested- \n\u00a01. To revise educational qualification to HSC/ SSC\n\u00a02. To NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 18,
        "Ref. No,": 286,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Stastical Investigator",
        "DR Posts": 4,
        "Vacant Posts (DR)": 3,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Mathematics / Statistical",
        "Proposed combined": "Junior Technical (Mathematics / Statistics) JT(MS) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800)) Bachelor's 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Graduate degree in Statistics, Mathamatics, Economics or Commerce from Statutory university or any other qualification declared equivalent to it by the Govt. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": null,
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 19,
        "Ref. No,": 284,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Steno (Higher)",
        "DR Posts": 2,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "1. Those who hold a drgree in any statutory university or Statutory university or any other qualification declared equivalent to it by the Govt.\n\u00a02.Those who have passed Government Commercial certificate with a minimum Short hand speed of 120 WPM and \n\u00a0Marathi /English Typing Speed of at least 40 WPM . 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Skill Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested- \n\u00a01. To revise educational qualification to HSC/ SSC\n\u00a02. To NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 20,
        "Ref. No,": 292,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Junior Clerk",
        "DR Posts": 291,
        "Vacant Posts (DR)": 186,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Bachelor's 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "1. Those who hold a drgree and \n\u00a02.Those who have passed Government Commercial certificate in a Marathi Typing Speed of at least 30 WPM or 40 WPM English . 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Skill Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims + Skill Test/Interview",
        "Remarks.1": "It is suggested to NOT consider Skill/ Certificate as eligibility criteria during the recruitment cycle. Skill test can be conducted during the probation period.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 21,
        "Ref. No,": 293,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Wireman",
        "DR Posts": 2,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Other Technical",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Vocational Training 1",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Vocational Training",
        "Exp": 1,
        "Concat": "passes a certificate in the trade of wireman from any Industrial Training Institute os from any other recognized Institution At least one year experience in maintaining and repairing electrical equipments NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Experience",
        "Remarks": "Remove Experience. \n\u00a0\n\u00a0Change Educational Qualification to ITI/ Diploma in Electrical Engineering",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested to consider removing experience requirement for the cadre.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 22,
        "Ref. No,": 294,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Boiler Attendent",
        "DR Posts": 1,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Other Technical",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) HSC/SSC 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "1. Must have passed the secondary school leaving examination\n\u00a02. Must have a second class certificate from the institute of a boiler and smoke nuisance of Maharashtra State or any other recognized institute.\n\u00a03. Holder of B or C certificate as specified under rule 41 of the boiler Attendent Rules 2011 will be required.\n\u00a04. The candidate should be able to maintain records and take temperature reading or of other qualification declared equivalent to it by the Government. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Experience",
        "Remarks": "Change educational qualification. Remove requirement of specific institution and boiler handling experience. \n\u00a0\n\u00a0Educational qualification may be changd to ITI/ Diploma in Mechanical Engineering",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested to consider removing the mention of specific requirement of one institution for the required certificate. \n\u00a0\n\u00a0Also, it is suggested to consider removing the boiler handling experience as it is difficult to verify.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 23,
        "Ref. No,": 287,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Stastical Assistant",
        "DR Posts": 22,
        "Vacant Posts (DR)": 17,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Mathematics / Statistical",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) Bachelor's 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Graduate degree in Statistics, Mathamatics, Economics or Commerce from Statutory university or any other qualification declared equivalent to it by the Govt. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Educational Qualification",
        "Remarks": "Define education qualification clearly. Remove multiple options. Keep it as broad as possible",
        "Recruitment Agency": null,
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 24,
        "Ref. No,": 288,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Refrigerator Mechanic",
        "DR Posts": 3,
        "Vacant Posts (DR)": 2,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Other Technical",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) HSC/SSC 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "1. Must have passed the secondary school leaving examination\n\u00a02. Holder of a Diploma or certificate in Refrigeration or Air Conditioning from an industrial training institute or an institution recognized by the Govt will be required or any other qualification declared equivalent to it by the Govt. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Educational Qualification",
        "Remarks": "Educational Qualification too complicated. Define clearly. Keep it as broad as possible",
        "Recruitment Agency": null,
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 25,
        "Ref. No,": 289,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Plant Operator",
        "DR Posts": 6,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Other Technical",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) HSC/SSC 2",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "HSC/SSC",
        "Exp": 2,
        "Concat": "1. Must have passed the secondary school leaving examination\n\u00a02. Holds a National vocational certificate for succesfully completing the course in mechanical refrigeration and air Conditioning/Mechanical Craftman or or any other qualification declared equivalent to it by the Govt. 2 years of practical experience in the Mentenance and repair of disel engine refrigeration, air conditioning systems and equipment. NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Experience",
        "Remarks": "Educational Qualification too complicated. Define clearly. Keep it as broad as possible. Remove Experience",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested to consider removing experience as it is difficult to verify. \n\u00a0\n\u00a0Also, it is suggested to match educational qualification at par with Refrigerator Mechanic in order to facilitate merger of the two cadres post RR revision.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 26,
        "Ref. No,": 291,
        "Establishment": "Animal Husbandry",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Live stock Supervisor",
        "DR Posts": 3395,
        "Vacant Posts (DR)": 2976,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) HSC/SSC 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "1. Those who have passed the secondary school leaving examination\n\u00a02. Must have passed the two year Diploma Course in Live stock Management and Dairy Production conducted by Maharashtra University of Animal and Fishery Science Nagpur.\n\u00a03. Bachlors Degree in Veterinery Science of AH from a Statutory university or any other qualification declared equivalent to it by the Govt. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Educational Qualification",
        "Remarks": "Educational Qualification too complicated. Define clearly. Keep it as broad as possible. Remove the name of specific institutions.",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Aptitude Test",
        "Remarks.1": "It is suggested to consider removing the mention of specific requirement of one institution for the required certificate. \n\u00a0\n\u00a0Also, it is suggested to consider revising the educational qualification to Degree/ Diploma in Animal husbandry/ Veterinary Science",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 27,
        "Ref. No,": 295,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "A",
        "Cadre Name": "Assistant Commissioner of Fisheries (Tech.)",
        "DR Posts": 20,
        "Vacant Posts (DR)": 20,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S20 (56100 - 177500) Bachelor's 0",
        "Pay Scale": "S20 (56100 - 177500)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "B.Fsc. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 28,
        "Ref. No,": 296,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "B",
        "Cadre Name": "Fisheries Development Officer and others (Tech.)",
        "DR Posts": 28,
        "Vacant Posts (DR)": 28,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "B.Fsc. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 29,
        "Ref. No,": 297,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "B",
        "Cadre Name": "Administrative Officer and others",
        "DR Posts": 8,
        "Vacant Posts (DR)": 8,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Any Graduate 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Common Prelims, Common Mains and Interview",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 30,
        "Ref. No,": 298,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Assistant Fisheries Development Officer",
        "DR Posts": 170,
        "Vacant Posts (DR)": 170,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Sciences",
        "Proposed combined": "Junior Technical (Agriculture and Allied) JT(A) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S13 (35400 - 112400) Bachelor's 0",
        "Pay Scale": "S13 (35400 - 112400)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "B.Fsc. 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 31,
        "Ref. No,": 303,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Mechanical Instructor",
        "DR Posts": 6,
        "Vacant Posts (DR)": null,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Engineering",
        "Proposed combined": "Junior Technical (Engineering) JT(E)",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800)) Diploma 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Diploma",
        "Exp": 0,
        "Concat": "Diploma in Mechanical Engineering 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 32,
        "Ref. No,": 300,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Junior Clerk",
        "DR Posts": 86,
        "Vacant Posts (DR)": null,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Bachelor's 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Any Graduate 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "Yes",
        "What change in RR": "Educational Qualification",
        "Remarks": "#NAME?",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 33,
        "Ref. No,": 302,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Librarian",
        "DR Posts": 1,
        "Vacant Posts (DR)": null,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S7 (21700 - 69100) Diploma 0",
        "Pay Scale": "S7 (21700 - 69100)",
        "Degree": "Diploma",
        "Exp": 0,
        "Concat": "Diploma or Certificate in librarianship 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 34,
        "Ref. No,": 299,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Senior Clerk",
        "DR Posts": 40,
        "Vacant Posts (DR)": null,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) Bachelor's 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Any Graduate 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 35,
        "Ref. No,": 301,
        "Establishment": "Fisheries",
        "Department": "Agriculture & Allied",
        "Group": "C",
        "Cadre Name": "Statistical Assistant",
        "DR Posts": 5,
        "Vacant Posts (DR)": null,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Mathematics / Statistical",
        "Proposed combined": "Technical Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) Bachelor's 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree with Statstical/Economics 0 NA",
        "Proposed Recruitment Agency": "TCS",
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "No changes in RR",
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 36,
        "Ref. No,": 1021,
        "Establishment": "Minority Commissionerate Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Superintendent",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800) Bachelor's 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree / Equivalent Qualification",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 37,
        "Ref. No,": 1022,
        "Establishment": "Minority Commissionerate Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Assistant Engineer Grade2",
        "DR Posts": 2,
        "Vacant Posts (DR)": 2,
        "Broad Cadre Bucketing": "Technical",
        "Domain Specific Cadre Bucketing": "Engineering",
        "Proposed combined": "Junior Technical (Engineering) JT(E)",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree in Civil Engineering",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 38,
        "Ref. No,": 1024,
        "Establishment": "Minority Commissionerate Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Stenographer (Lower Grade)",
        "DR Posts": 0,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) HSC/SSC 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "Passed Secondary School Certificate Examination.English Marathi shorthand speed 100, Typing Marathi 30 English 40 words per minute",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 39,
        "Ref. No,": 1023,
        "Establishment": "Minority Commissionerate Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Stenographer (Higher Class)",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S16 (44900 - 142400) HSC/SSC 0",
        "Pay Scale": "S16 (44900 - 142400)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "(Passed Secondary School Certificate ExaminationEnglish Marathi shorthand speed 120, Typing Marathi 30 English 40 words per minute",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 40,
        "Ref. No,": 1020,
        "Establishment": "Minority Commissionerate Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Assistant Commissioner",
        "DR Posts": 2,
        "Vacant Posts (DR)": 2,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "MPSC Combined",
        "Proposed Exam Pattern": "Maharashtra Civil Services (Gazetted) Examination",
        "Pay Scale Degree & Exp": "S20 (56100 - 177500) Bachelor's 0",
        "Pay Scale": "S20 (56100 - 177500)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree / Equivalent Qualification",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 41,
        "Ref. No,": 1025,
        "Establishment": "Minority Commissionerate Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Clerktypist",
        "DR Posts": 42,
        "Vacant Posts (DR)": 42,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Bachelor's 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree / Equivalent Qualification.Marathi typing speed 30 and English typing speed 40 words per minute",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Skill Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "#NAME?",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 42,
        "Ref. No,": 1031,
        "Establishment": "Maharashtra State Hajj Committee",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Assistant",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800) Bachelor's 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Graduate",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 43,
        "Ref. No,": 1032,
        "Establishment": "Maharashtra State Hajj Committee",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Clerk",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) HSC/SSC 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "SSSEnglish 40 wpm",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "#NAME?",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 44,
        "Ref. No,": 1034,
        "Establishment": "Maharashtra State Hajj Committee",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Accounts Clerk (Haj Committee)",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) HSC/SSC 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "S.S.CEnglish 40 wpm",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "#NAME?",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 45,
        "Ref. No,": 1033,
        "Establishment": "Maharashtra State Hajj Committee",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Stenotypist",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) HSC/SSC 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "HSC/SSC",
        "Exp": 0,
        "Concat": "S.S.CEnglish 80 wpm & Marathi 40 wpm",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "#NAME?",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 46,
        "Ref. No,": 1026,
        "Establishment": "Maharashtra State Urdu Academy",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "SuperintendentcumExecutive Officer",
        "DR Posts": 1,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800) Bachelor's 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "1) Possess a degree of a statutory University with Urdu as a special subject. 2) Have proficiency in writing Urdu articles and correspondence. 3) Have adequate knowledge of Marathi language.",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Define requirements related to language proficiency clearly. Do not use vague language such as \"\"adequate knowledge\"\"\"",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "Define requirements related to language proficiency clearly. Do not use vague language such as \"\"adequate knowledge\"\"\"",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 47,
        "Ref. No,": 1028,
        "Establishment": "Maharashtra State Urdu Academy",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Assistant Room Officer",
        "DR Posts": 1,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S14 (38600 - 122800) Not Applicable 0",
        "Pay Scale": "S14 (38600 - 122800)",
        "Degree": "Not Applicable",
        "Exp": 0,
        "Concat": null,
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 48,
        "Ref. No,": 1027,
        "Establishment": "Maharashtra State Urdu Academy",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Deputy Editor (Urdu)",
        "DR Posts": 0,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Development",
        "Domain Specific Cadre Bucketing": "Other Development",
        "Proposed combined": "Junior Development combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S13 (35400 - 112400) Bachelor's 0",
        "Pay Scale": "S13 (35400 - 112400)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "1. Holds Degree in Urdu Language; 2. Holds a degree in Journalism or Mass Communication (Jana Sanjapan).",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 49,
        "Ref. No,": 1029,
        "Establishment": "Maharashtra State Urdu Academy",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Clerk Typist",
        "DR Posts": 2,
        "Vacant Posts (DR)": 2,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Not Applicable 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Not Applicable",
        "Exp": 0,
        "Concat": "typing",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Skill test to be removed.",
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "Skill test to be removed.",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 50,
        "Ref. No,": 1030,
        "Establishment": "Maharashtra State Urdu Academy",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Accounts Clerk (Urdu Academy)",
        "DR Posts": 1,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Not Applicable 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Not Applicable",
        "Exp": 0,
        "Concat": null,
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "MPSC",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 51,
        "Ref. No,": 1035,
        "Establishment": "Maharashtra State Waqf Tribunal, Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "B",
        "Cadre Name": "Stenographer (Retd.)",
        "DR Posts": 3,
        "Vacant Posts (DR)": 1,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Junior Admin (General) JA(Gen) combined",
        "Proposed Exam Pattern": "Combined (Non-Gazetted) Examination",
        "Pay Scale Degree & Exp": "S15 (41800 - 132300) Bachelor's 0",
        "Pay Scale": "S15 (41800 - 132300)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "degree \n\u00a0Marathi Typewriting 30\n\u00a0Commerce Certificate of Marathi Shorthand 100\n\u00a0Or\n\u00a0English Typing 40yes",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Skill Qualification/ Test",
        "Remarks": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "Skill test to be removed. Educational Qualification to be HSC/ SSC, Experiecne to be removed (if any)",
        "Bucketing": "Recruitment Rule Change"
    },
    {
        "S.no": 52,
        "Ref. No,": 1037,
        "Establishment": "Maharashtra State Waqf Tribunal, Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "Clerktypist",
        "DR Posts": 9,
        "Vacant Posts (DR)": 8,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S6 (19900 - 63200) Not Applicable 0",
        "Pay Scale": "S6 (19900 - 63200)",
        "Degree": "Not Applicable",
        "Exp": 0,
        "Concat": "As per Service Access Rules fixed by General Administration Department",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "No",
        "What change in RR": null,
        "Remarks": null,
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": null,
        "Bucketing": "No Recruitment Rule Change"
    },
    {
        "S.no": 53,
        "Ref. No,": 1036,
        "Establishment": "Maharashtra State Waqf Tribunal, Chhatrapati Sambhajinagar",
        "Department": "Minority",
        "Group": "C",
        "Cadre Name": "accountant (clerk)",
        "DR Posts": 1,
        "Vacant Posts (DR)": 0,
        "Broad Cadre Bucketing": "Administration",
        "Domain Specific Cadre Bucketing": "General",
        "Proposed combined": "Admin Staff",
        "Proposed Exam Pattern": "Maharashtra Staff Selection Examination",
        "Pay Scale Degree & Exp": "S8 (25500 - 81100) Bachelor's 0",
        "Pay Scale": "S8 (25500 - 81100)",
        "Degree": "Bachelor's",
        "Exp": 0,
        "Concat": "Degree in Commerce \n\u00a0Marathi Typewriting 30\n\u00a0English Typing 40",
        "Proposed Recruitment Agency": null,
        "Need changes in RR": "Yes",
        "What change in RR": "Education Qualification and Skill Test",
        "Remarks": "#NAME?",
        "Recruitment Agency": "Department",
        "Exam Pattern": "Not Provided",
        "Remarks.1": "#NAME?",
        "Bucketing": "Recruitment Rule Change"
    }
];

// ===================================================================================
//  MAIN SCRIPT LOGIC
// ===================================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded");
    console.log("ALL_DATA:", ALL_DATA);
    console.log("Data length:", ALL_DATA.length);
    
    // Debug: Log first few data items to see structure
    console.log("First data item:", ALL_DATA[0]);
    console.log("Groups in data:", ALL_DATA.map(item => item.Group));
    console.log("Broad Cadre Bucketing values:", ALL_DATA.map(item => item['Broad Cadre Bucketing']));
    
    // --- Navigation Dropdown Logic ---
    const navButton = document.getElementById('navToggleButton');
    const navDropdown = document.getElementById('navDropdown');
    
    console.log("Nav button found:", !!navButton);
    console.log("Nav dropdown found:", !!navDropdown);
    
    if (navButton && navDropdown) {
        console.log("Setting up navigation event listeners...");
        
        navButton.addEventListener('click', function(event) {
            console.log("Navigation button clicked!");
            event.stopPropagation();
            event.preventDefault();
            
            const isActive = navDropdown.classList.contains('active');
            console.log("Dropdown was active:", isActive);
            
            if (isActive) {
                navDropdown.classList.remove('active');
                console.log("Dropdown closed");
            } else {
                navDropdown.classList.add('active');
                console.log("Dropdown opened");
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!navButton.contains(event.target) && !navDropdown.contains(event.target)) {
                if (navDropdown.classList.contains('active')) {
                    navDropdown.classList.remove('active');
                    console.log("Dropdown closed by outside click");
                }
            }
        });

        // Prevent dropdown from closing when clicking inside it
        navDropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    } else {
        console.error("Navigation elements not found!");
    }

    // --- Initialize Dashboard ---
    if (Array.isArray(ALL_DATA) && ALL_DATA.length > 0) {
        console.log("Initializing dashboards...");
        initializeDashboards();
    } else {
        console.error("DATA NOT LOADED or EMPTY");
        showNoDataState();
    }
});

function showPage(pageId) {
    console.log("Showing page:", pageId);
    
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        console.log("Page activated:", pageId);
    } else {
        console.error("Page not found:", pageId + '-page');
    }

    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        if (pageId === 'home') pageTitle.textContent = 'Cadre Analysis Dashboard';
        if (pageId === 'grouping') pageTitle.textContent = 'Grouping Distribution';
        if (pageId === 'functional') pageTitle.textContent = 'Functional Distribution';
    }

    // Close the dropdown after navigation
    const navDropdown = document.getElementById('navDropdown');
    if (navDropdown) {
        navDropdown.classList.remove('active');
        console.log("Dropdown closed after navigation");
    }
}

function initializeDashboards() {
    const departments = [...new Set(ALL_DATA.map(row => row.Department).filter(Boolean))];
    console.log("Departments found:", departments);
    populateDepartments(departments);
    onFilterChange();
}

function populateDepartments(departments) {
    const selects = [
        document.getElementById('department-select-grouping'),
        document.getElementById('department-select-functional')
    ];
    selects.forEach(select => {
        if (!select) return;
        select.innerHTML = '<option value="">All Departments</option>';
        departments.sort().forEach(dept => {
            if (dept) select.innerHTML += `<option value="${dept}">${dept}</option>`;
        });
    });
}

function showNoDataState() {
    document.querySelectorAll('.no-data').forEach(el => {
        el.innerHTML = "DATA NOT FOUND. Please ensure it is correctly pasted in the script.js file.";
    });
    document.querySelectorAll('.filter-input').forEach(el => {
        el.disabled = true;
    });
}

function onFilterChange() {
    console.log("Filter change triggered");
    
    const deptSelect = document.getElementById('department-select-grouping');
    const estSelect = document.getElementById('establishment-select-grouping');
    
    document.getElementById('department-select-functional').value = deptSelect.value;
    
    const selectedDept = deptSelect.value;
    updateEstablishments(selectedDept);
    
    const selectedEst = estSelect.value;
    document.getElementById('establishment-select-functional').value = selectedEst;
    
    let filteredData = ALL_DATA;
    if (selectedDept) {
        filteredData = filteredData.filter(row => row.Department === selectedDept);
    }
    if (selectedEst) {
        filteredData = filteredData.filter(row => row.Establishment === selectedEst);
    }

    console.log("Filtered data length:", filteredData.length);
    console.log("Sample filtered data:", filteredData.slice(0, 2));

    updateGroupingDashboard(filteredData);
    updateFunctionalDashboard(filteredData);
}

function updateEstablishments(selectedDept) {
    let establishments = [];
    if (selectedDept) {
        establishments = [...new Set(ALL_DATA.filter(row => row.Department === selectedDept).map(row => row.Establishment).filter(Boolean))];
    }

    const selects = [
        document.getElementById('establishment-select-grouping'),
        document.getElementById('establishment-select-functional')
    ];

    selects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">All Establishments</option>';
        if (establishments.length > 0) {
            establishments.sort().forEach(est => {
                if (est) select.innerHTML += `<option value="${est}">${est}</option>`;
            });
            select.disabled = false;
            select.value = establishments.includes(currentVal) ? currentVal : "";
        } else {
            select.innerHTML = '<option value="">All Establishments</option>';
            select.disabled = !selectedDept;
        }
    });
}

// --- DASHBOARD UPDATE FUNCTIONS ---

function updateGroupingDashboard(data) {
    console.log("Updating grouping dashboard with data length:", data.length);
    
    document.getElementById('total-cadres-grouping').textContent = data.length;

    // Count by Group field (A, B, C)
    const grouping = data.reduce((acc, row) => {
        const key = row.Group || 'N/A'; 
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    console.log("Group counts:", grouping);

    document.getElementById('category-a-grouping').textContent = grouping['A'] || 0;
    document.getElementById('category-b-grouping').textContent = grouping['B'] || 0;
    document.getElementById('category-b-ng-grouping').textContent = grouping['B (N/G)'] || grouping['B(N/G)'] || 0;
    document.getElementById('category-c-grouping').textContent = grouping['C'] || 0;

    // Count by Broad Cadre Bucketing for the progress bar
    const functional = data.reduce((acc, row) => {
        const key = row['Broad Cadre Bucketing'] || 'N/A';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    
    console.log("Functional counts:", functional);
    
    const adminCount = functional['Administration'] || 0;
    const techCount = functional['Technical'] || 0;
    const devCount = functional['Development'] || 0;
    const totalFunctional = adminCount + techCount + devCount;

    document.getElementById('admin-value').textContent = adminCount;
    document.getElementById('tech-value').textContent = techCount;
    document.getElementById('dev-value').textContent = devCount;

    // Update progress bar widths and ensure proper classes
    const adminBar = document.getElementById('bar-admin');
    const techBar = document.getElementById('bar-tech');
    const devBar = document.getElementById('bar-dev');
    
    // Ensure the bars have the correct CSS classes for colors
    if (adminBar) {
        adminBar.classList.add('bar-admin');
        adminBar.classList.remove('is-default', 'is-zero');
    }
    if (techBar) {
        techBar.classList.add('bar-tech');
        techBar.classList.remove('is-default', 'is-zero');
    }
    if (devBar) {
        devBar.classList.add('bar-dev');  
        devBar.classList.remove('is-default', 'is-zero');
    }
    
    if (totalFunctional > 0) {
        const adminWidth = Math.round((adminCount / totalFunctional) * 100);
        const techWidth = Math.round((techCount / totalFunctional) * 100);
        const devWidth = Math.round((devCount / totalFunctional) * 100);
        
        // Handle zero values by hiding segments
        if (adminCount === 0) {
            if (adminBar) {
                adminBar.style.width = '0%';
                adminBar.classList.add('is-zero');
            }
        } else {
            if (adminBar) {
                adminBar.style.width = `${adminWidth}%`;
                adminBar.classList.remove('is-zero');
            }
        }
        
        if (techCount === 0) {
            if (techBar) {
                techBar.style.width = '0%';
                techBar.classList.add('is-zero');
            }
        } else {
            if (techBar) {
                techBar.style.width = `${techWidth}%`;
                techBar.classList.remove('is-zero');
            }
        }
        
        if (devCount === 0) {
            if (devBar) {
                devBar.style.width = '0%';
                devBar.classList.add('is-zero');
            }
        } else {
            if (devBar) {
                devBar.style.width = `${devWidth}%`;
                devBar.classList.remove('is-zero');
            }
        }
        
        console.log("Bar widths - Admin:", adminWidth + "%", "Tech:", techWidth + "%", "Dev:", devWidth + "%");
    } else {
        // Default equal widths when no data
        if (adminBar) {
            adminBar.style.width = '33.33%';
            adminBar.classList.remove('is-zero');
        }
        if (techBar) {
            techBar.style.width = '33.33%';
            techBar.classList.remove('is-zero');
        }
        if (devBar) {
            devBar.style.width = '33.33%';
            devBar.classList.remove('is-zero');
        }
    }

    // Update table
    const tableBody = document.getElementById('details-table-body-grouping');
    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="no-data">No data for selected filters</td></tr>`;
        return;
    }
    tableBody.innerHTML = data.map(row => `
        <tr>
            <td>${row.Department || ''}</td>
            <td>${row.Establishment || ''}</td>
            <td>${row['Cadre Name'] || ''}</td>
            <td>${row['Pay Scale'] || ''}</td>
            <td>${row['Broad Cadre Bucketing'] || ''}</td>
            <td>${row['Domain Specific Cadre Bucketing'] || ''}</td>
            <td>${row['Proposed combined'] || ''}</td>
        </tr>
    `).join('');
}

function updateFunctionalDashboard(data) {
    console.log("Updating functional dashboard with data length:", data.length);
    
    document.getElementById('total-cadres-functional').textContent = data.length;

    const grouping = data.reduce((acc, row) => {
        const key = row.Group || 'N/A';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    document.getElementById('category-a-functional').textContent = grouping['A'] || 0;
    document.getElementById('category-b-functional').textContent = grouping['B'] || 0;
    document.getElementById('category-b-ng-functional').textContent = grouping['B (N/G)'] || grouping['B(N/G)'] || 0;
    document.getElementById('category-c-functional').textContent = grouping['C'] || 0;

    const bucketing = data.reduce((acc, row) => {
        const key = row.Bucketing || 'N/A';
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    document.getElementById('no-rr-count-functional').textContent = bucketing['No Recruitment Rule Change'] || 0;
    document.getElementById('with-rr-count-functional').textContent = bucketing['Recruitment Rule Change'] || 0;
    
    const tableBody = document.getElementById('details-table-body-functional');
    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="9" class="no-data">No data for selected filters</td></tr>`;
        return;
    }
    tableBody.innerHTML = data.map(row => `
        <tr>
            <td>${row.Department || ''}</td>
            <td>${row.Establishment || ''}</td>
            <td>${row['Cadre Name'] || ''}</td>
            <td>${row.Group || ''}</td>
            <td>${row['Pay Scale'] || ''}</td>
            <td>${row.Degree || ''}</td>
            <td>${row.Exp || ''}</td>
            <td>${row.Remarks || ''}</td>
            <td>${row.Bucketing || ''}</td>
        </tr>
    `).join('');
}