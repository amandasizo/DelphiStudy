const json = {
 "surveyId": "0b01a5a0-8aa6-4345-914d-58b66981fbc7",
 "surveyPostId": "0a2793ee-4bea-4c1f-95ce-dadd0de4a933",
 "surveyShowDataSaving": true,
 "title": "Round 1 of Delphi Survey on the Quality Model for Review Report",
 "completedHtmlOnCondition": [
  {
   "html": "Thank you"
  },
  {
   "expression": "{pg2q1} = 0",
   "html": "I hope you come back later."
  }
 ],
 "pages": [
  {
   "name": "pg1",
   "elements": [
    {
     "type": "text",
     "name": "pg1auth1",
     "title": "Please, enter the authentication key.",
     "description": "The key is in the invitation email for this survey.",
     "hideNumber": true,
     "isRequired": true,
     "requiredErrorText": "Authentication error: Incorrect key!",
     "validators": [
      {
       "type": "regex",
       "text": "Authentication error: Incorrect key!",
       "regex": "(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
      }
     ],
     "inputType": "password",
     "maxLength": 8
    }
   ]
  },
  {
   "name": "pg2",
   "elements": [
    {
     "type": "image",
     "name": "pg2img1",
     "imageLink": "Figuras.svg",
     "imageFit": "none",
     "imageHeight": 1361,
     "imageWidth": 936
    },
    {
     "type": "radiogroup",
     "name": "pg2q1",
     "title": "Agreement:",
     "description": "I agree to participate in this Delphi study",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "0",
       "text": "No"
      },
      {
       "value": "1",
       "text": "Yes"
      }
     ]
    }
   ],
   "title": "Instructions for Panelists"
  },
  {
   "name": "pg3",
   "elements": [
    {
     "type": "html",
     "name": "pg3html1",
     "html": "<b>Demographic questions</b>"
    },
    {
     "type": "panel",
     "name": "pg3panel2",
     "elements": [
      {
       "type": "text",
       "name": "pg3qd1",
       "title": "1. What is your age?",
       "hideNumber": true
      },
      {
       "type": "radiogroup",
       "name": "pg3qd2",
       "maxWidth": "",
       "title": "2. What is your gender?",
       "hideNumber": true,
       "choices": [
        {
         "value": "1",
         "text": "Male"
        },
        {
         "value": "2",
         "text": "Female"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "pg3qd3",
       "indent": -1,
       "title": "3. What is the highest academic degree you have completed?",
       "hideNumber": true,
       "choices": [
        {
         "value": "1",
         "text": "Bachelor's degree"
        },
        {
         "value": "2",
         "text": "Master's degree"
        },
        {
         "value": "3",
         "text": "Doctorate degree"
        }
       ],
       "showOtherItem": true
      },
      {
       "type": "text",
       "name": "pg3qd4",
       "title": "4. How long have you been working as a scientific editor (e.g., Associate Editor, Editor-in-Chief)?",
       "hideNumber": true
      },
      {
       "type": "radiogroup",
       "name": "pg3qd5",
       "title": "5. What type of journal have you worked at?",
       "hideNumber": true,
       "choices": [
        {
         "value": "item1",
         "text": "Specialized discipline-specific journal"
        },
        {
         "value": "item2",
         "text": "General multidisciplinary journal"
        },
        {
         "value": "item3",
         "text": "Both"
        }
       ],
       "showOtherItem": true
      },
      {
       "type": "checkbox",
       "name": "pg3qd6",
       "indent": -1,
       "title": "6. What is the subject category of the Journal?",
       "hideNumber": true,
       "choices": [
        {
         "value": "1",
         "text": "Neurosciences, Ageing and Degenerative Diseases"
        },
        {
         "value": "2",
         "text": "Immunology and Infection"
        },
        {
         "value": "3",
         "text": "Diagnostic, Therapies and Public Health"
        },
        {
         "value": "4",
         "text": "Biomedicine"
        },
        {
         "value": "5",
         "text": "Experimental Biology"
        },
        {
         "value": "6",
         "text": "Materials Science and Engineering"
        },
        {
         "value": "7",
         "text": "Bioengineering, Biotechnology and Biochemistry"
        },
        {
         "value": "8",
         "text": "Civil and Mining Engineering"
        },
        {
         "value": "9",
         "text": "Electrical Engineering and Computer Engineering"
        },
        {
         "value": "10",
         "text": "Mechanical Engineering and Engineering Systems"
        },
        {
         "value": "11",
         "text": "Physics"
        },
        {
         "value": "12",
         "text": "Mathematics"
        },
        {
         "value": "13",
         "text": "Chemistry and Chemical Engineering"
        },
        {
         "value": "14",
         "text": "Environment and Global Changes"
        },
        {
         "value": "15",
         "text": "Animal Science and Veterinarian Science"
        },
        {
         "value": "16",
         "text": "Agricultural and Forestry Sciences"
        },
        {
         "value": "17",
         "text": "Biological Sciences"
        },
        {
         "value": "18",
         "text": "Geosciences"
        },
        {
         "value": "19",
         "text": "Marine Sciences"
        },
        {
         "value": "20",
         "text": "Individuals, Institutions and Markets"
        },
        {
         "value": "21",
         "text": "Institutions, Values, Beliefs and Behaviour"
        },
        {
         "value": "22",
         "text": "Environment, Space and Population"
        },
        {
         "value": "23",
         "text": "The Human Mind and its Complexity"
        },
        {
         "value": "24",
         "text": "Cultures and Cultural Production"
        },
        {
         "value": "25",
         "text": "The Study of the Human Past"
        }
       ],
       "colCount": 2
      }
     ],
     "title": "Please answer the following demographic questions."
    }
   ]
  },
  {
   "name": "pg4",
   "elements": [
    {
     "type": "html",
     "name": "pg4html1",
     "html": "This section is related to the Helpfulness dimension.\n<p>In answering these questions, it will be important to consider how each requirement can be used to achieve the quality dimension of the review report. Also, think about how a set of requirements can define the quality dimension of the review report objectively in the comments to the author and editor. And finally, imagine these requirements as part of the reviewer's guideline to achieve the expected quality in a scientific review report.\n</p>"
    },
    {
     "type": "boolean",
     "name": "pg4q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg4html2",
     "visible": false,
     "visibleIf": "{pg4q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg4q2",
     "indent": 3,
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 1,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Provides constructive feedback to authors, with suggestions for manuscript improvement."
      },
      {
       "value": "r2",
       "text": "2. Includes a polite appreciation to the author for the submission and recognition of the study. "
      },
      {
       "value": "r3",
       "text": "3. Provides suggestions for alternative ways to analyse the data."
      },
      {
       "value": "r4",
       "text": "4. Provides additional comments that add value to the manuscript."
      },
      {
       "value": "r5",
       "text": "5. Proposes a solution for each problem highlighted."
      },
      {
       "value": "r6",
       "text": "6. Provides the reviewer’s interpretation of the study in a summary."
      },
      {
       "value": "r7",
       "text": "7. Identifies major scientific problems or concerns."
      },
      {
       "value": "r8",
       "text": "8. Clarifies whether concerns are evidence-based or simply hunches."
      },
      {
       "value": "r9",
       "text": "9. Provides the recommendation regarding publication, whether the paper should be accepted, revised or rejected."
      },
      {
       "value": "r10",
       "text": "10. Includes a clear rationale for the recommended decision (accept, reject, or revise)."
      },
      {
       "value": "r11",
       "text": "11. Provides clear statement on the appropriateness and priority of research for publication."
      },
      {
       "value": "r12",
       "text": "12. Mention any omissions."
      },
      {
       "value": "r13",
       "text": "13. Highlights the amount of work required before the manuscript may be suitable for publication"
      },
      {
       "value": "r14",
       "text": "14. Provides comments about the importance of the topic for that journal."
      },
      {
       "value": "r15",
       "text": "15. Indicates whether the manuscript is interesting to the readers."
      },
      {
       "value": "r16",
       "text": "16. Includes alerts on any ethical concerns (e.g., plagiarism, fraud, unethical research practices). "
      },
      {
       "value": "r17",
       "text": "17. Identifies areas of the manuscript that the reviewer was unable to adequately assess and suggests other professionals who should be solicited (e.g., statistician)."
      },
      {
       "value": "r18",
       "text": "18. Suggests a change to a manuscript type that is more appropriate for the content."
      },
      {
       "value": "r19",
       "text": "19. Indicates whether the manuscript is interesting to the readers."
      },
      {
       "value": "r20",
       "text": "20. Includes acknowledgements of individuals who may have assisted in conducting the review."
      },
      {
       "value": "r21",
       "text": "21. Indicates whether the reviewer would like to review the manuscript again after it has been revised."
      },
      {
       "value": "r22",
       "text": "22. Thanks to the editor for the opportunity."
      },
      {
       "value": "r23",
       "text": "23. Introduces individuals who the editor might find helpful as a reviewer in the future."
      },
      {
       "value": "r24",
       "text": "24. Provides an overall impression of the study, what the study adds and how it affects practice."
      },
      {
       "value": "r25",
       "text": "25. Provides an insight to the editor of your approach or engagement with the process."
      },
      {
       "value": "r26",
       "text": "26. Detects of potential conﬂicts of interest not recognised by the authors."
      },
      {
       "value": "r27",
       "text": "27. Provides notes if major grammatical errors make the manuscript difficult to read."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg4q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg5",
   "elements": [
    {
     "type": "html",
     "name": "pg5html1",
     "html": "This section is related to the Specificity dimension."
    },
    {
     "type": "boolean",
     "name": "pg5q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg5html2",
     "visible": false,
     "visibleIf": "{pg5q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg5q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 2,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Makes specific suggestions for manuscript improvements."
      },
      {
       "value": "r2",
       "text": "2. Provides specific comments with a clear explanation of the criticisms and how to resolve them."
      },
      {
       "value": "r3",
       "text": "3. Provides references and citations from the literature to support statements."
      },
      {
       "value": "r4",
       "text": "4. Provides comments detailed enough to assist authors in making necessary modifications."
      },
      {
       "value": "r5",
       "text": "5. Provides examples to highlight the issues."
      },
      {
       "value": "r6",
       "text": "6. Recommends speciﬁc, addressable changes to analysis or interpretation."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg5q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg6",
   "elements": [
    {
     "type": "html",
     "name": "pg6html1",
     "html": "This section is related to the Fairness dimension."
    },
    {
     "type": "boolean",
     "name": "pg6q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg6html2",
     "visible": false,
     "visibleIf": "{pg6q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg6q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 3,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Identifies strengths and weaknesses of the manuscript."
      },
      {
       "value": "r2",
       "text": "2. Identifies both major and minor concerns. "
      },
      {
       "value": "r3",
       "text": "3. Provides general comments, both favourable and negative."
      },
      {
       "value": "r4",
       "text": "4. Comments should be focused on the manuscript and research."
      },
      {
       "value": "r5",
       "text": "5. Includes no personal bias in the review."
      },
      {
       "value": "r6",
       "text": "6. Avoids self-promoting behaviors."
      },
      {
       "value": "r7",
       "text": "7. Avoids personal opinions or preferences."
      },
      {
       "value": "r8",
       "text": "8. Provide all statements about the manuscript rather than about the authors."
      },
      {
       "value": "r9",
       "text": "9. Provide comments on objective ﬁndings in the manuscript."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg6q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg7",
   "elements": [
    {
     "type": "html",
     "name": "pg7html1",
     "html": "This section is related to the Thoroughness dimension."
    },
    {
     "type": "boolean",
     "name": "pg7q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg7html2",
     "visible": false,
     "visibleIf": "{pg7q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg7q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 4,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Includes detailed recommendations to assist authors in making necessary modifications."
      },
      {
       "value": "r2",
       "text": "2. Provides a review with good length and sufficient details to be helpful to the editor and the author."
      },
      {
       "value": "r3",
       "text": "3. Provides a detailed analysis of the article sections, as well as tables and figures."
      },
      {
       "value": "r4",
       "text": "4. Provides notes that linguistic editing is needed or not."
      },
      {
       "value": "r5",
       "text": "5. Critiques the presentation of the work."
      },
      {
       "value": "r6",
       "text": "6. Evaluate the organization, ﬂow, and readability of the study."
      },
      {
       "value": "r7",
       "text": "7. Identifies language mistakes and typos."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg7q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg8",
   "elements": [
    {
     "type": "html",
     "name": "pg8html1",
     "html": "This section is related to the Courteousness dimension."
    },
    {
     "type": "boolean",
     "name": "pg8q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg8html2",
     "visible": false,
     "visibleIf": "{pg8q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg8q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Is written in a positive and constructive tone."
      },
      {
       "value": "r2",
       "text": "2. Is written in a professional or neutral tone."
      },
      {
       "value": "r3",
       "text": "3. Provides comments at the same time is respectful and tactful."
      },
      {
       "value": "r4",
       "text": "4. The tone and vocabulary of the review should be academic."
      },
      {
       "value": "r5",
       "text": "5. Use respectful and professional language and tone in your written review."
      },
      {
       "value": "r6",
       "text": "6. Be polite in your suggestions and avoid embarrassing and humiliating comments."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg8q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg9",
   "elements": [
    {
     "type": "html",
     "name": "pg9html1",
     "html": "This section is related to the Readability dimension."
    },
    {
     "type": "boolean",
     "name": "pg9q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg9html2",
     "visible": false,
     "visibleIf": "{pg9q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg9q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 8,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Opening the comments include the title of the manuscript."
      },
      {
       "value": "r2",
       "text": "2. Provides numbered comments."
      },
      {
       "value": "r3",
       "text": "3. Provides comments in the order they occur in the manuscript, divided by section."
      },
      {
       "value": "r4",
       "text": "4. Provides comments organized from the most important to the least important."
      },
      {
       "value": "r5",
       "text": "5. Provides each new comment in a new paragraph."
      },
      {
       "value": "r6",
       "text": "6. Is written in a manner that does not reveal the result of the review."
      },
      {
       "value": "r7",
       "text": "7. Provides comments posed as clear suggestions or observations, instead of in the form of questions."
      },
      {
       "value": "r8",
       "text": "8. Is written directly, using the second person."
      },
      {
       "value": "r9",
       "text": "9. Provides comments organized by theme."
      },
      {
       "value": "r10",
       "text": "10. Provides comments in the order of the manuscript pages."
      },
      {
       "value": "r11",
       "text": "11. Reviews should not address the author directly, not as “you”. The phrases should be replaced by “the authors” or “the paper”."
      },
      {
       "value": "r12",
       "text": "12. Provides clear and concise comments."
      },
      {
       "value": "r13",
       "text": "13. Comments should start with a summary of the reviewer’s interpretation of the work."
      },
      {
       "value": "r14",
       "text": "14. After the summary, start with any general comments you may have on relevance, content and organization, language, or similar."
      },
      {
       "value": "r15",
       "text": "15. Provides general comments and speciﬁc comments."
      },
      {
       "value": "r16",
       "text": "16. Begin peer review comments with orienting remarks regarding the manuscript, including central or important ﬁndings."
      },
      {
       "value": "r17",
       "text": "17. Provides written referring to page numbers and line numbers in the manuscript."
      },
      {
       "value": "r18",
       "text": "18. Sign the review."
      },
      {
       "value": "r19",
       "text": "19. Date the review."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg9q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg10",
   "elements": [
    {
     "type": "html",
     "name": "pg10html1",
     "html": "This section is related to the Consistency dimension."
    },
    {
     "type": "boolean",
     "name": "pg10q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg10html2",
     "visible": false,
     "visibleIf": "{pg10q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg10q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 6,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Provides consistency between the comments to authors and the recommended decision."
      },
      {
       "value": "r2",
       "text": "2. Provides comments to the editors congruent with those provided to the authors. "
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg10q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg11",
   "elements": [
    {
     "type": "html",
     "name": "pg11html1",
     "html": "This section is related to the Relevance dimension."
    },
    {
     "type": "boolean",
     "name": "pg11q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg11html2",
     "visible": false,
     "visibleIf": "{pg11q1} = true",
     "html": "<p><b>Helpfulness:</b> This characteristic represents the ability of the review to support the editor's decision-making and to provide the authors with constructive feedback that will improve the manuscript. Constructive feedback is characterized by feeding forward with suggestions for direction and improvement. The constructiveness of how a critique is delivered will facilitate authors’ abilities to understand the information to improve the quality of their manuscripts.</p>\n\n<p><b>Specificity:</b> The criticisms should be specific, not vague. The review should have specific comments and suggest the precise changes that would improve the theory and analyses as well as provide actionable items for the author’s revisions. The reviewer must indicate what the problems are and exactly how they could or should be addressed. It is expected the reviewer give examples, references or whatever specific suggestions for analysis, writing, formatting, or summarizing the information to enhance the manuscript.</p>\n\n<p><b>Thoroughness:</b> The review is thorough when written in detail, covering all the necessary manuscript components. The editor's decision cannot be based on reviewers' vague judgment. The authors also need a detailed comment covering all the different aspects of the manuscript. The thorough review is usually of substantive length and includes meaningful analyses, leading to an in-depth review report.</p>\n\n<p><b>Fairness:</b> The comments should be expressed in a fair and balanced approach. The comments are fair when the manuscript is judged solely based on its scientific merit. It means that the review is unbiased and impartial, that is, it is free of personal or professional preferences. The comments should contain only comments on the manuscript consistent with scientific ideals. Additionally, the reviewer's comments should provide balanced critiques presenting the study's pros and cons or strengths and weaknesses. It is expected that the reviewer describes inadequacies that must be addressed but also highlights identiﬁed strengths of the manuscript to maintain a good balance between positive and negative comments.</p>\n\n<p><b>Readability:</b> All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where the comments are directed. Also, it is expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>\n\n<p><b>Courteousness:</b> The review text should be expressed in a courteous tone.  The comments should be polite and respectful. The review report is communication between peers within an ethical and professional process. Therefore, the report's tone should reflect respect for the colleagues and their work. A reviewer should always be courteous, not offensive, and constructive.</p>\n\n<p><b>Consistency:</b> It is important the consistency in what the reviewer says to the authors and the editor. The information presented in the review should be consistent between comments to the editor and comments to the author. Also, reviewers must ensure that what is written in the comments is congruent with the ultimate recommendation to accept, revise, or reject the manuscript.</p>\n\n<p><b>Relevance:</b> The referee should evaluate the goal of the work both for its validity and its significance. The comments should indicate the importance of the study and the potential impact of the study for publishing. A good review discusses the importance of a research question and its originality and its relevance. The review places the manuscript in the proper perspective. Such critiques indicate the state of knowledge in the ﬁeld being studied and how the manuscript contributes to the knowledge in the area.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg11q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "verticalAlign": "top",
     "alternateRows": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 7,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Specificity"
        },
        {
         "value": "3",
         "text": "Fairness"
        },
        {
         "value": "4",
         "text": "Thoroughness"
        },
        {
         "value": "5",
         "text": "Courteousness"
        },
        {
         "value": "6",
         "text": "Consistency"
        },
        {
         "value": "7",
         "text": "Relevance"
        },
        {
         "value": "8",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Includes statements related to the manuscript’s overall contribution to the field."
      },
      {
       "value": "r2",
       "text": "2. Provides statements related to the importance of the manuscript."
      },
      {
       "value": "r3",
       "text": "3. Includes statements related to the potential relevance of the work."
      },
      {
       "value": "r4",
       "text": "4. Provides an overall assessment of the originality of the study."
      },
      {
       "value": "r5",
       "text": "5. Includes statements related to the purpose of the study."
      },
      {
       "value": "r6",
       "text": "6. Include brief notes on the significance of the work and what it adds to current knowledge."
      },
      {
       "value": "r7",
       "text": "7. Summarizes the overall impression of the manuscript's validity and implications."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg11q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    }
   ]
  }
 ],
 "triggers": [
  {
   "type": "complete"
  },
  {
   "type": "complete",
   "expression": "{pg2q1} = 0"
  }
 ],
 "showProgressBar": "top",
 "firstPageIsStarted": true
}

const surveyJson = {
  "surveyId": "0b01a5a0-8aa6-4345-914d-58b66981fbc7",
  "surveyPostId": "0a2793ee-4bea-4c1f-95ce-dadd0de4a933"
}

function sendDataToServer(survey) {
    survey.sendResult('0a2793ee-4bea-4c1f-95ce-dadd0de4a933');
};


